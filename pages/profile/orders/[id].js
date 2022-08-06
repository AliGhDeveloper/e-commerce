import { useSelector, useDispatch } from "react-redux";
import { patchData } from "utils/fetchData";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { updateItem } from "store/Actiontypes";

export default function OrderDetails() {
    const { orders, auth } = useSelector(state => state);

    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    const [ orderDetails, setOrderDetails ] = useState(null)

    
    useEffect(() => {
        if(orders) {
            const ord = orders.filter( order => order._id === id);
            
            if(!ord) {
                router.push('/404')
            }
            setOrderDetails(ord[0])
        }
    }, [orders]);
    
    if(!auth.user) return null
    
    const handlePayment = async() => {
        const response = await patchData(`/orders/${orderDetails._id}`, null, auth.access_token)
        const result = await response.json();

        if(result.error) return dispatch( { type: 'NOTIFY', payload: result});

        dispatch(updateItem(orders, orderDetails._id, {...orderDetails, paid: result.data.paid, paidAt: result.data.paidAt }, 'ADD_ORDERS'))
        return dispatch( { type : 'NOTIFY', payload : { success : result.message}})
    };

    const handleDelivered = async() => {
        dispatch({ type : 'NOTIFY', payload: { loading: 'please wait...'}});

        const response = await patchData(`/orders/delivered/${orderDetails._id}`, null, auth.access_token);
        const result = await response.json();

        if( result.error ) return dispatch({ type: "NOTIFY", payload : result });

        dispatch({ type : "NOTIFY", payload: { success : "order updated"}});
        if(orderDetails.paid) { 
            dispatch(updateItem(orders, orderDetails._id, {...orderDetails, delivered: true} ))
        } else {
            dispatch(updateItem(orders, orderDetails._id, {...orderDetails, paid: true, paidAt: result.data.paidAt, delivered: true, method: result.data.method} ))
        }
    }
    return (
        <div className="container d-flex justify-content-around">
            <div className="details my-4" >
                {
                    orderDetails && (
                        <>
                            <h1 className="mb-3">{orderDetails._id}</h1>
                            <h3>shipping</h3>
                            <ul style={{listStyle: "none"}}>
                                <li>Address : { orderDetails.address }</li>
                                <li>Telephone : { orderDetails.telephone }</li>
                                <li>User ID : { orderDetails.user }</li>
                            </ul>
                            <div className={`alert ${ orderDetails.delivered ? 'alert-success' : 'alert-danger'} d-flex justify-content-between align-items-center`}>
                                {
                                    orderDetails.delivered ? `delivered` : 'not delivered'
                                }
                                {
                                    auth.user.role === 'admin' && auth.user.root && !orderDetails.delivered && (
                                        <button className="btn btn-secondary" onClick={handleDelivered}>MARK AS DELIVERED</button>
                                    )

                                }
                            </div>
                            <div className={`alert ${ orderDetails.paid ? 'alert-success' : 'alert-danger'}`}>
                                {
                                    orderDetails.paid ? `paid at ${ orderDetails.paidAt }` : 'not paid'
                                }
                            </div>
                            <h3>cart: </h3>
                            <div className="table-responsive">
                                <table className="table-bordered w-100" >
                                    <tbody>
                                        {
                                            orderDetails && orderDetails.cart.map( item => (
                                                <tr key={item._id}>
                                                    <td className="p-1"><img className="img-thumbnail w-100" style={{height: '80px', maxWidth: '80px'}} src={item.images[0].url} alt={item.images[0].url} /></td>
                                                    <td className="p-1">
                                                        <h6 className="text-danger text-capitalize">{item.title}</h6>
                                                        <h6>{item.quantity} x {item.price} = {item.quantity * item.price} $</h6>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )
                }
            </div>
            {
                orderDetails && !orderDetails.paid && auth.user && auth.user.role !== 'admin' &&(
                <div className="payment-button p-4">
                    <h2>payment: </h2>
                    <button className="btn btn-primary" onClick={handlePayment}>PayPal</button>
                </div>)
            }
        </div>
    )
};