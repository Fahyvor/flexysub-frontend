import React, { useEffect, useState } from 'react';

interface UserDetails {
    accountNumber?: string;
    accountName?: string;
}

const Profile: React.FC = () => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

    useEffect(() => {
        const storedUserDetails = sessionStorage.getItem('userData');
        if (storedUserDetails) {
            setUserDetails(JSON.parse(storedUserDetails));
        } else {
            window.location.href = '/login';
        }
    }, []);

    return (
        <div className='w-full flex flex-col gap-7 py-14'>
            <div className='flex flex-col items-center gap-5'>
                <p className='rounded-lg shadow-lg border-2 border-gray-200 px-8 p-3'>Account Number:</p>
                <p className='font-bold lg:text-4xl md:text-4xl'>{userDetails?.accountNumber || 'Not available'}</p>
            </div>

            <div className='flex flex-col items-center gap-5'>
                <p className='rounded-lg shadow-lg border-2 border-gray-200 px-8 p-3'>Account Name:</p>
                <p className='font-bold lg:text-4xl md:text-4xl'>{userDetails?.accountName || 'Not available'}</p>
            </div>
        </div>
    );
};

export default Profile;
