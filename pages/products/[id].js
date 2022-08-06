import { useState } from "react";
import { getData } from "utils/fetchData";
import styles from 'styles/DetailsProduct.module.css';


export default function ProductDetail( { product } ) {
    const [ tab, setTab ] = useState(0);

    const isActive = (index) => {
        if( index === tab ){
            return styles.active_img
        } else {
            return ""
        }
    };

    const handleImgClick = (index) => {
        setTab(parseInt(index))
    }
    console.log(product.images[0].url)
    return (
        <div className="container details mt-3">
            <div className="row">
                <div className=" col-md-6" >
                    <img src={product.images[tab].url} className="d-block rounded img-thumbnail w-100" style={{height: "350px"}} />
                    <div className="row mx-0">
                        {
                            product.images.map( (image,index) => {
                                return <img key={index} src={image.url} className={`${isActive(index)} img-thumbnail rounded`} style={{cursor: 'pointer', width: '80px', height: '80px'}} alt={image.url} onClick={() => handleImgClick(index)} />
                            })
                        }
                    </div>
                </div>
                <div style={{}} className="col-md-6">
                    <h5 className="text-capitalize ">{product.title}</h5>
                    <p>{product.content}</p>
                    <button className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    )
};

export async function getServerSideProps(context) {
    const { params } = context;
    const response = await getData(`http://localhost:3000/api/products/${params.id}`);
    const data = await response.json();
    return {
        props : {
            product : data
        }
    }
}