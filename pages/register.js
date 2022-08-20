import Navbar from "@/layout/navbar";
import Notify from 'components/notify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { val } from 'utils/val';
import { postData } from "utils/fetchData";

export default function Register(){
    const auth = useSelector( state => state.auth );
    const dispatch = useDispatch();
    
    const router = useRouter();
    useEffect(() => {
        if(Object.keys(auth).length !== 0){
            router.push('/')
        }
    }, [auth])
    
    const initialValue = { email: "", password: "", cf_password: ""}
    const [ userData, setUserData ] = useState(initialValue);
    const { email, password, cf_password } = userData
    const inputChangeHandle = (e) => {
        const { name, value } = e.target;
        setUserData({ 
            ...userData,
            [name] : value
        })
    }
    const passwordInp = useRef();
    const passwordInp2 = useRef();
    const handleChange = (e) =>{
        if(e.target.checked){
            passwordInp.current.type = "text";
            passwordInp2.current.type = "text";
        } else {
            passwordInp.current.type = "password";
            passwordInp2.current.type = "password";
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const ErrorMessage = val(email, password, cf_password)
        if(ErrorMessage) return dispatch( { type: "NOTIFY" , payload : { error : ErrorMessage}})
        dispatch({ type : 'NOTIFY', payload : { loading : "please wait.."} });
        const res = await postData('/register', userData);
        const data = await res.json();
        return dispatch( { type : 'NOTIFY', payload : data })
    }   
    return (
        <div className="mt-4 px-5 py-5 signin bg-light container">
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="emailInp">Email address</label>
                    <input type="text" name="email" className="form-control" id="emailInp" aria-describedby="emailHelp" placeholder="Enter email" onChange={inputChangeHandle}/>
                    <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="passwordInp">Password</label>
                    <input ref={ passwordInp}  name="password" type="password" className="form-control" id="passwordInp" placeholder="Password" onChange={inputChangeHandle}/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="cf-passwordInp">Confirm Password</label>
                    <input ref={ passwordInp2 }  name="cf_password" type="password" className="form-control" id="cf-passwordInp" placeholder="Password" onChange={inputChangeHandle}/>
                </div>
                <div className="form-group form-check my-3">
                    <input type="checkbox"  className="form-check-input" id="checkout" onChange={(e) => handleChange(e)} />
                    <label className="form-check-label" htmlFor="checkout">Check Password</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
                <small>already have an account ? <Link href="/signin">signin</Link></small>
            </form>
        </div>  
    )
};

Register.getLayout = function pageLayout(page){
    return (
        <>
            <Navbar />
            <Notify />
            {page}
        </>
    )
}