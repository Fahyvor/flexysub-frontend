import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsProgress } from "react-icons/fa6";
import { GiCancel } from 'react-icons/gi';
import Logo from '../assets/logo.png';

const Nav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        try {
            const userDetails = JSON.parse(sessionStorage.getItem('userData') || 'null');
            setIsLoggedIn(!!userDetails);
        } catch (error) {
            console.error("Failed to parse user data from sessionStorage:", error);
            setIsLoggedIn(false);
        }
    }, []); 
    return (
        <div className="bg-[#f20d45ff] p-4 bottom-0">
            <div className="flex justify-between items-center text-white">
                <Link to="/" className="text-xl font-bold">
                    <img src={Logo} alt='' className='w-16 h-10 shadow-lg '/>
                    {/* <p>FLEXYSUB</p> */}
                </Link>
                {/* <div className=''>
                    <p>Balance: <span className='font-bold'>N1,000</span></p>
                </div> */}
                <div className="gap-10 px-10 lg:flex md:flex hidden items-center">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    {isLoggedIn ? 
                    <Link to="/dashboard" className="block py-2 border-2 border-white p-3 rounded-lg" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                    : <Link to="/login" className="block py-2 border-2 border-white p-3 rounded-lg" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                    }
                </div>

                <div className='lg:hidden md:hidden flex'>
                    {isMenuOpen ? <GiCancel className='w-6 h-6' onClick={() => setIsMenuOpen(!isMenuOpen)} /> : <FaBarsProgress className='w-6 h-6' onClick={() => setIsMenuOpen(!isMenuOpen)}/>}
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-full bg-[#f20d45ff] text-white transition-transform transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                style={{ width: '200px' }}
            >
                <div className="p-4 pt-6 flex flex-col gap-7">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    {isLoggedIn ? 
                    <Link to="/dashboard" className="block py-2 border-2 border-white p-3 w-3/4 rounded-lg" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                    : <Link to="/login" className="block py-2 border-2 border-white p-3 rounded-lg" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default Nav;
