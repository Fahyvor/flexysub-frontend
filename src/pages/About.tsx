import React from 'react'
import AboutImage from '../assets/about.png'
import AboutMission from '../assets/about-mission.png'
import VisionImage from '../assets/vision-image.png'

const About: React.FC = () => {
  return (
    <div>
        <div className='about_home flex lg:flex-row flex-col gap-8 w-full items-center'>
            <div className='lg:w-1/2 w-full flex flex-col gap-5'>
                <p className='lg:text-6xl text-3xl lg:leading-relaxed leading-10 font-bold'>Explore About Us Discover Our Story</p>
                <p className='leading-loose tracking-wider text-justify text-sm'>Dive Deeper into Who We Are, What Drives Us, and Our Commitment to Excellence, Learn About Our Ambitious Goals for Transforming Finance.</p>

                <p className='text-white rounded-lg px-3 py-2 text-center bg-[#f20d45ff] lg:w-1/3 w-3/4'>More About Us</p>
            </div>

            <div className='lg:w-[45%] w-full bg-[#f20d45ff] rounded-2xl'>
                <img src={AboutImage} alt='' className='w-full' />
            </div>
        </div>

        <div className='mission flex lg:flex-row flex-col-reverse items-center py-8'>
            <div className='lg:w-[40%] w-full flex justify-end'>
                <img src={AboutMission} alt='' className='lg:w-[90%] w-full' />
            </div>

            <div className='bg-[#f20d45ff] py-7 text-white flex flex-col lg:gap-16 gap-8 px-9 items-end lg:w-[60%] w-full'>
                <p className='lg:text-5xl text-2xl font-bold text-right'>Our Mission is to Make financial Matters easy</p>
                <p className='text-right leading-loose'>
                    At Flexysub, our mission is to revolutionize financial accessibility and streamline transactions for businesses across Nigeria. We strive to provide seamless solutions that simplify the complexities of financial management.
                </p>
                <p className='text-right leading-loose'>
                    We help empower businesses to effortlessly handle everything from payments to identity verification. With our innovative services, we aim to foster financial inclusion and enable businesses to thrive in the digital economy.
                </p>
            </div>
        </div>

        <div className="vission w-full flex lg:flex-row flex-col gap-4 items-center py-8">
            <div className='w-full lg:w-[60%] flex flex-col gap-8 px-4 lg:px-8'>
                <p className='text-2xl lg:text-5xl font-bold'>Our Vision Is To Attain A Global Standard</p>
                <p className='text-md text-justify leading-relaxed'>
                    At Flexysub, our vision is to revolutionize financial accessibility and streamline transactions for businesses across Nigeria. We're committed to providing seamless solutions that simplify the complexities of financial management.
                </p>
                <p className='text-md text-justify leading-relaxed'>
                    empowering businesses to effortlessly handle everything from payments to identity verification. With our innovative services, we aim to foster financial inclusion and enable businesses to thrive in the digital economy.
                </p>
            </div>

            <div className='w-full lg:w-[50%]'>
                <img src={VisionImage} alt="" className='' />
            </div>
        </div>
    </div>
  )
}

export default About