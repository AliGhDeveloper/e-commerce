import { useDispatch, useSelector } from "react-redux"
import { increaseItem, decreaseItem } from 'store/Actiontypes';
export default function CartItem({ item }) {
    const cart = useSelector( state => state.cart );
    const dispatch = useDispatch();
    
    
    return (
        <>
            <tr style={{ borderTop: "1px solid black"}} >
                <td style={{ width: "100px", overflow:'hidden'}}>
                    <img src={item.images[0].url} alt={item.images[0].url} className=" w-100  img-thumbnail" style={{ minWidth: '80px', height: '80px'}} />
                </td>
                <td style={{ minWidth: "200px", textAlign: 'center'}} >
                    <h5 className="text-capitalize">{ item.title } </h5>
                    <h6 className="text-danger">$ { item.quantity * item.price }</h6>
                    <h6 className="text-danger">inStock : { item.inStock }</h6>
                </td>
                <td style={{ minWidth: "200px", textAlign: 'center'}} >
                    <button onClick={() => dispatch(decreaseItem(cart, item._id))} className="btn btn-outlined" disabled={item.quantity === 1 ? true : false}> - </button>
                    <span className="px-2"> { item.quantity } </span>
                    <button onClick={() => dispatch(increaseItem(cart, item._id))}className="btn btn-outlined" disabled={ item.quantity === item.inStock ? true : false}> + </button>
                </td>
                <td>
                    <i  data-toggle="modal" data-target="#exampleModal" onClick={ () => dispatch({ type: 'MODAL', payload: {state: cart, item, actionType: 'ADD_CART' }})} className="text-danger fas fa-trash-alt"></i>
                </td>
            </tr>
        </>
    )
}