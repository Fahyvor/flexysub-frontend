import React, { useState } from 'react'

const CableSubscription: React.FC = () => {
    const [provider, setProvider] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [packageOption, setPackageOption] = useState('');
    const [isSubscribing, setIsSubscribing] = useState<boolean>(false);

    const handleSubscription = () => {
        // Handle cable subscription logic here
        setIsSubscribing(true)
        console.log('Processing cable subscription');
        setIsSubscribing(false);
    };
    
    return (
        <div>
            <h2 className="text-xl font-bold">Cable Subscription</h2>
            <form onSubmit={handleSubscription} className='pb-9'>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-5">
                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Service Provider:
                        </label>
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

                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Account Number:
                        </label>
                        <input
                            type="text"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <label className="block">
                        Package:
                        </label>
                        <select
                            value={packageOption}
                            onChange={(e) => setPackageOption(e.target.value)}
                            className="w-full p-3 px-6 outline-none rounded-lg bg-gray-200 text-black"
                            required
                        >
                            <option value="">Select Package</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn-primary mt-4 bg-amber-600 p-4 px-12 rounded-lg text-white font-bold">{isSubscribing ? "Subscribing Now..." : "Subscribe Now"} </button>
            </form>
            </div>
    )
}

export default CableSubscription
