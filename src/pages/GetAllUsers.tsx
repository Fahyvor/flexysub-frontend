import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../axios/apiUrl';

interface User {
    id: string; // Adjust types based on your API response
    name: string;
    email: string;
    phone?: string; // Optional field
}

const GetAllUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${API_URL}api/auth/all-users`); // Replace with your API endpoint
                setUsers(response.data.data);
                console.log(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='w-full'>
            <h1 className='my-3 text-3xl font-bold text-center'>All Users</h1>
            {users.length > 0 ? (
                <div className='overflow-x-auto'>
                    <table className='w-full border-collapse'>
                        <thead className='bg-gray-100'>
                            <tr className='text-left'>
                                <th className='border-b p-2'>Name</th>
                                <th className='border-b p-2'>Email</th>
                                <th className='border-b p-2'>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className='border-b'>
                                    <td className='border-r p-2 whitespace-nowrap'>{user.name}</td>
                                    <td className='border-r p-2 whitespace-nowrap'>{user.email}</td>
                                    <td className='p-2 whitespace-nowrap'>{user.phone || 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default GetAllUsers;
