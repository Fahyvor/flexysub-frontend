import React from 'react'
import { Link } from 'react-router-dom';
import { IoBarChartSharp } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { GiCash } from "react-icons/gi";
import { MdOutlineScreenshotMonitor, MdHistoryEdu } from "react-icons/md";

const Home: React.FC = () => {
    return (
        <div className="text-center space-y-4">
            <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold">Welcome to FlexySub</h2>
            <p>Select a service to get started:</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pt-4'>
                <Link to="/topup" className=" flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-gold border-t-4 border-gold"><IoBarChartSharp className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6' /> <p>Airtime/Data</p> </Link>
                <Link to="/electricity-bill" className=" flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-gold border-t-4 border-gold"><FaRegLightbulb className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/><p>Electricity Bill</p></Link>
                <Link to="/betting-fund" className=" flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-gold border-t-4 border-gold"> <IoFootball className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6' /> <p>Betting Fund</p></Link>
                <Link to="/airtime-to-cash" className=' flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-gold border-t-4 border-gold'>
                <GiCash  className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/> <p>Airtime To Cash</p></Link>
                <Link to="/cable-subscription" className=' flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-gold border-t-4 border-gold'>
                <MdOutlineScreenshotMonitor  className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/> <p>Cable Subscription</p></Link>
                <Link to="/history" className=' flex flex-col gap-2 items-center shadow-lg p-3 py-12 hover:bg-gold border-t-4 border-gold'>
                <MdHistoryEdu  className='lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6'/> <p>Transaction History</p></Link>
            </div>

            <div className='fund_wallet lg:w-1/2 md:1/2 w-full cursor-pointer rounded-lg bg-gold py-3'>
                <p>Fund Wallet</p>
            </div>
        </div>
    )
}

export default Home
