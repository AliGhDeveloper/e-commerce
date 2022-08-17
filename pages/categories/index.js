import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { postData, putData } from 'utils/fetchData';
import { updateItem } from 'store/Actiontypes';

const Categories = () => {
    const catInp = useRef();
    const dispatch = useDispatch();
    const { auth, categories } = useSelector( state => state );
    const [ name, setName ] = useState('');
    const [ id, setId ] = useState('')

    if( !auth || auth.user && auth.user.role !== 'admin' ) return null;
    const handleClick = () => {
        if( auth.user && auth.user.role !== 'admin' ) return dispatch( { type: 'NOTIFY', payload: {error: 'Only admins can add/update categories'}});
        
        if(id) { 
            if(!name) return dispatch({type: 'NOTIFY', payload: {error: 'enter the category name!'}})

            putData(`/categories/modify/${id}`, { name }, auth.access_token)
            .then( response => response.json())
            .then( result => {
                if(result.error) return dispatch( { type: 'NOTIFY', payload: result});
                dispatch(updateItem(categories, id, {...result, name}, 'ADD_CAT'))
            })
        } else {
            if(!name) return dispatch({type: 'NOTIFY', payload: {error: 'enter the category name!'}})
            
            postData('/categories', { name }, auth.access_token)
                .then( response => response.json())
                .then( result => {
                    if(result.error) return dispatch( { type: 'NOTIFY', payload: result});
                    dispatch( { type: 'ADD_CAT', payload: [...categories, result] })
                    setName('')
                })
        }
        
    };

    const addCat = () => {
        setId('');
        setName('');
        catInp.current.focus()
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div className="container cats">
            <div className="col-md-8 my-4 mx-auto">
                <div className="form-group text-center d-flex">
                    <input ref={catInp} type="text" name="category" value={name} className="form-control" onChange={handleChange} placeholder="category name" />
                    <button className="btn btn-secondary" onClick={handleClick}>{ id ? "Update" : "Create" }</button>
                </div>
                {
                    categories && 
                    categories.map( category => (
                        <div key={category._id} className='card'>
                            <div className="card-body d-flex justify-content-between">
                                <span>{category.name}</span>
                                <div>
                                    <button  onClick={() => { setId(category._id); setName(category.name); catInp.current.focus() }} className="btn btn-primary">
                                    <i className="text-white fas fa-edit"></i>
                                    </button>
                                    <button data-toggle="modal" data-target="#exampleModal" onClick={() => dispatch({ type: 'MODAL', payload: {title : category.name, state: categories, item: category, actionType: 'ADD_CAT', auth }})} className="btn btn-danger ml-3">
                                    <i className="text-white fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="row my-3 d-flex justify-content-center align-items-center">
                <button className="btn btn-success"onClick={addCat}><i className="text-white fas fa-plus" ></i></button>
            </div>  
        </div>
    )
};

export default Categories;