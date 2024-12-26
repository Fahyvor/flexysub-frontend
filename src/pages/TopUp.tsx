import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../axios/apiUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TopUp: React.FC = () => {
    const [formData, setFormData] = useState({
        network: '',
        phone: '',
        service: '',
        plan: '',
        amount: '',
        name: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const [dataPlans, setDataPlans] = useState<string[]>([]);
    const [dataAmount, setDataAmount] = useState<string[]>([]);
    const [showDataPlansInput, setDataPlansInput] = useState<boolean>(false)

    useEffect(() => {
        console.log(showDataPlansInput);
        const fetchDataPlans = async () => {
            if (formData.service !== "data") {
                setDataPlansInput(false);
                return;
            }
    
            setDataPlansInput(true);
    
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
    }, [formData.service])   

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
        setIsLoading(true);
        try {
            if(formData.service === "airtime") {
                const response = await axios.post(`${API_URL}api/vtu/buy-airtime`, formData);
                toast.success(response.data.data.response_description);
                console.log('Response:', response.data);
            } else {
                const response = await axios.post(`${API_URL}api/vtu/buy-data`, formData);
                toast.success(response.data.message);
                console.log('Response:', response.data);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Airtime Purchase:', error.message);
                toast.error(error.response?.data?.error || 'An error occurred');
            } else {
                console.log('Unexpected error:', error);
                toast.error('An unexpected error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='w-full'>
             <div className='toastify-message'>
                <ToastContainer />
            </div>
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
                        <option value="mtn">MTN</option>
                        <option value="airtel">Airtel</option>
                        <option value="glo">Glo</option>
                        <option value="etisalat">9mobile</option>
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
                        <option value="data">Data</option>
                        <option value="airtime">Airtime</option>
                    </select>
                </div>

                    {formData.service === "data" ?
                    <div className='flex flex-col gap-5'>
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
                                <input
                                    id="amount"
                                    value={formData.amount}
                                    readOnly
                                    className="p-2 outline-none rounded-lg bg-gray-200 px-5"
                                />
                            </div>
                    </div> 
                    :
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="amount" className="text-semibold">Input Amount</label>
                        <input
                            id="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            required
                            className="p-2 outline-none rounded-lg bg-gray-200 px-5 w-full"
                        />
                    </div>
                    }

                <div className='flex flex-col gap-3'>
                    <label htmlFor="phone">Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className='bg-gray-200 p-2 outline-none rounded-lg px-5 py-3'
                    />
                </div>

                <button type="submit" className='bg-gold p-3 rounded-lg lg:w-1/2 md:w-1/2 w-full my-4'>{isLoading ? "Submitting" : "Submit"}</button>
            </form>
        </div>
    );
};

export default TopUp;
