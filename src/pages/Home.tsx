import React from 'react'
import HomeImage from '../assets/home.png';
import CheapData from '../assets/data.png';
import Payment from '../assets/payments.png'
import Cards from '../assets/cards.png';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div>
        <div className="home_body flex lg:flex-row flex-col gap-4 w-full items-center">
            <div className='lg:w-1/2 w-full'>
                <p className='lg:text-6xl text-3xl font-black lg:leading-relaxed leading-10'>Enhancing Nigeria's Digital <span className="text-[#f20d45ff]">Payments</span></p>

                <p className='leading-loose lg:tracking-wider tracking-normal text-justify lg:text-md text-sm my-4'>
                    Get Affordable Data Bundles, Earn via Social Tasks, Settle Bills, and Make Virtual Payments with Yanga Plug – Your Gateway to Seamless Digital Transactions.
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

        <div className="seamless-services py-9">
            <p className='text-4xl font-bold text-center my-3'>Get To Enjoy Our Seamless <span className='text-[#f20d45ff]'>Services</span></p>
            <div className='flex gap-3 lg:flex-row flex-col'>
                <div className="p-1 rounded-lg shadow-2xl flex flex-col gap-5 pb-6">
                    <img src={CheapData} alt='' className='' />
                    <p className='font-bold mx-4 text-sm'>AFFORDABLE DATA PLANS</p>
                    <p className='text-sm mx-4 w-5/6'>Our affordable data plans keep you connected effortlessly.</p>

                    <div className='mx-4 py-2 cursor-pointer text-white text-sm font-semibold lg:w-1/3 w-3/4 text-center rounded-md bg-[#f20d45ff]' onClick={() => navigate('/services')}>
                        <p>Learn More</p>
                    </div>
                </div>

                <div className="p-1 rounded-lg shadow-2xl flex flex-col gap-5 pb-6">
                    <img src={Payment} alt='' className='' />
                    <p className='font-bold mx-4 text-sm'>CABLE SUBSCRIPTION</p>
                    <p className='text-sm mx-4 w-5/6'>Our budget-friendly cable plans ensure you stay entertained without any hassle.</p>

                    <div className='mx-4 py-2 cursor-pointer text-white text-sm font-semibold lg:w-1/3 w-3/4 text-center rounded-md bg-[#f20d45ff]' onClick={() => navigate('/services')}>
                        <p>Learn More</p>
                    </div>
                </div>
                <div className="p-1 rounded-lg shadow-2xl flex flex-col gap-5 pb-6">
                    <img src={Cards} alt='' className='' />
                    <p className='font-bold mx-4 text-sm'>ELECTRICITY SUBSCRIPTION</p>
                    <p className='text-sm mx-4 w-5/6'>
                    Our affordable electricity plans ensure you stay powered up without any hassle.</p>

                    <div className='mx-4 py-2 cursor-pointer text-white text-sm font-semibold lg:w-1/3 w-3/4 text-center rounded-md bg-[#f20d45ff]' onClick={() => navigate('/services')}>
                        <p>Learn More</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="news_letter py-8 flex flex-col items-center gap-4">
            <p className='lg:text-3xl font-bold'>Subscribe To Our NewsLetter</p>
            <p className='w-2/3 text-center mx-auto'>Stay connected with Flexysub by signing up for our newsletter to receive updates, promotions, and insights to enhance your experience with our platform</p>

            <form className='w-1/3 flex lg:flex-row flex-col'>
                <input type='email'
                placeholder='Enter your email'
                className='outline-none border-2 rounded-lg mx-2 p-2 '
                />
                <button className='text-white bg-[#f20d45ff] p-2 rounded-lg'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Home