import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../axios/apiUrl';

interface Option {
    variation_code: string;
    name: string;
    variation_amount: string;
}

const CableSubscription: React.FC = () => {
    const [provider, setProvider] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [packageOption, setPackageOption] = useState<Option[]>([]);
    const [selectedPackage, setSelectedPackage] = useState(''); 
    const [isSubscribing, setIsSubscribing] = useState<boolean>(false);

    useEffect(() => {
        const fetchCablePlans = async () => {
            if (!provider) return; // Prevent fetching if no provider is selected
            try {
                const response = await axios.get(`${API_URL}api/cable/${provider}`);
                console.log("Checking the data", response.data)
                if (response.status === 200) {
                    console.log('Fetched cable plans', response.data);
                    setPackageOption(response.data);
                } else {
                    console.error('No data found for the selected provider.');
                    setPackageOption([]);
                }
            } catch (error) {
                console.error('Error fetching cable plans', error);
                setPackageOption([]);
            }
        };
        fetchCablePlans();
    }, [provider]);

    const handleSubscription = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPackage) {
            alert('Please select a package.');
            return;
        }
        setIsSubscribing(true);
        console.log('Processing cable subscription for:', {
            provider,
            accountNumber,
            selectedPackage,
        });
        // Simulate subscription logic here
        setIsSubscribing(false);
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Cable Subscription</h2>
            <form onSubmit={handleSubscription} className="pb-9">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-5">
                    <div className="flex flex-col gap-3">
                        <label className="block">Service Provider:</label>
                        <select
                            value={provider}
                            onChange={(e) => setProvider(e.target.value)}
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                            required
                        >
                            <option value="">Select Provider</option>
                            <option value="dstv">DSTV</option>
                            <option value="gotv">GOTV</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="block">Account Number:</label>
                        <input
                            type="text"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="block">Package:</label>
                        <select
                            value={selectedPackage} // Bind scalar value for the selected package
                            onChange={(e) => setSelectedPackage(e.target.value)} // Update selected package
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                            required
                        >
                            <option value="">Select Package</option>
                            {packageOption.map(option => (
                                <option key={option.variation_code} value={option.variation_code}>
                                    {option.name} - {option.variation_amount}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn-primary mt-4 bg-amber-600 p-4 px-12 rounded-lg text-white font-bold"
                >
                    {isSubscribing ? 'Subscribing Now...' : 'Subscribe Now'}
                </button>
            </form>
        </div>
    );
};

export default CableSubscription;
