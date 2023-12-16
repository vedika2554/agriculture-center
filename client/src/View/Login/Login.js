import React , {useState} from 'react'
import axios from 'axios'
import "./Login.css"
import Navbar from "../../Component/Navbar/Navbar";
import Footer  from '../../Component/Footers/footer';
function Login(){

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const login =async() =>{
        const res=await axios.post("/login",{
            email:email,
            password:password
        });
        alert(res.data.message);

        if(res.data.success){
            localStorage.setItem("user",JSON.stringify(res.data.data));
            
            window.location.href="/";
        }

    }
    return(
        <>
        <Navbar/>
        <div>
        <div className='login-container'>
            <h1 className='login-title'>Login</h1>


            <div className='input-container'>
                    <label className='logininput-label'>Email</label>
                    <input 
                    type='email'
                     placeholder="Enter your email"
                     className='input-field'
                     value={email}
                     onChange={(e)=>{
                        setEmail(e.target.value)
                     }}
                     />
                </div>
            
            <div className='input-container'>
                    <label className='logininput-label'>Password</label>
                    <input 
                    type='text'
                     placeholder="Enter your password"
                     className='input-field'
                     value={password}
                     onChange={(e)=>{
                        setPassword(e.target.value)
                     }}/>
                     </div>

                     <button type='button' className='login-btn' onClick={login}>Login</button>
            </div></div>
            <Footer/>
            </>
    )
}

export default Login