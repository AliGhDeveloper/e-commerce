import Filebase from 'react-file-base64';

import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, postData, putData } from 'utils/fetchData';
import { useRouter } from 'next/router';

const CreateProduct = () => {

    const select = useRef();

    const { auth, categories, notify } = useSelector( state => state )
    
    
    // defining form states and values
    const initialValue = { title: "", description: "", content: "", category:"", inStock: "", price: "" };
    const [ productData, setProductData ] = useState(initialValue)
    const { category, title, description, inStock, price, content } = productData
    const [ images, setImages ] = useState([]);
    const [ selectedCat, setSelectedCat ] = useState(null) 
    
    
    const router = useRouter();
    const {id} = router.query;
    const dispatch = useDispatch();

    
    
    
    //getting product data if its updating a product
    useEffect(() => {
        if(id) {
            getData(`/products/${id}`)
            .then(response => response.json())
            .then(result => {
                if(result.error) return dispatch( {type: 'NOTIFY', payload: result });
                select.current.value = result.category
                setProductData( result )
                setImages( result.images )
            })
        }
    }, [id, dispatch])
    
    //checking authentication
    if(!auth || auth.user && auth.user.role !== 'admin' ) return null
    
    const handleInpChange = (e) => {
        const { name , value } = e.target;
        
        setProductData({ ...productData, [name] : value})
    }
    
    
    //giving images and saving them in (images) state variable
    const handleImageUpload = (obj) => {
        let newImages = [];
        let num = 0;
        let error = '';
        const files = [...obj];
        
        
        if(files.length === 0) return dispatch({ type: 'NOTIFY', payload: { error: 'file does not exist'}});

        files.forEach(file => {
            if( file.type !== 'image/jpeg' && file.type !== 'image/png') {
                return error = 'file types must be jpeg or png'
            }
            num += 1;
            if(num <= 5 ) newImages.push(file);
            return newImages
        });

        if(error) dispatch({ type: 'NOTIFY', payload: { error }})
        if( images.length + newImages.length > 5) return dispatch({ type: 'NOTIFY', payload: { error: 'only 5 files alowed'}});
        
        setImages([...images, ...newImages])
    };

    
    const handleDeleteImg = (image) => {
        setImages(images.filter( item => image.name !== item.name))
    };

    
    //handling create Products
    const handleSubmit = () => {
        //checking the inputs 
        if( !auth || auth.user.role !== 'admin' ) return dispatch({ type: 'NOTIFY', payload: { error: 'authentication error'}});
        if( !title || !category || category === 'all' || !description || !content || !inStock || !price ) return dispatch( { type: 'NOTIFY', payload: {error: 'please add all fields'}})
        if(images.length === 0) return dispatch( { type: 'NOTIFY', payload : { error: 'please select at least one image'}});
        const imageUrls = images.map(image => ({ publice_id: '', url: image.url? image.url : image.base64}))
        
        //updating the product if id exist
        dispatch({type: 'NOTIFY', payload: {loading: 'please wait...'}})
        if(id) {
            putData(`/products/${id}`, {...productData, images: imageUrls} , auth.access_token)
                .then( response => response.json())
                .then( (result) => dispatch({ type: 'NOTIFY', payload: result}) );
        } else {
            postData('/products', {...productData, images: imageUrls}, auth.access_token)
                .then( response => response.json())
                .then( (result) =>  {
                    dispatch({ type: 'NOTIFY', payload: result})
                    if(!result.error) {
                        setProductData(initialValue);
                        setImages([])
                    }
                })
        }
        
    }


    return (
        <div className="container">
            
            <div className="row my-4">
                    <div className="col-md-6">
                            <input type="text" name="title" value={title} className="form-control mb-3 w-100" placeholder="title..." onChange={handleInpChange}/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input type="text" name="price" className="form-control " value={price} placeholder="price" onChange={handleInpChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">inStock: </span>
                                        </div>
                                        <input type="number" name="inStock" value={inStock} className="form-control" onChange={handleInpChange}/>
                                    </div>
                                </div>
                            </div>
                            <textarea placeholder="description" value={description} name="description" className="form-control mb-3 w-100" cols="4" rows="3" onChange={handleInpChange}></textarea>
                            <textarea placeholder="content" value={content} name="content" className="form-control mb-3 w-100" cols="4" rows="4" onChange={handleInpChange}></textarea>
                            <select ref={select} value={category} name="category" className="form-select d-block mb-3 w-100" onChange={handleInpChange}>
                                <option value="all">all produts</option>
                                {
                                    categories.map( cat => (
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    ))
                                }
                            </select> 
                            <button className="btn btn-secondary" disabled={notify.loading} onClick={handleSubmit}>
                                { id ? "Update" : "Create"}
                            </button>

                    </div>

                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Upload</span>
                            </div>
                            <div className="custom-file border">
                                <span style={{opacity: '0'}}>
                                    <Filebase multiple={true} className="custom-file-input mb-3 w-100" onDone={(obj) => handleImageUpload(obj)} />
                                </span>
                                {/* <input type="file" className="custom-file-input mb-3 w-100 " multiple accept='image/*' onChange={handleImageUpload}/> */}
                            </div>
                        </div>
                        <div className="up_images">
                            {
                                images && images.map( (img, index) => (
                                    <div key={index} className="img" >
                                        <img src={ img.base64? img.base64 : img.url } alt="" className="img-thumbnail rounded"/>
                                        <span onClick={() => handleDeleteImg(img)} >x</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                
            </div>
        
        </div>
    )
}

export default CreateProduct