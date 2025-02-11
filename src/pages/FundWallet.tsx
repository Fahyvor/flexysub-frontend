import React, { useState, useEffect } from 'react'
import { IoCopy } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../axios/apiUrl';
import axios from 'axios';

interface UserDetails {
    accountNumber?: string;
    accountName?: string;
    bankName?: string;
}

const FundWallet: React.FC = () => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const storedUserDetails = sessionStorage.getItem('userData');
        if (storedUserDetails) {
            setUserDetails(JSON.parse(storedUserDetails));
        } else {
            window.location.href = '/login';
        }
    }, []);

    //Send Admin a Message
    const sendMessage = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}api/vtu/send-admin-message`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionStorage.getItem('userToken')}`
                }
            });
            toast.success(response.data.message);
            console.log('Response:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Admin Message:', error.message);
                toast.error(error.response?.data?.error || 'An error occurred');
            } else {
                console.error("Error sending Admin Message:", error);
                toast.error("Error sending Admin Message");
            }
        } finally {
            setLoading(false);
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(userDetails?.accountNumber || '');
        toast.success('Account number copied to clipboard');
    }

    return (
        <div className='w-full flex flex-col gap-7 py-14'>
            <div className='toastify-message'>
                <ToastContainer />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 w-full justify-center items-center">
                <div className='flex flex-col items-center gap-2 w-full'>
                    <p className='text-sm '>Account Number:</p>
                    <p className='rounded-lg shadow-lg border-2 border-gray-200 px-8 p-3 w-full text-lg font-semibold text-center'>{userDetails?.accountNumber || 'Not available'}</p>
                </div>

                <div className='gap-2 flex flex-col items-center w-full'>
                    <p className='text-sm'>Account Name:</p>
                    <p className=' rounded-lg shadow-lg border-2 border-gray-200 px-8 p-3 text-lg font-semibold text-center w-full'>{userDetails?.accountName || 'Not available'}</p>
                </div>

                <div className='gap-2 flex flex-col items-center w-full'>
                    <p className='text-sm'>Bank</p>
                    <p className=' rounded-lg shadow-lg border-2 border-gray-200 text-center text-lg font-semibold px-8 p-3 w-full'>{userDetails?.bankName || 'Not available'}</p>
                </div>
            </div>

            <div className="flex gap-7 items-center w-full justify-center">
                {/* Add a button to copy the account number */}
                <div className='flex justify-center'>
                    <button onClick={copyToClipboard} className='flex items-center gap-3 copy_button font-bold text-sm py-3 px-8 rounded-lg hover:bg-gray-200 shadow-lg border-2 border-gray-200'>Copy
                    <IoCopy />
                    </button>
                </div>
                <div className='flex justify-center cursor-pointer'>
                    <button onClick={sendMessage} className='flex items-center gap-3 confirm_payment font-bold text-sm py-3 px-8  rounded-lg shadow-lg outline-none border-2 bg-[#f20d45ff] hover:bg-[#681f35] text-white border-gray-200'>{loading ? 'Confirming...' : 'I have Made Payment'}</button>
                </div>
            </div>
        </div>
    )
}

export default FundWallet

