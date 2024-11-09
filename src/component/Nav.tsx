import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsProgress } from "react-icons/fa6";
import { GiCancel } from 'react-icons/gi';
import Logo from '../assets/logo.png';

const Nav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-red-600 p-4 bottom-0">
            <div className="flex justify-between items-center text-white">
                <Link to="/" className="text-xl font-bold">
                    <img src={Logo} alt='' className='w-16 h-10'/>
                    {/* <p>FLEXYSUB</p> */}
                </Link>
                <div className='lg:flex md:flex hidden'>
                    <p>Balance: <span className='font-bold'>N1,000</span></p>
                </div>
                <div className='fund_wallet text-center px-5 cursor-pointer mx-auto bg-transparent py-2 border-2 border-white rounded-lg font-bold'>
                    <p>Fund Wallet</p>
                </div>
                <div className="space-x-4 lg:flex md:flex hidden">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                </div>

                <div className='lg:hidden md:hidden flex'>
                    {isMenuOpen ? <GiCancel className='w-6 h-6' onClick={() => setIsMenuOpen(!isMenuOpen)} /> : <FaBarsProgress className='w-6 h-6' onClick={() => setIsMenuOpen(!isMenuOpen)}/>}
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-full bg-red-600 text-white transition-transform transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                style={{ width: '200px' }}
            >
                <div className="p-4 pt-6">
                    <Link to="/dashboard" className="block py-2">Dashboard</Link>
                    <Link to="/profile" className="block py-2">Profile</Link>
                    <div className='my-2'>
                        <p>Balance: <span className='font-bold'>N1,000</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
