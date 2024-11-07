import React, { useState } from 'react';

const TopUp: React.FC = () => {
    const [network, setNetwork] = useState('');
    const [amount, setAmount] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Network:', network);
        console.log('Amount:', amount);
        console.log('Number:', number);
    };

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-9 py-5 w-full'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="network" className='text-semibold'>Network Type:</label>
                    <select 
                        id="network" 
                        value={network} 
                        onChange={(e) => setNetwork(e.target.value)}
                        required
                        className='p-2 outline-none rounded-lg px-5'
                    >
                        <option value="">Select a network</option>
                        <option value="MTN">MTN</option>
                        <option value="Airtel">Airtel</option>
                        <option value="Glo">Glo</option>
                        <option value="9mobile">9mobile</option>
                    </select>
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="network" className='text-semibold'>Airtime/Data:</label>
                    <select 
                        id="sevice" 
                        value={network} 
                        onChange={(e) => setNetwork(e.target.value)}
                        required
                        className='p-2 outline-none rounded-lg px-5'
                    >
                        <option value="">Select a service</option>
                        <option value="Data">Data</option>
                        <option value="Airtime">Airtime</option>
                    </select>
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="amount">Amount:</label>
                    <input 
                        type="number" 
                        id="amount" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className='bg-gray-200 p-2 outline-none rounded-lg px-5 py-3'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="number">Number:</label>
                    <input 
                        type="tel" 
                        id="number" 
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)}
                        required
                        className='bg-gray-200 p-2 outline-none rounded-lg px-5 py-3'
                    />
                </div>
                <button type="submit" className='bg-gold p-3 rounded-lg lg:w-1/2 md:w-1/2 w-full my-4'>Submit</button>
            </form>
        </div>
    );
};

export default TopUp;
