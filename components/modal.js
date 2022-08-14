import { productionBrowserSourceMaps } from 'next.config';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from 'store/Actiontypes';
import { deleteData } from 'utils/fetchData';

export default function Modal () {

    const {modal, cart, users, products} = useSelector( state => state )
    const dispatch = useDispatch();


    const handleClick = () => {
        if(modal){
            const { actionType, item } = modal
            if( actionType === 'deleteUser') {
                
                deleteData(`/users/deleteuser/${modal.item._id}`, modal.auth.access_token)
                    .then( response => response.json() )
                    .then( result => console.log(result))
                dispatch(deleteItem(modal.item._id, users, 'ADD_USERS'));
            
            } else if( actionType === 'ADD_CART'){ 
                console.log(item._id)
                dispatch(deleteItem(item._id, cart, actionType));
            
            } else if( actionType === 'ADD_CAT' ){
                
                deleteData(`/categories/modify/${modal.item._id}`, modal.auth.access_token)
                    .then( response => response.json())
                    .then( result => console.log(result))
            
            } else if( actionType === 'deleteProduct') {
                
                return deleteData( `/products/${item._id}`,null, modal.auth.access_token)
                    .then(response => response.json())
                    .then(result => console.log(result))
            
            } else if( actionType === 'ADD_PRODUCT') { 
                dispatch({ type: 'NOTIFY', payload: { loading: 'please wait...'}})
                return deleteData('/products', modal.item, modal.auth.access_token)
                    .then(response => response.json())
                    .then(result => {
                        if(result.error) return dispatch({type: 'NOTIFY', payload: result})
                        dispatch(deleteItem(item, modal.state, actionType))
                        return dispatch({type: 'NOTIFY', payload: result})
                    })
                
                return 
            }
        }
        dispatch(deleteItem(modal.item._id, modal.state,  modal.actionType));
        handleModalClose();
    }

    const handleModalClose = () => {
        dispatch( { type: 'MODAL' , payload: {}})
    }

    return (
        <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="text-capitalize modal-title" id="exampleModalLabel" >{ modal.title && modal.title}</h5>
                <button type="button" className="close" onClick={handleModalClose} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                Are you sure you want to delete this item?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleModalClose} >Close</button>
                <button type="button" onClick={ handleClick } data-dismiss="modal" className="btn btn-danger">Yes</button>
            </div>
            </div>
        </div>
        </div>
    )
}