import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BettingFund: React.FC = () => {
    const [bettingPlatform, setBettingPlatform] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleFunding = () => {
        // Handle betting account funding logic here
        console.log('Funding betting account');
        toast("Funding betting account")
    };
    return (
        <div>
            <div className='toastify-message'>
                <ToastContainer />
            </div>
            <h2 className="text-xl font-bold">Fund Betting Account</h2>
            <form onSubmit={handleFunding} className='pb-9'>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-5 items-center">
                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Betting Platform:
                        </label>
                        <select
                            value={bettingPlatform}
                            onChange={(e) => setBettingPlatform(e.target.value)}
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                        >
                            <option value="">Select Platform</option>
                            <option value="bet9ja">Bet9ja</option>
                            <option value="nairabet">NairaBet</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Account Number:
                        </label>
                        <input
                            type="text"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="input-field w-full p-3 outline-none rounded-lg bg-gray-200"
                        />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Amount:
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="input-field w-full p-3 outline-none rounded-lg bg-gray-200"
                        />
                    </div>
                </div>
                <button type="submit" className="btn-primary mt-4 bg-amber-600 p-4 px-12 rounded-lg text-white font-bold">Fund Now</button>
            </form>
            </div>
    )
}

export default BettingFund
