import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../axios/apiUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {email, password});
            if(response.status === 200) {
                toast.success(response.data.message);
                console.log(response.data.data);
                localStorage.setItem('userToken', response.data.data.token);
                localStorage.setItem('userData', JSON.stringify(response.data.data.user));
                setTimeout(() => {
                    window.location.href = "/";
                }, 3000);
            } else {
                return;
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Login failed:', error.message);
                toast.error(error.response?.data?.message || 'An error occurred');
            } else {
                console.log('Unexpected error:', error);
                toast.error('An unexpected error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className='toastify-message'>
                <ToastContainer />
            </div>
            <h2 className='text-2xl font-bold mx-auto text-center my-3'>Welcome Back to Flexysub!</h2>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6 py-5'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="email" className='font-semibold text-xl'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-gray-200 border-0 outline-none p-2 px-4 rounded-lg'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="password" className='font-semibold text-xl'>Password:</label>
                    <div className='flex items-center border bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-4'>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-transparent outline-none p-2 px-4 rounded-lg w-[93%]'
                        />
                        {showPassword ? <FaRegEye onClick={() => setShowPassword(!showPassword)}/> : <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)}/>} 
                    </div>
                </div>
                <button type="submit" disabled={isLoading} className='bg-gold py-3 rounded-lg lg:w-1/3 md:w-1/3 w-full mx-auto my-3'>{isLoading ? "Logging In..." : "Login"}</button>
            </form>
            <p className='text-center my-4'>Don't have an Acccount? <a href='/signup' className='font-semibold text-red-600'>Sign Up</a></p>
        </div>
    );
};

export default Login;
