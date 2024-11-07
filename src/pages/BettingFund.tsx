import React, { useState } from 'react'

const BettingFund: React.FC = () => {
    const [bettingPlatform, setBettingPlatform] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleFunding = () => {
        // Handle betting account funding logic here
        console.log('Funding betting account');
    };
    return (
        <div>
            <h2 className="text-xl font-bold">Fund Betting Account</h2>
            <form onSubmit={handleFunding}>
                <label className="block">
                Betting Platform:
                <select
                    value={bettingPlatform}
                    onChange={(e) => setBettingPlatform(e.target.value)}
                    className="input-field"
                >
                    <option value="">Select Platform</option>
                    <option value="bet9ja">Bet9ja</option>
                    <option value="nairabet">NairaBet</option>
                    {/* Add other platforms */}
                </select>
                </label>
                <label className="block mt-4">
                Account Number:
                <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="input-field"
                />
                </label>
                <label className="block mt-4">
                Amount:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="input-field"
                />
                </label>
                <button type="submit" className="btn-primary mt-4">Fund Now</button>
            </form>
            </div>
    )
}

export default BettingFund
