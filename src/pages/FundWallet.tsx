import React, { useState, useEffect } from 'react'
import { IoCopy } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UserDetails {
    accountNumber?: string;
    accountName?: string;
    bankName?: string;
}

const FundWallet: React.FC = () => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

    useEffect(() => {
        const storedUserDetails = sessionStorage.getItem('userData');
        if (storedUserDetails) {
            setUserDetails(JSON.parse(storedUserDetails));
        } else {
            window.location.href = '/login';
        }
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(userDetails?.accountNumber || '');
        toast.success('Account number copied to clipboard');
    }

    return (
        <div className='w-full flex flex-col gap-7 py-14'>
            <div className='toastify-message'>
                <ToastContainer />
            </div>
            <div className='flex flex-col items-center gap-5'>
                <p className='font-bold lg:text-4xl md:text-4xl '>Account Number:</p>
                <p className='rounded-lg shadow-lg border-2 border-gray-200 px-8 p-3'>{userDetails?.accountNumber || 'Not available'}</p>
            </div>

            <div className='gap-2 flex flex-col items-center'>
                <p className='font-bold lg:text-4xl md:text-4xl'>Account Name:</p>
                <p className=' rounded-lg shadow-lg border-2 border-gray-200 px-8 p-3'>{userDetails?.accountName || 'Not available'}</p>
            </div>

            <div className='gap-2 flex flex-col items-center'>
                <p className='font-bold lg:text-4xl md:text-4xl'>Bank</p>
                <p className=' rounded-lg shadow-lg border-2 border-gray-200 px-8 p-3'>{userDetails?.bankName || 'Not available'}</p>
            </div>

            {/* Add a button to copy the account number */}
            <div className='flex justify-center'>
                <button onClick={copyToClipboard} className='flex items-center gap-3 copy_button font-bold py-3 px-8 rounded-lg shadow-lg border-2 border-gray-200'>Copy
                <IoCopy />
                </button>
            </div>
        </div>
    )
}

export default FundWallet

