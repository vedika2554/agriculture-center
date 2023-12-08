import React ,{useState} from 'react';
import "./Signup.css";
import axios from 'axios';
function Signup(){

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const[password,setPassword]=useState('')

    const signup=async() =>{
        const res=await axios.post("/login",{
            email:email,
            password:password
        });
        alert(res.data.message);

        if(res.data.success){
            localStorage.setItem("user",JSON.stringify(res.data.user));
            
            window.location.href="/";
        }


    }
    return(
        <div>
            <div className='signup-container'>
                <h1 className='signup-title'>Signup</h1>

                <div className='input-container'>
                    <label className='input-label'>Name</label>
                    <input 
                    type='text'
                     placeholder="Enter your name"
                     className='input-field'
                     value={name}
                     onChange={(e)=>{
                        setName(e.target.value)
                     }}
                     />
                </div>

                <div className='input-container'>
                    <label className='input-label'>Email</label>
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
                    <label className='input-label'>Mobile</label>
                    <input 
                    type='text'
                     placeholder="Enter your mobile"
                     className='input-field'
                     value={mobile}
                     onChange={(e)=>{
                        setMobile(e.target.value)
                     }}
                     />
                </div>


                <div className='input-container'>
                    <label className='input-label'>Password</label>
                    <input 
                    type='text'
                     placeholder="Enter your password"
                     className='input-field'
                     value={password}
                     onChange={(e)=>{
                        setPassword(e.target.value)
                     }}
                     />
                </div>

<button type='button' className='signup-btn' onClick={signup}>Signup</button>
            </div>
        </div>
    )
}
export default Signup