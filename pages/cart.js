import Navbar from "@/layout/navbar"
import Image from 'next/image';
import Head from 'next/head';
import emptyCart from 'public/empty-cart.png'
import CartItem from "components/cartItem";
import Modal from "components/modal";
import Notify from "components/notify";

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { shippingVal } from "utils/val";
import { getData, postData } from "utils/fetchData";
import OrderDetails from "./profile/orders/[id]";



export default function Cart(){
    //shipping states
    const initialValue = { address: '', email: '', telephone: ''};
    const [ shippingData, setShippingData ] = useState(initialValue)
    const { address, email, telephone } = shippingData;
    const [ total, setTotal ] = useState(1);
    
    const [ callback, setCallback ] = useState(false);
    
    
    const { cart, auth, notify, orders }= useSelector( state => state ) ;
    const dispatch = useDispatch();
    const router = useRouter();
    
    //updating the cart
    useEffect(() => {
        const cartLocal = JSON.parse(localStorage.getItem('nextCart'));
        if(cartLocal && cartLocal.length > 0){ 
            let newCart = [];
            const updateCart = async () => {
                for( const item of cartLocal ){
                    const response = await getData(`/products/${item._id}`);
                    const { _id, title, images, price, inStock, sold } = await response.json();
                    if(inStock > 0) {
                        newCart.push({_id, title, price, images, inStock, sold, 
                        quantity : item.quantity > inStock ? 1 : item.quantity })
                    }
                };
                dispatch({ type: 'ADD_CART', payload : newCart });
            }
            updateCart()
        }
    }, [callback])


    //messuaring total price
    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, current) => {
                return prev + current.quantity * current.price
            }, 0);
            setTotal(res)
        };
        getTotal()
    }, [cart])
    
    
    //checking if the cart is empty or not
    if( cart.length === 0 ) return (
        <div className="container">
            <Image placeholder="blur" src={ emptyCart } alt="" style={{  width: '100%'}}/>
        </div>
    );
    
    
    //setting up shipping Data:
    
    const dataSetter = (e) => { 
        const { name, value } = e.target;
        setShippingData({ ...shippingData, [name] : value })
    }

    //handle shipping
    const handleSubmit = async () => {
        if(!auth.user) { 
            router.push('/signin');
        }
        const errorMessage = shippingVal(address, email, telephone);
        if(errorMessage) return dispatch({ type: 'NOTIFY', payload: {error: errorMessage } })

        let newArr = [];
        for( const item of cart ) {
            const res = await getData(`/products/${item._id}`);
            const data = await res.json();
            if(data.inStock - item.quantity >= 0){
                newArr.push(item)
            } 
        }

        if(newArr.length < cart.length) {
            setCallback(!callback);
            return dispatch( {type : 'NOTIFY', payload: { error: 'item out of stock'}})
        }
        
        const response = await postData('/orders', {...shippingData, cart, total}, auth.access_token);
        const result = await response.json();
        
        if(result.error) return dispatch({ type: 'NOTIFY', payload : result});
        
        dispatch( { type: 'NOTIFY', payload: { success : 'order confirmed wait for our call!'}})
        dispatch( { type : 'ADD_CART', payload: []});
        dispatch( { type : 'ADD_ORDERS', payload: [...orders, result]});
        router.push(`/profile/orders/${result._id}`);
    }


    
    return (
        <div className="cart container">
            <Head>
                <title>cart</title>
            </Head>
            <div className="row">
                <div className="col-md-8 my-3 table-responsive">
                    <table>
                        <tbody>
                            {
                                cart.map( item => (
                                    <CartItem item={item} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4 my-3">
                    <h6>Shiping</h6>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="addressInp">Address : </label>
                            <input type="text" id="addressInp" onChange={dataSetter} name="address" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephoneInp">telephone : </label>
                            <input type="text" id="telephoneInp" onChange={dataSetter} name="telephone" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInp">email : </label>
                            <input type="text" id="emailInp" name="email" onChange={dataSetter} className="form-control"/>
                        </div>
                        <h4 className="text-secondary">Total : ${total}</h4>
                        <button className="btn btn-secondary" disabled={ notify.loading } onClick={handleSubmit}>PROCEED WITH PAYMENT</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

Cart.getLayout = function pageLayout(page){
    return (
        <>
            <Navbar />
            <Notify />
            <Modal />
            {page}
        </>
    )
}