import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../axios/apiUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${API_URL}api/auth/reset-password`, {email});
            if(response.status === 200) {
                toast.success(response.data.message);
            } else {
                return;
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Reset password failed:', error.message);
                toast.error(error.response?.data?.error || 'An error occurred');
            } else {
                console.log('Unexpected error:', error);
                toast.error('An unexpected error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-col gap-6 py-5'>
            <h2 className='text-2xl font-bold mx-auto text-center my-3'>Reset Password</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <label htmlFor="email" className='font-semibold text-xl'>Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-gray-200 border-0 outline-none p-2 px-4 rounded-lg'
                />
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Reset Password'}
                </button>
            </form>
            <div className='toastify-message'>
                <ToastContainer />
            </div>
        </div>
    )
}

export default ResetPassword;