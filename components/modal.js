import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from 'store/Actiontypes';
import { deleteData } from 'utils/fetchData';

export default function Modal () {

    const {modal, cart, users, products} = useSelector( state => state )
    const dispatch = useDispatch();


    const handleClick = () => {
        if(modal){
            const { actionType, item, state, auth } = modal
            if( actionType === 'ADD_USERS') {
                if( auth.user._id === item._id ) return dispatch({ type : 'NOTIFY', payload : {error: 'admins cant delete their own account'}});
                
                if( !auth.user.root && item.role === 'admin' ) return dispatch({ type : 'NOTIFY', payload : {error: "only roots can delete admin's accounts"}});
             
                deleteData(`/users/deleteuser/${item._id}`, modal.auth.access_token)
                    .then( response => response.json() )
                    .then( result => {
                        if(result.error) return dispatch({ type: 'NOTIFY' ,payload: result});
                        dispatch(deleteItem(item._id, users, 'ADD_USERS'));
                    })
            
            } else if( actionType === 'ADD_CART'){ 
                
                dispatch(deleteItem(item._id, cart, actionType));
            
            } else if( actionType === 'ADD_CAT' ){
                
                deleteData(`/categories/modify/${modal.item._id}`, modal.auth.access_token)
                    .then( response => response.json())
                    .then( result => console.log(result))
            
            } else if( actionType === 'deleteProduct') {
                
                return deleteData( `/products/${item._id}`,null, modal.auth.access_token)
                    .then(response => response.json())
                    .then(result => {
                        if(result.error) return dispatch({type: 'NOTIFY', payload: result})
                        modal.setProducts( state.filter(i => item._id !== i._id))
                    })
            
            } else if( actionType === 'deleteAllProducts') { 
                dispatch({ type: 'NOTIFY', payload: { loading: 'please wait...'}})
                return deleteData('/products', modal.item, modal.auth.access_token)
                    .then(response => response.json())
                    .then(result => {
                        if(result.error) return dispatch({type: 'NOTIFY', payload: result})
                        let newProducts = [...state];
                        item.forEach(id => {
                            newProducts = newProducts.filter( i => i._id !== id)
                        });
                        modal.setProducts(newProducts)
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