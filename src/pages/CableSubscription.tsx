import React, { useState } from 'react'

const CableSubscription: React.FC = () => {
    const [provider, setProvider] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [packageOption, setPackageOption] = useState('');

    const handleSubscription = () => {
        // Handle cable subscription logic here
        console.log('Processing cable subscription');
    };
    
    return (
        <div>
            <h2 className="text-xl font-bold">Cable Subscription</h2>
            <form onSubmit={handleSubscription}>
                <label className="block">
                Service Provider:
                <select
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="input-field"
                >
                    <option value="">Select Provider</option>
                    <option value="dstv">DSTV</option>
                    <option value="gotv">GOTV</option>
                    {/* Add other providers */}
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
                Package:
                <select
                    value={packageOption}
                    onChange={(e) => setPackageOption(e.target.value)}
                    className="input-field"
                >
                    <option value="">Select Package</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    {/* Add other packages */}
                </select>
                </label>
                <button type="submit" className="btn-primary mt-4">Subscribe Now</button>
            </form>
            </div>
    )
}

export default CableSubscription
