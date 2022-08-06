import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { patchData } from 'utils/fetchData';
import { updateItem } from 'store/Actiontypes';

export default function EditUser() {
    const { auth, users } = useSelector(state => state)

    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query
    
    const [ user, setUser ] = useState({})
    const [ isAdmin, setIsAdmin ] = useState( null )
    
    if( !auth || auth.user && auth.user.role !== 'admin') return null
    
    useEffect(() => {
        if(users) { 
            const arr = users.filter(user => user._id === id );
            setUser(arr[0])
        }
        
    }, [users])

    useEffect(() => {
        if(user) { 
            setIsAdmin(user.role === 'admin' ? true : false)
        }
        
    }, [user])
    
    
    const handleCheck = (e) => {
        if( auth.user.role === 'admin' &&  !auth.user.root ){
            dispatch( { type: 'NOTIFY', payload: {error: 'you must be a root admin to commit changes'}})
        }else if( auth.user._id === id ) {
            dispatch( { type: 'NOTIFY', payload: {error: 'root admins cannot commit changes for their own account'}})
        }else { 
            setIsAdmin(!isAdmin);
            
            patchData(`http://localhost:3000/api/users/changerole/${user._id}`, {isAdmin: e.target.checked}, auth.access_token)
                .then( response => response.json())
                .then( result => { console.log(result) });

            dispatch(updateItem(users, user._id, { ...user, role: e.target.checked ? 'admin' : 'user'}, 'ADD_USERS' ))
        } 
    }

    return (
        <>
            {
                user && 
                <div className="container">
                    <button className="btn btn-secondary" onClick={() => router.back()}><i style={{zIndex: '102'}} className="text-white fas fa-arrow-left"></i>go back</button>
                    <div className="col-md-8 my-3 mx-auto">
                        <h2>{ user._id }</h2>
                        <div className="form-group">
                        <label htmlFor="userEmail" className="d-block">Email:</label>
                            <input type="text" name="email" className="form-control" disabled id="userEmail" value={user.email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userAdmin" >IsAdmin</label>
                            <input type="checkbox" checked={isAdmin} onChange={handleCheck} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}