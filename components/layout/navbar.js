import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styles from 'styles/Navbar.module.css';

function Navbar(){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const router = useRouter(); 
    
    const handleLogout = () => {
        localStorage.removeItem('firstlogin');
        Cookies.remove('refreshToken');
        dispatch( { type : 'AUTH', payload : {}});
        dispatch( { type : 'NOTIFY', payload : {success : 'logged out'}});
        router.push('/')
    }
    const loggedRouter = () => {
        return (
            <li className="nav-item">
                <div className="dropdown ">
                    
                    <a href="#" onClick={e => e.preventDefault()} className="mx-2 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"  >user</a>
                    <img src={auth.user.avatar} style={{width : '50px', height: '40px'}} className="img-thumbnail rounded"  />
                
                    <div style={{position: 'flex'}} className={ ` dropdown-menu ` } aria-labelledby="dropdownMenu2">
                        {
                            auth.user.role === 'admin' &&
                            (<>
                                <Link href="/users"><button className="dropdown-item">Users</button></Link>
                                <Link href="/create"><button className="dropdown-item">Create</button></Link>
                                <Link href="/categories"><button className="dropdown-item">Categories</button></Link>
                            </>)
                        }
                        <Link href="/profile"><button className="dropdown-item" type="button">profile</button></Link>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={handleLogout} type="button">logout</button>
                    </div>
                </div>
            </li>
        )
    }
    const auth  = useSelector( state => state.auth )
    const isActive = (r) => {
        if(r === router.pathname){
            return  " active"
        } else {
            return ""
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Online Shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/"><a className={ `${styles.navlink} nav-link` + isActive('/')} aria-current="page" href="#">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/cart"><a className={`${styles.navlink} nav-link position-relative` + isActive('/cart')} ><i className="fas fa-shopping-cart"></i><span style={{backgroundColor: "red",fontSize: '14px', padding: '2px 6px', borderRadius: '50%', right:'25px', top: '-9px'}} className="text-white position-absolute">{cart.length}</span>Cart</a></Link>
                    </li>
                    {
                        Object.keys(auth).length === 0 ?
                        <li className="nav-item">
                            <Link href="/signin" ><a className={`${styles.navlink} nav-link` + isActive('/signin')}><i aria-hidden="true" className="fas fa-user"></i>SignIn</a></Link>
                        </li>
                        : loggedRouter()
                    }
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;