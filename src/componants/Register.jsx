import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import login from '../componants/Login';
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/User/register", {
        username: username, 
        password,
        email,
      });
      alert("User registered");
    } catch (error) {
      console.log("Registration error:", error.response?.data || error.message);
      alert("Registration failed");
    }
  };

  return (
    <div className="form">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <h4>Username:</h4>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="name">
          <FaUserAlt />
        </div>
        
        <h4>Email-Id:</h4>
        <input
          type="email"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="email">
          <TfiEmail />
        </div>
        
        <h4>Password:</h4>
        <input
          type="password"
          placeholder="*****"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="password">
          <RiLockPasswordFill />
        </div>
        
        <button className="button" type="submit">
          Register
        </button>
      </form>
      <p className="login">
        Already have an account? <Link to="/login">Login here</Link> 
      </p>
    </div>
  );
}

export default Register;
