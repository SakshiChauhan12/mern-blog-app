import React from 'react';
import { useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // Import the useUser hook

const Login = () => {
    const navigate=useNavigate();
    const { login } = useUser();
    const[form,setForm]=useState({
        email:"",
        password:"",
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await loginUser(form);
           login();
            navigate("/");



        }
        catch(err){
          alert(err.response?.data?.message||"Login failed");
        }

    }
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});

    }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-pink-500 text-white w-full py-2 rounded hover:bg-pink-600">Login</button>
          <p className=" m-20 text-sm text-gray-600">
  New here?
  <a href="/signup" className="text-blue-600 hover:underline font-medium"> Signup now!</a>
</p>
      </form>
    </div>
  )
}

export default Login