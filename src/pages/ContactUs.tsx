import React from 'react'
import { AiOutlineWechatWork } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <div>
        <p className='text-center text-2xl lg:text-5xl font-bold'>Get in Touch</p>
        <p className='text-center font-medium my-2 lg:w-full w-5/6 mx-auto'>Ready to Help your company scale faster? Let's chat about how we can hlep.</p>

        <div className='flex gap-8 px-8 lg:flex-row flex-col'>
            <div className="chat_to_sales flex flex-col gap-5 border-2 border-gray-100 p-3 rounded-lg shadow-xl">
                <div className="chat_icon">
                    <AiOutlineWechatWork className='w-12 h-12  bg-gray-100 p-2 rounded-lg' />
                </div>
                <div className="chat_details flex flex-col gap-1">
                    <p className='text-xl font-bold'>Chat to Sales</p>
                    <p className='text-sm'>Speak to our friendly team</p>
                    <a href="https://api.whatsapp.com/send/?phone=2348120911936&text&type=phone_number&app_absent=0" className='border-2 p-2 rounded-lg w-2/3 text-sm my-4'>Chat to Sales</a>
                </div>
            </div>

            <div className="call_us flex flex-col gap-5 border-2 border-gray-100 p-3 rounded-lg shadow-xl">
                <div className="chat_icon">
                    <FaPhoneAlt className='w-10 h-10  bg-gray-100 p-2 rounded-lg' />
                </div>
                <div className="chat_details flex flex-col gap-1">
                    <p className='text-xl font-bold'>Call us</p>
                    <p className='text-sm'>Mon-Fri 9:00 AM - 5:00 PM</p>
                    <a href="https://api.whatsapp.com/send/?phone=2348120911936&text&type=phone_number&app_absent=0" className='border-2 p-2 rounded-lg w-2/3 text-sm my-4'>Call Us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs