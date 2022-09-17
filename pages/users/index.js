import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from 'styles/Users.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getData } from 'utils/fetchData';

const Users = () => {
    const [more, setMore] = useState(false)
    const [page, setPage] = useState(1)
    const [isAdmin, setIsAdmin] = useState(false);
    const [userid, setUserid] = useState(null)
    const { auth } = useSelector( state => state );
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const router = useRouter();
    
    useEffect(() => {
        if(auth.user && auth.user.role ==='admin') {
            getData(`/users?limit=${4}&search=${userid ? userid : 'all'}&isadmin=${isAdmin}&page=${page}`, auth.access_token)
                .then( response => response.json())
                .then( result => {
                    if( result.error ) return console.log(result)
                    setUsers([...result.data])
                    setMore(result.more)
                })
        }
    }, [auth, userid, isAdmin, page])
    
    if(!auth.user || auth.user && auth.user.role !== 'admin' ) return <h1>Access Denied</h1>
    if(users.length < 0) return <h1>No user to show</h1>
    
    return (
        <div className="container">
            <form className="form d-flex justify-content-around my-2 align-items-center">
                <input type="text" className="form-control w-50" placeholder="User id..." onChange={(e) => setUserid(e.target.value)}/>
                <div className="form-group mb-0">
                    <input type="checkbox" id="admincheck" checked={isAdmin} onChange={(e) => {setIsAdmin(e.target.checked); setPage(1)}} className="form-input-check" />
                    <label className=" mb-0" htmlFor="admincheck">Admin</label>
                </div>
            </form>
            <div className="row my-3 table-responsive p-3">
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
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-sm btn-primary" onClick={() => {router.push(`/users/edit-user/${user._id}`)}}><i className="text-white fas fa-edit"></i></button>
                                            <button onClick={() => dispatch({ type: 'MODAL', payload: {state: users, item: user, actionType: 'ADD_USERS', auth}})} data-toggle="modal" data-target="#exampleModal" className="btn btn-sm btn-danger ml-3">
                                                <i className="text-white fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="d-flex justify-content-between my-3">
                    <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-secondary">go back</button>
                    <button onClick={() => setPage(page + 1)} disabled={!more} className="btn btn-secondary ">Load more..</button>
                </div>
            </div>
        </div>
    )
};

export default Users;
