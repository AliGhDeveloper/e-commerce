import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { val } from "utils/val";
import { patchData } from "utils/fetchData";
import uploadImage from 'utils/uploadImage';
import OrderItem from "components/orderItem";
import Link from "next/link";


export default function Profile( ) {
    //export from store
    const { auth, notify, orders } = useSelector(state => state );
    
    const initialValue = {newPassword : '', cf_newPassword: '', email : auth.user? auth.user.email : ''}
    const [ data, setData ] = useState(initialValue);
    const { email, newPassword, cf_newPassword } = data;


    const router = useRouter();
    const dispatch = useDispatch();
    
    if(!auth.user) return null
    
    const handleInpChange = (e) => {
        const { name, value } = e.target;

        setData({...data, [name] : value})
    };

    const handleSubmit = async () => {
        // if(newPassword){
        //     changePass();
        // }
        // if(data.selectedFile) {
        //     changeAvatar();
        // }
        changeAvatar()
    };

    const changePass = async() => {
        const errorMessage = val(email, newPassword, cf_newPassword);
        if(errorMessage) return dispatch( { type : 'NOTIFY', payload : { error: errorMessage}});
        dispatch( { type : 'NOTIFY', payload : {loading: 'please wait...'}});
        const response = await patchData('http://localhost:3000/api/profile/changepass', data, auth.access_token)
        const result = await response.json();
        if(result.error) return dispatch({ type: 'NOTIFY', payload : result});
        return dispatch( { type :'NOTIFY', payload : { success : 'your password changed successfully'}})
    };

    const changeAvatar = async() => {
        const file = data.selectedFile[0];
        if(file.type !== 'image/jpeg' && file.type !== 'image/png' ) return dispatch({ type: 'NOTIFY', payload : { error: 'file type must be jpeg or png'}})
        dispatch( { type : 'NOTIFY', payload : { loading: 'please wait' } });

        uploadImage(data.selectedFile);
    }


    return (
        <div className="container">
            <div className="row my-5 " >
                <div className="col-md-4 px-4 py-4 bg-light" style={{borderRadius: "5px"}}> 
                    <div className='avatar'>
                        <img className="profileImage" src={auth.user.avatar}  alt={auth.user.avatar} />
                        <span className="text-center imageSpan">
                            <span className="cameraicon"><i className="fas fa-camera"></i></span>
                            <span className="d-block " id="myspan" >change avatar</span>
                            <input type="file" multiple={false} name="up_file" onChange={(e) => {console.log(e.target.files);setData({...data, selectedFile: e.target.files })}}/>
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
                                                <tr>
                                                    <td className="p-2"><Link href={`http://localhost:3000/profile/orders/${order._id}`} >{order._id}</Link></td>
                                                    <td className="p-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                                                    <td className="p-2">
                                                        { order.delivered ? 
                                                            <li className="fas fa-check text-success"></li>:
                                                            <i class="fas fa-times text-danger"></i>
                                                        }
                                                    </td>
                                                    <td className="p-2">
                                                        { order.paid ? 
                                                            <li className="fas fa-check text-success"></li>:
                                                            <i class="fas fa-times text-danger"></i>
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
