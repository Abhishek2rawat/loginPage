import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axiosAPI from "../axios.js";

const Signup = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    // const [login,setLogin] = useState(false);
    const handleSignup = async () => {
    try {
      const res = await axiosAPI.createUser({ name, password, email });

      if (res.status === 200) {
        navigate("/"); // or "/" or wherever
        alert("User Created SuccessFully");
      } else if (res.status === 409) {
        alert("User Already Present");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      alert("Error signing up");
    }
  };
  return (

    <div className='bg-gray-100 flex flex-col items-center justify-center h-screen gap-4 border-4 border-blue-500'>
        <h1 className='text-2xl'>Sign up</h1>
      <div className=''>
        <h3>Name</h3>
        <input className = "border border-gray-400 p-2 rounded w-64 mb-5" type="text" value = {name} onChange={(e) => setName(e.target.value)}/>
        
        <h3>Email</h3>
        <input className = "border border-gray-400 p-2 rounded w-64 mb-5" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <h3>password</h3>
        <input className = "border border-gray-400 p-2 rounded w-64" type="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
    
        <br />
        <button className = "mt-10 border-4 border-grey-400" onClick={handleSignup}>Sign up</button>
        </div>

        <div className='mt-5 flex flex-row gap-2'>
            <h2>Already a user</h2>
            <Link to="/login">
              <button>click Here</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Signup;
