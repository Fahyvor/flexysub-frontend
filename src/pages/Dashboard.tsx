import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { IoBarChartSharp } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { GiCash } from "react-icons/gi";
import { MdOutlineScreenshotMonitor, MdHistoryEdu } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";

const Dashboard: React.FC = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        try {
            const userDetails = JSON.parse(localStorage.getItem('userData') || '{}');
            if (userDetails && userDetails.name) {
                setName(userDetails.name);
            } else {
                setName('');
            }
        } catch (error) {
            console.error('Failed to parse user data from local storage:', error);
            setName('');
        }
    }, []);

    const fundWallet = () => {
        window.location.href="/fund-wallet"
    }
    return (
        <div className="text-center space-y-4 py-8">
            <div className='flex items-center justify-between'>
                <p className='text-start font-bold'>Hello, {name}</p>
                <p className='balance font-bold'>Balance: 1000</p>
            </div>
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold">Welcome to FlexySub</h2>
            <p>Select a service to get started:</p>
            <div className='fund_wallet lg:w-1/2 md:1/2 w-full mx-auto cursor-pointer rounded-lg text-white bg-[#f20d45ff] py-3' onClick={fundWallet}>
                <p>Fund Wallet</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pt-4'>
                <Link to="/topup" className=" flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-[#f20d45ff] border-t-4 border-[#f20d45ff]"><IoBarChartSharp className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6' /> <p>Airtime/Data</p> </Link>
                <Link to="/electricity-bill" className=" flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-[#f20d45ff] border-t-4 border-[#f20d45ff]"><FaRegLightbulb className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/><p>Electricity Bill</p></Link>
                <Link to="/betting-fund" className=" flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-[#f20d45ff] border-t-4 border-[#f20d45ff]"> <IoFootball className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6' /> <p>Betting Fund</p></Link>
                <Link to="/airtime-to-cash" className=' flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-[#f20d45ff] border-t-4 border-[#f20d45ff]'>
                <GiCash  className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/> <p>Airtime To Cash</p></Link>
                <Link to="/cable-subscription" className=' flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-[#f20d45ff] border-t-4 border-[#f20d45ff]'>
                <MdOutlineScreenshotMonitor  className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/> <p>Cable Subscription</p></Link>
                <Link to="/history" className=' flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-[#f20d45ff] border-t-4 border-[#f20d45ff]'>
                <MdHistoryEdu  className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/> <p>Transaction History</p></Link>
                <Link to="https://api.whatsapp.com/send/?phone=2348120911936&text&type=phone_number&app_absent=0" className=' flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-[#f20d45ff] border-t-4 border-[#f20d45ff]'>
                <SiExpertsexchange  className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/> <p>Cypto Exchange</p></Link>
            </div>

            
        </div>
    )
}

export default Dashboard
