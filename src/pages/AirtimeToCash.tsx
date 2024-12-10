import React, { useState} from 'react'

const AirtimeToCash: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [network, setNetwork] = useState('');
    const [amount, setAmount] = useState('');

    const handleConversion = () => {
        // Handle airtime-to-cash conversion logic here
        console.log('Converting airtime to cash');
    };
    return (
        <div>
            <h2 className="text-xl font-bold">Convert Airtime to Cash</h2>
            <form onSubmit={handleConversion} className='pb-9'>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-5">
                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Phone Number:
                        </label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                        />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Network:
                        </label>
                        <select
                            value={network}
                            onChange={(e) => setNetwork(e.target.value)}
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                        >
                            <option value="">Select Network</option>
                            <option value="mtn">MTN</option>
                            <option value="airtel">Airtel</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Amount:
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                        />
                    </div>
                </div>
                <button type="submit" className="btn-primary mt-4">Convert Now</button>
            </form>
            </div>
    )
}

export default AirtimeToCash
