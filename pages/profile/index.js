import { useRouter } from "next/router";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { passswordVal } from "utils/val";
import { patchData } from "utils/fetchData";
import Link from "next/link";
import Filebase from 'react-file-base64';



export default function Profile( ) {
    
    const { auth, notify, orders } = useSelector(state => state );
    const initialValue = {newPassword : '', cf_newPassword: ''}
    const [ data, setData ] = useState(initialValue);
    const [ avatar, setAvatar ] = useState(null);
    const { newPassword, cf_newPassword } = data;
    const dispatch = useDispatch();
    
    
    if(!auth.user) return null
    
    const handleInpChange = (e) => {
        const { name, value } = e.target;

        setData({...data, [name] : value})
    };

    const handleSubmit = async () => {
        if(newPassword && !data.selectedFile){
            changePass();
        } 
        if(data.selectedFile && !newPassword) {
            changeAvatar();
        }
        if(data.selectedFile && newPassword){
            changeAvatar();
            changePass();
        }
        if(!data.selectedFile && !newPassword){
            dispatch({type: 'NOTIFY', payload: {error: "please change avatar or password to submit"}})
        }
        
    };

    const changePass = async() => {
        
        //validating inputs
        const errorMessage = passswordVal(newPassword, cf_newPassword) 
        if(errorMessage) return dispatch( { type : 'NOTIFY', payload : { error: errorMessage}});
        
        dispatch( { type : 'NOTIFY', payload : {loading: 'please wait...'}});
        
        
        const response = await patchData('/profile/changepass', data, auth.access_token)
        const result = await response.json();
        
        if(result.error) return dispatch({ type: 'NOTIFY', payload : result});
        return dispatch( { type :'NOTIFY', payload : { success : 'profile updated!'}})
    };

    const Done = (obj) => {
        if(obj.type !== 'image/jpeg' && obj.type !== 'image/png' ) return dispatch({ type: 'NOTIFY', payload : { error: 'file type must be jpeg or png'}})
        
        dispatch({type: 'NOTIFY', payload: {success: 'file selected'}})
        return setData({...data, selectedFile: obj})
    }

    const changeAvatar = () => {
        const file = data.selectedFile.base64
        patchData('/profile/changeavatar', file, auth.access_token)
            .then( response => response.json())
            .then( result => {
                if(result.error) dispatch({ type: 'NOTIFY', payload: result})
                setAvatar(file)
                dispatch({ type: 'NOTIFY', payload: {success: 'profile updated'}})
            })
    }


    return (
        <div className="container">
            <div className="row my-5 " >
                <div className="col-md-4 px-4 py-4 bg-light" style={{borderRadius: "5px"}}> 
                    <div className='avatar'>
                        <img className="profileImage" src={avatar? avatar : auth.user.avatar}  alt={auth.user.avatar} />
                        <span className="text-center imageSpan">
                            <span className="cameraicon"><i className="fas fa-camera"></i></span>
                            <span className="d-block" id="myspan" >change avatar</span>
                            <Filebase type="file" multiple={false} name="up_file" className="up_file" onDone={(obj) => Done(obj)}/>
                        </span>
                    </div>                    
                    <div className="changePassword">
                        <input type="email" className="form-control my-2" disabled={true}  value={auth.user.email}/>
                        <h6>change password: </h6>
                        <input type="password" className="form-control my-2" placeholder="new password..." name="newPassword" onChange={handleInpChange} />
                        <input type="password" className="form-control my-2" placeholder="confirm new password..." name="cf_newPassword" onChange={handleInpChange} />
                        <button className="btn btn-secondary" onClick={handleSubmit} disabled={notify.loading}>update</button>
                    </div>
                </div>
                <div className="col-md-8 p-4 bg-light table-responsive">
                    {
                        !orders ? <h1> you have no orders</h1>
                        : 
                        (
                            <>
                                <h2>Orders : </h2>
                                <table className="table-bordered table-hover   w-100" style={{minWidth: '600px'}}>
                                    <thead>
                                        <tr>
                                            <td className="p-2">ID</td>
                                            <td className="p-2">date</td>
                                            <td className="p-2">delivered</td>
                                            <td className="p-2">paid</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map( order => (
                                                <tr key={order._id}>
                                                    <td className="p-2"><Link href={`/profile/orders/${order._id}`} >{order._id}</Link></td>
                                                    <td className="p-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                                                    <td className="p-2">
                                                        { order.delivered ? 
                                                            <li className="fas fa-check text-success"></li>:
                                                            <i className="fas fa-times text-danger"></i>
                                                        }
                                                    </td>
                                                    <td className="p-2">
                                                        { order.paid ? 
                                                            <li className="fas fa-check text-success"></li>:
                                                            <i className="fas fa-times text-danger"></i>
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </>
                        )
                        
                    }
                </div>
            </div>
        </div>
    )
};
