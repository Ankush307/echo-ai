import React from 'react'
import CustomButton from '../common/CustomButton'
import Header from '../common/Header'

const Hero = () => {
    return (
        <div className='flex flex-col items-center bg-cover bg-no-repeat bg-center bg-heroBgImg mt-[-1px] '>
            <div className="container mx-auto">
                <Header />
                <div className="flex flex-wrap w-full relative  py-[240px]">
                    <div className="w-8/12 flex flex-col items-center justify-center">
                        <h1 className='text-7xl !leading-[84.4px] font-bold text-white text-center'>Innovate, Automate, Accelerate </h1>
                        <p className='text-xl !leading-[30px] text-center text-white py-6'>Next Gen AI Automation to Scale Your Business.</p>
                        <CustomButton text={'Book A Call Now!'} myClass={'px-[38.5px] py-[19.5px] '} />
                    </div>
                    <div className="w-4/12">
                        <img className='pointer-events-none' src="./assets/images/png/hero-robot-img.png" alt="robot" />
                    </div>
                    <img className='absolute left-[-10%] top-[-25%] pointer-events-none' src="./assets/images/webp/hero-side-circle.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero