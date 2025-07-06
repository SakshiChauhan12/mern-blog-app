import React from 'react';
import { signupUser } from '../api/auth.js';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useUser } from "../context/UserContext";


const Signup = () => {
    const navigate=useNavigate();
    const { login } = useUser(); // Import the login function from UserContext
    const [form,setForm]=useState({
        name:"",
        email:"",
        password:""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signupUser(form);
           login();
            navigate("/");

        }
        catch(err){
            alert(err.response?.data?.message||"Sugn up failed");
        }
    }
    const handleChange= (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    }

  return (
     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-pink-500 text-white w-full py-2 rounded hover:bg-pink-600">Sign Up</button>
      <p className=" m-20 text-sm text-gray-600">
  Already have an account? 
  <a href="/login" className="text-blue-600 hover:underline font-medium">Login here!</a>
</p>
      </form>
    </div>
  )
}

export default Signup