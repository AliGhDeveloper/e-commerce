import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from 'styles/Users.module.css';

const Users = () => {
    const { auth, users } = useSelector( state => state );
    const dispatch = useDispatch();

    if(!auth.user || auth.user && auth.user.role !== 'admin') return null

    const handleDelete = (user) => {
        // if( auth.user._id === user._id ){
        //     dispatch({ type : 'NOTIFY', payload : {error: 'admins cant delete their own account'}});
        // } else if ( !auth.user.root && user.role === 'admin' ) {
        //     dispatch({ type : 'NOTIFY', payload : {error: "only roots can delete admin's accounts"}});
        // } else { 
            dispatch({ type: 'MODAL', payload: {item: user, actionType: 'deleteUser', auth}});
        // }
    }
    return (
        <div className="container">
            <div className="row my-3 table-responsive">
                <table className={`table-bordered w-100 ${styles.users_table}`}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>AVATAR</th>
                            <th>ADMIN</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( user => (
                                <tr >
                                    <td>{user._id}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center">
                                        <img style={{ width: "30px", height: "30px", objectFit: 'cover', overflow:"hidden"}} src={user.avatar} alt={user.avatar}/>
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ? user.root?  
                                            <li className="fas fa-check text-success">Root</li>:
                                            <li className="fas fa-check text-success"></li>:
                                            <i className="fas fa-times text-danger"></i>
                                        }
                                    </td>
                                    <td className="action">
                                        <Link href={`/users/edit-user/${user._id}`} ><i className="text-primary fas fa-edit"></i></Link>
                                        <i  data-toggle="modal" data-target="#exampleModal" onClick={() => handleDelete(user)} className="text-danger fas fa-trash-alt ml-3"></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Users;