import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../axios/apiUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ElectricityBill: React.FC = () => {
    const [meterNumber, setMeterNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [phone, setPhone] = useState('');
    const [providers, setProviders] = useState<string[]>([]);
    const [selectedProvider, setSelectedProvider] = useState('');
    const [isPaying, setIsPaying] = useState(false);

    useEffect(() => {
        const getAllProviders = async () => {
            try {
                const response = await axios.get(`${API_URL}api/electricity/providers`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
                    },
                });
    
                if (response.status === 200 && Array.isArray(response.data.data)) {
                    console.log('Fetched Providers', response.data.data);
                    setProviders(response.data.data);
                } else {
                    console.error('Unexpected response structure:', response);
                }
            } catch (error) {
                console.error('Error fetching providers:', error);
            }
        };
    
        getAllProviders();
    }, []);    

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPaying(true);
        try {
            const response = await axios.post(`${API_URL}api/electricity/buy-units`, {
                meterNumber,
                amount,
                phone,
                provider: selectedProvider,
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Payment successful', response.data);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message || 'An error occurred');
                console.error('Payment failed', response);
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        } finally {
            setIsPaying(false);
        }
    };

    return (
        <div>
            <div className='toastify-message'>
                <ToastContainer />
            </div>
            <h2 className="text-xl font-bold">Pay Electricity Bill</h2>
            <form onSubmit={handlePayment} >
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-5">
                    <div className='flex flex-col gap-3'>
                        <label>Select your Provider</label>
                        <select
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                            value={selectedProvider}
                            onChange={(e) => setSelectedProvider(e.target.value)}
                            required
                        >
                            <option value="">Select your meter type</option>
                            {providers.map((provider: string, index: number) => (
                                <option key={index} value={provider} className='text-black'>
                                    {provider}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className="block">
                            Meter Number:
                        </label>
                        <input
                            type="text"
                            value={meterNumber}
                            onChange={(e) => setMeterNumber(e.target.value)}
                            className="input-field w-full p-3 outline-none rounded-lg bg-gray-200"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className="block mt-4">
                            Amount:
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="input-field w-full p-3 outline-none rounded-lg bg-gray-200"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className="block mt-4">
                            Phone Number:
                        </label>
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input-field w-full p-3 outline-none rounded-lg bg-gray-200"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn-primary mt-4 bg-amber-600 p-4 px-12 rounded-lg text-white font-bold">
                    {isPaying ? "Paying Now..." : "Pay Now" }
                </button>
            </form>
        </div>
    );
};

export default ElectricityBill;
