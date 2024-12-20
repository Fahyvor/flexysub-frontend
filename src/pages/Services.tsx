import React from 'react'
import { useNavigate } from 'react-router-dom';
import HomeImage from '../assets/home.png';


const Services: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div>
        <div className="home_body flex lg:flex-row flex-col gap-4 w-full items-center">
            <div className='lg:w-1/2 w-full'>
                <p className='lg:text-6xl text-3xl font-black lg:leading-relaxed leading-10'>Get to Explore Our Innovative <span className="text-[#f20d45ff]">Service</span></p>

                <p className='leading-loose lg:tracking-wider tracking-normal text-justify lg:text-md text-sm my-4'>
                    Discover how Flexysub is Revolutionizing Financial Solutions for Businesses and Individuals Alike. we Simplifying Transactions for all.
                </p>

                <div className='flex gap-3'>
                    <div className='sign-in rounded-lg text-white cursor-pointer     bg-[#f20d45ff]' onClick={() => navigate('/login')}>
                        <p className='text-sm p-2 px-4'>Sign In</p>
                    </div>

                    <div className='sign-up rounded-lg cursor-pointer border-[1px] border-[#f20d45ff]' onClick={() => navigate('/signup')}>
                        <p className='text-sm p-2 px-4'>Sign Up</p>
                    </div>
                </div>

            </div>

            <div className='lg:w-1/2 w-full flex justify-center'>
                <img src={HomeImage} alt='' className='lg:w-96 lg:h-104'/>
            </div>
        </div>
    </div>
  )
}

export default Services