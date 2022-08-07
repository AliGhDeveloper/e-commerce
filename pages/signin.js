import Navbar from "@/layout/navbar"
import Link from 'next/link';
import Cookie from 'js-cookie';
import Notify from "components/notify";
import { useRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loginVal } from 'utils/val';
import { postData } from "utils/fetchData";
import { useRouter } from "next/router";

export default function SignIn(){
    
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    
    const router = useRouter();
    useEffect(() => {
        if(Object.keys(auth).length !== 0){
            router.push('/')
        }
    }, [auth])

    const initialValue = { email: "", password: ""}
    const [ userData, setUserData ] = useState(initialValue);
    const { email, password } = userData;

    const inputChangeHandle = (e) => {
        const { name, value } = e.target;
        setUserData({ 
            ...userData,
            [name] : value
        })
    }
    
    const passwordInp = useRef();
    
    const handleChange = (e) =>{
        if(e.target.checked){
            passwordInp.current.type = "text";
        } else {
            passwordInp.current.type = "password";
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorMessage = loginVal(email, password);

        if(errorMessage) return dispatch({type : 'NOTIFY', payload : { error: errorMessage}})
        dispatch( { type: 'NOTIFY', payload: { loading : 'wait..'}});

        const res = await postData('api/signin', userData)
        const data = await res.json();
        console.log(data.refresh_token)
        if(data.success){
            dispatch( { type :  'NOTIFY', payload : {success : data.success}})
            dispatch( { type : 'AUTH', payload : data } );
            Cookie.set('refreshToken', data.refresh_token, {
                path : '/api/auth/accessToken',
                expires : 7
            });
            localStorage.setItem("firstlogin" , true)
        }else {
            dispatch( { type :  'NOTIFY', payload : data })
        }
        
    }
    return (
        <div className="mt-4 px-5 py-5 signin bg-light container">
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="emailInp">Email address</label>
                    <input name="email" type="text" className="form-control" id="emailInp" aria-describedby="emailHelp" placeholder="Enter email" onChange={inputChangeHandle}/>
                    <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="passwordInp">Password</label>
                    <input ref={ passwordInp}  name="password" type="password" className="form-control" id="passwordInp" placeholder="Password" onChange={inputChangeHandle}/>
                </div>
                <div className="form-group form-check my-3">
                    <input type="checkbox"  className="form-check-input" id="checkout" onChange={(e) => handleChange(e)} />
                    <label className="form-check-label" htmlFor="checkout">Check Password</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
                <small>dont have an account ? <Link href="/register">register</Link></small>
            </form>
        </div>  
    )
};

SignIn.getLayout = function pageLayout(page){
    return (
        <>
            <Navbar />
            <Notify />
            {page}
        </>
    )
}