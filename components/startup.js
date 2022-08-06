import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getData } from "utils/fetchData";


export default function StartUp( { children } ){
    const dispatch = useDispatch();
    const { cart, auth } = useSelector(state => state)
    
    useEffect(() => {
        const firstLogin = localStorage.getItem('firstlogin');
        if(firstLogin) {
                getData('/auth/accessToken')
                    .then(response => response.json())
                    .then(result => {
                        if(result.error) return dispatch({ type : 'NOTIFY', payload : result})
                        dispatch({ type: 'AUTH', payload: result})
                    })
                
                }
                getData('/categories')
                    .then(response => response.json())
                    .then( result => {
                        if(!result.error) return dispatch( { type: 'ADD_CAT', payload: result })
                    })
                
    }, []);

    useEffect(() => {
        const __next__cart = JSON.parse(localStorage.getItem('nextCart'));
        if(__next__cart && __next__cart.length > 0) {
            dispatch( { type: 'ADD_CART', payload : __next__cart})
        }
    }, [])
    
    
    useEffect( () => {
        let newCart = JSON.stringify(cart);
        localStorage.setItem('nextCart', newCart)
    }, [cart]);
    
    
    useEffect(() => {
        if(auth.access_token) {
            getData('/orders', auth.access_token)
                .then(res => res.json())
                .then(data => {
                    if( data.error ) {
                        return dispatch( {type : 'NOTIFY', payload : data} )
                    } 
                    dispatch({ type : 'ADD_ORDERS', payload : data})
                })
        }
        if(auth.user && auth.user.role ==='admin') {
            getData('/users', auth.access_token)
                .then( response => response.json())
                .then( result => {
                    if( result.error ) return dispatch({ type: 'NOTIFY', payload: result})
                    
                    dispatch({ type: 'ADD_USERS', payload : result})
                })
        }   
    }, [auth])

    return (
        <>
            {children}
        </>
    )
}