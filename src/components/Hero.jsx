import React from 'react'
import CustomButton from '../common/CustomButton'
import Header from '../common/Header'

const Hero = () => {
    return (
        <div className='flex flex-col items-center bg-cover bg-no-repeat bg-center bg-heroBgImg mt-[-1px] '>
            <div className="container mx-auto max-xl:px-4">
                <Header />
                <div className="flex flex-wrap w-full relative lg:py-[240px] py-10 max-lg:gap-4">
                    <div className="lg:w-8/12 w-full flex flex-col items-center justify-center relative z-10">
                        <h1 className='text-[72px] leading-[86.4px] max-xl:text-6xl  max-lg:text-5xl max-md:text-4xl font-bold text-white text-center'>Innovate, Automate, Accelerate </h1>
                        <p className='text-xl !leading-[30px] text-center text-white py-6'>Next Gen AI Automation to Scale Your Business.</p>
                        <CustomButton text={'Book A Call Now!'} myClass={'sm:px-[38.5px] px-7 py-3 sm:py-[19.5px] max-sm:text-base '} />
                    </div>
                    <div className="lg:w-4/12 w-full max-lg:flex items-center justify-center">
                        <img className='pointer-events-none max-lg:max-w-[384px] max-sm:max-w-[360px]' src="./assets/images/png/hero-robot-img.png" alt="robot" />
                    </div>
                    <img className='absolute max-sm:w-[200px] md:left-[-10%] top-[70%] left-[-7%] md:top-[-25%] pointer-events-none' src="./assets/images/webp/hero-side-circle.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero