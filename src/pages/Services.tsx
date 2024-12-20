import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServicesImage from '../assets/services-image.png';
import PhoneImage from '../assets/phone.png';

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

            <div className='lg:w-1/2 w-full flex justify-center px-3'>
                <img src={ServicesImage} alt='' className='w-full'/>
            </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse gap-4 items-center py-8">
            <div className="w-[35%] flex justify-center items-center">
                <img src={PhoneImage} alt='' className='w-30'/>
            </div>
            <div className='py-7 w-full lg:w-[65%]'>
                <p className='text-2xl lg:text-5xl font-bold'>Bills Payment</p>

                <p className='text-lg my-4'>Experience the future of seamless bill payments with Flexysub. Wave goodbye to complications and embrace convenience. Our intuitive platform ensures quick and secure payment for all your utility needs.</p>

                <div className='flex flex-col gap-6 py-6'>
                    <div className="flex gap-2 items-center">
                        <div className='bg-[#f20d45ff] flex justify-center items-center px-3 rounded-md text-[#f20d45ff]'>
    .
                        </div>

                        <p className='font-md'>Top-up airtime & Data Bundles for all networks</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className='bg-[#f20d45ff] flex justify-center items-center px-3 rounded-md text-[#f20d45ff]'>
    .
                        </div>

                        <p className='font-md'>Cable subscriptions for DSTV, GOTV, & Startimes</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className='bg-[#f20d45ff] flex justify-center items-center px-3 rounded-md text-[#f20d45ff]'>
    .
                        </div>

                        <p className='font-md'>Purchase Electricity Units from anywhere in Nigeria</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services