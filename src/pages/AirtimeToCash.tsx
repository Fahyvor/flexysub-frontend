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
            <form onSubmit={handleConversion}>
                <label className="block">
                Phone Number:
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="input-field"
                />
                </label>
                <label className="block mt-4">
                Network:
                <select
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="input-field"
                >
                    <option value="">Select Network</option>
                    <option value="mtn">MTN</option>
                    <option value="airtel">Airtel</option>
                    {/* Add other networks */}
                </select>
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
                <button type="submit" className="btn-primary mt-4">Convert Now</button>
            </form>
            </div>
    )
}

export default AirtimeToCash
