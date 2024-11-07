import React from 'react'
import { Link } from 'react-router-dom';
import { IoBarChartSharp } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { GiCash } from "react-icons/gi";

const Home: React.FC = () => {
    return (
        <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Welcome to FlexySub</h2>
            <p>Select a service to get started:</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 pt-4'>
                <Link to="/topup" className=" flex flex-col gap-2 items-center shadow-lg p-3 hover:bg-gold border-t-4 border-gold"><IoBarChartSharp className='w-12 h-12' /> <p>Airtime/Data</p> </Link>
                <Link to="/electricity-bill" className=" flex flex-col gap-2 items-center shadow-lg p-3 hover:bg-gold border-t-4 border-gold"><FaRegLightbulb className='w-12 h-12'/><p>Electricity Bill</p></Link>
                <Link to="/betting-fund" className=" flex flex-col gap-2 items-center shadow-lg p-3 hover:bg-gold border-t-4 border-gold"> <IoFootball className='w-12 h-12' /> <p>Betting Fund</p></Link>
                <Link to="/airtime-to-cash" className=' flex flex-col gap-2 items-center shadow-lg p-3 hover:bg-gold border-t-4 border-gold'>
                <GiCash  className='w-12 h-12'/> <p>Airtime To Cash</p></Link>
            </div>
        </div>
    )
}

export default Home
