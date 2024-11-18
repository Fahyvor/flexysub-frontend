import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../axios/apiUrl';

const TopUp: React.FC = () => {
    const [formData, setFormData] = useState({
        network: '',
        number: '',
        service: '',
        plan: '',
        amount: '',
        name: '',
    });

    const [dataPlans, setDataPlans] = useState<string[]>([]);
    const [dataAmount, setDataAmount] = useState<string[]>([]);

    useEffect(() => {
        const fetchDataPlans = async () => {
            if(formData.service === "Data") {
                return;
            }

            try {
                const response = await axios.get(`${API_URL}api/vtu/get-data-plans`);
    
                // Log the response to confirm the structure
                console.log("API Response:", response.data);
    
                if (response.status === 200 && Array.isArray(response.data.data)) {
                    setDataPlans(response.data.data);
                    setDataAmount(response.data.dataAmount);
                } else {
                    console.error("Unexpected data format:", response.data);
                }
            } catch (error) {
                console.error("Error getting data", error);
            }
        };
        fetchDataPlans();
    }, []);    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
    
        setFormData((prevData) => {
            // Check if the changed field is the plan name
            if (id === "name") {
                // Find the index of the selected plan
                const selectedPlanIndex = dataPlans.indexOf(value);
                // Use the index to find the corresponding amount
                const correspondingAmount = selectedPlanIndex !== -1 ? dataAmount[selectedPlanIndex] : "";
    
                return {
                    ...prevData,
                    [id]: value, // Update the plan name
                    amount: correspondingAmount, // Set the amount based on the plan index
                };
            }
    
            // For other fields, update normally
            return {
                ...prevData,
                [id]: value,
            };
        });
    };
    

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/vtu/submit`, formData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-9 py-5 w-full'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="network" className='text-semibold'>Network Type:</label>
                    <select
                        id="network"
                        value={formData.network}
                        onChange={handleInputChange}
                        required
                        className='p-2 outline-none rounded-lg px-5'
                    >
                        <option value="">Select a network</option>
                        <option value="1">MTN</option>
                        <option value="2">Airtel</option>
                        <option value="3">Glo</option>
                        <option value="4">9mobile</option>
                    </select>
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="service" className='text-semibold'>Service:</label>
                    <select
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className='p-2 outline-none rounded-lg px-5'
                    >
                        <option value="">Select a service</option>
                        <option value="Data">Data</option>
                        <option value="Airtime">Airtime</option>
                    </select>
                </div>

                <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-semibold">Select Plan Name:</label>
                    <select
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="p-2 outline-none rounded-lg px-5"
                    >
                        <option value="">Select a Plan</option>
                        {dataPlans.map((plan, index) => (
                        <option key={index} value={plan} className='text-black'>
                            {plan}
                        </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="amount">Amount:</label>
                    <select
                        id="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                        className="p-2 outline-none rounded-lg px-5"
                    >
                        {dataAmount.map((amount, index) => (
                        <option key={index} value={amount} className='text-black'>
                            {amount}
                        </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor="number">Number:</label>
                    <input
                        type="tel"
                        id="number"
                        value={formData.number}
                        onChange={handleInputChange}
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
