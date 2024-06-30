import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios'


const SignIn = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const Login =()=>{
 axios.get(`http://localhost:3000/api/auth/signin/${userName}`)
 .then(res => props.user(res.data))
 .catch((err)=>console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your password"
            />
          </div>
          <NavLink to="/">
          <button onClick={()=>{Login(),props.SetUserAccount(true)}} type="submit" className="w-full bg-[#ff385c] text-white p-2 rounded hover:bg-[#fe4869]">
            Sign In
          </button>
          </NavLink>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/user/auth/sign-up" className="text-[#ff385c]">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
