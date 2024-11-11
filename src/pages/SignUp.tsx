import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../axios/apiUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}api/auth/register`, {
        name,
        email,
        phone: phoneNumber,
        address,
        password,
      });
  
      console.log('Sign-up successful:', response.data);
      toast.success(response.data.message);
    } catch (error: any) {
    //   console.error('Sign-up failed:', error.response ? error.response.data : error.message);
      if (error.response && error.response.data && error.response.data.error) {
        return toast.error(error.response ? error.response.data.message : error.message);
      } else {
        return toast.error("Unknown Error");
    }
} finally {
    setIsLoading(false);
    setTimeout(() => {
        window.location.href = "/login";
    }, 3000);
}
};
  

  return (
    <div>
    <div className='toastify-message'>
        <ToastContainer />
      </div>
      <h2 className='text-2xl font-bold mx-auto text-center my-3'>Welcome to Flexysub!</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 py-3'>
        <div className='flex flex-col gap-4'>
          <label htmlFor="name" className='font-semibold text-md'>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-gray-200 border-0 outline-none p-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor="email" className='font-semibold text-md'>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 border-0 outline-none p-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor="phoneNumber" className='font-semibold text-md'>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className='bg-gray-200 border-0 outline-none p-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor="address" className='font-semibold text-md'>Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='bg-gray-200 border-0 outline-none p-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor="password" className='font-semibold text-md'>Password:</label>
          <div className='flex items-center border bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-4'>
            <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-transparent outline-none p-2 rounded-lg w-[93%]'
            />
            {showPassword ? <FaRegEye onClick={() => setShowPassword(!showPassword)}/> : <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)}/>} 
          </div>
        </div>
        <button type="submit" disabled={isLoading} className='mt-4 bg-gold lg:w-1/3 md:w-1/3 w-full mx-auto p-2 rounded-lg'>{isLoading ? "Signing Up" : "Sign Up"}</button>
      </form>
      <p className='text-center my-4'>Have an Account Already? <a href='/login' className='font-semibold text-red-600'>Login</a></p>
    </div>
  );
};

export default SignUp;
