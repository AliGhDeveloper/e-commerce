import Toast from './toast';
import Loading from './loading';
import { useSelector, useDispatch } from 'react-redux';

export default function Notify() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.notify);
    return (
      <>
        {state.loading && <Loading />}
        
        {state.error &&  
            <Toast 
              bgColor="danger"
              message={state.error}
              title="error" 
              handleShow={() => dispatch({ type:'NOTIFY', payload : {}})}
            />
        }
        
        {state.success &&
          <Toast 
            bgColor="success"
            message={state.success}
            title="success"
            handleShow={() => dispatch({ type:'NOTIFY', payload : {}})}
          />
        } 
          
          
        
      </>
    )
}