import React from 'react'
import { useNavigate } from 'react-router-dom';
import axiosAPI from "../axios.js";
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    // const [login,setLogin] = useState(false);
    
    const handleLogin = async () => {
        try {
            const res = await axiosAPI.login({ password, email });

            if(res.status === 200){
            alert("Login SuccessFully");
            navigate("/");
            }else if(res.status === 404){
                alert("User Not Found");
            }else if(res.status === 401){
                alert("Invalid Password");
            }else{
                alert("Login failed");
            }
        } catch (error) {
            alert("Error Logging in");
        }
    }
  return (
    <div className='bg-gray-100 flex flex-col items-center justify-center h-screen gap-4 border-4 border-blue-500'>
        <h1 className='text-2xl'>Login</h1>
      <div className=''>
        
        <h3>Email</h3>
        <input className = "border border-gray-400 p-2 rounded w-64 mb-5" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <h3>password</h3>
        <input className = "border border-gray-400 p-2 rounded w-64" type="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
    
        <br />
        <button className = "mt-10 border-4 border-grey-400" onClick={handleLogin}>Login</button>
        </div>

        <div className='mt-5 flex flex-row gap-2'>
            <h2>New User</h2>
            <button onClick={() => {navigate("/signup");}}>Click Here</button>
        </div>
    </div>
  )
}

export default Login;
