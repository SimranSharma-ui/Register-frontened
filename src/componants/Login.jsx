import React, { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import { Link } from "react-router-dom";

import './Login.css';

function Login() {
 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post('http://localhost:8000/api/User/login', { password, email });
     
      const token = res.data.token; 
      localStorage.setItem("jwtToken", token); 

      const token2 = localStorage.getItem("jwtToken");
      console.log(token2);

      alert("User logged in");
    } catch (error) {
      console.error('login User', error);
      alert('Invalid username or password!');
    }
  };

  return (
    <>
   <div className='user'><FaUserCircle /></div>
    <div className='form1'>
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <h4 className='h4'>Email:</h4>
 <div className='input'>
      <input
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
         <div className="email1">
            <TfiEmail />
          </div>
        
       <h4 className='h5'>Password:</h4>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
   </div>
        <div className="password1">
            <RiLockPasswordFill />
          </div>
        <button className='button1' type="submit">Login </button>
      </form>
      <p className='regis'>
      If you are not Register yourself than switch to  <Link to="/register">Sign In</Link> 
      </p>
      </div>
    </>
  );
}

export default Login;

