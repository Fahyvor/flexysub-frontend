import React, { useState } from 'react'

const ElectricityBill: React.FC = () => {
    const [meterNumber, setMeterNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        // Handle payment logic here
        console.log('Paying electricity bill');
    };
    return (
        <div>
            <h2 className="text-xl font-bold">Pay Electricity Bill</h2>
            <form onSubmit={handlePayment}>
                <label className="block">
                Meter Number:
                <input
                    type="text"
                    value={meterNumber}
                    onChange={(e) => setMeterNumber(e.target.value)}
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
                <button type="submit" className="btn-primary mt-4">Pay Now</button>
            </form>
        </div>
    )
}

export default ElectricityBill
