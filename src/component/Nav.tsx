import React from 'react'
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <div className="bg-red-600 p-4">
            <div className="flex justify-between items-center text-white">
                <Link to="/" className="text-xl font-bold">FLEXYSUB</Link>
                <div className="space-x-4">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
