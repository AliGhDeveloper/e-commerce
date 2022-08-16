import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from 'styles/Users.module.css';
import { useRouter } from 'next/router';

const Users = () => {
    const { auth, users } = useSelector( state => state );
    const dispatch = useDispatch();
    const router = useRouter();
    
    if(!auth.user || auth.user && auth.user.role !== 'admin') return null

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
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center">
                                        <img style={{ width: "30px", height: "30px", objectFit: 'cover', overflow:"hidden"}} src={user.avatar} alt={user.avatar}/>
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ? user.root?  
                                            <>
                                                <li className="fas fa-check text-success"></li>
                                                <span className="text-success">Root</span>
                                            </>
                                            :
                                            <li className="fas fa-check text-success"></li>:
                                            <i className="fas fa-times text-danger"></i>
                                        }
                                    </td>
                                    <td className="action">
                                        <button className="btn btn-primary" onClick={() => {router.push(`/users/edit-user/${user._id}`)}}><i className="text-white fas fa-edit"></i></button>
                                        <button onClick={() => dispatch({ type: 'MODAL', payload: {state: users, item: user, actionType: 'ADD_USERS', auth}})} data-toggle="modal" data-target="#exampleModal" className="btn btn-danger ml-3">
                                            <i className="text-white fas fa-trash-alt"></i>
                                        </button>
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