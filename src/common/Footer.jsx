import React from 'react'
import { FaceBookIcon, InstagramIcon, LinkedinIcon } from '../utils/icons';
import { FOOTER_LIST } from '../utils/helper';

const Footer = () => {
    const newYear = new Date().getFullYear();
    return (
        <footer>
            <div className="bg-wood-smoke px-5 pt-[356px] max-xl:pt-[300px] max-lg:pt-[200px] max-md:pt-[150px] -mt-1 max-sm:pt-[70px]">
                <div className="max-w-[1140px] mx-auto flex justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-10">
                    <a href="/"><img className="sm:max-w-[150px] max-w-[100px]" src='./assets/images/png/footer-logo.png' alt="footerLogo" /></a>
                    <div className="flex flex-col gap-3.5 max-sm:hidden">
                        <p className="text-base leading-[20px] max-sm:leading-[16px] max-sm:text-center text-white">Quick Links</p>
                        {FOOTER_LIST.map((item, index) => (
                            <a key={index} className="text-base leading-[20px] transition-all duration-300 ease-linear max-sm:text-sm max-sm:leading-[16px] text-gray hover:text-sky-blue cursor-pointer max-sm:text-center" href="/">{item}</a>
                        ))}
                    </div>
                    <div className="flex flex-col text-white max-sm:hidden">
                        <p className="text-base leading-[20px] max-sm:leading-[16px] text-white pb-3 max-sm:text-sm max-sm:text-center">Send Us An E-mail</p>
                        <a className="text-base leading-[20px] max-sm:leading-[16px] text-gray max-sm:text-center transition-all duration-300 ease-linear hover:text-sky-blue cursor-pointer" href="mailto:info@echoai.ai">info@echoai.ai</a>
                        <p className="text-base leading-[20px] max-sm:leading-[16px] pt-8 text-white max-sm:text-sm max-sm:text-center"> Send Us An E-mail</p>
                        <div className="flex gap-3 pt-[18px]">
                            <a className='hover:scale-110 transition-all duration-500 ease-linear' target="_blank" href="https://www.linkedin.com/feed/"><LinkedinIcon /></a>
                            <a className='hover:scale-110 transition-all duration-500 ease-linear' target="_blank" href="https://www.instagram.com/"><InstagramIcon /></a>
                            <a className='hover:scale-110 transition-all duration-500 ease-linear' target="_blank" href="www.facebook.com"><FaceBookIcon /></a>
                        </div>
                    </div>
                    <div className="flex justify-between sm:hidden gap-12">
                        <div className="flex flex-col gap-3.5">
                            <p className="text-base leading-[20px] max-sm:leading-[16px] max-sm:text-center text-white">Quick Links</p>
                            {FOOTER_LIST.map((item, index) => (
                                <a key={index} className="text-base leading-[20px] max-sm:text-sm max-sm:leading-[16px] text-gray hover:text-sky-blue transition-all duration-300 ease-linear cursor-pointer max-sm:text-center" href="/">{item}</a>
                            ))}
                        </div>
                        <div className="flex flex-col text-white">
                            <p className="text-base leading-[20px] max-sm:leading-[16px] text-white pb-3 max-sm:text-sm max-sm:text-center">Send Us An E-mail</p>
                            <a className="text-base leading-[20px] max-sm:leading-[16px] text-gray transition-all duration-300 ease-linear max-sm:text-center hover:text-sky-blue cursor-pointer" href="mailto:info@echoai.ai">info@echoai.ai</a>
                            <p className="text-base leading-[20px] max-sm:leading-[16px] pt-8 text-white max-sm:text-sm max-sm:text-center"> Send Us An E-mail</p>
                            <div className="flex gap-3 pt-[18px]">
                                <a className='hover:scale-110 transition-all duration-500 ease-linear' target="_blank" href="https://www.linkedin.com/feed/"><LinkedinIcon /></a>
                                <a className='hover:scale-110 transition-all duration-500 ease-linear' target="_blank" href="https://www.instagram.com/"><InstagramIcon /></a>
                                <a className='hover:scale-110 transition-all duration-500 ease-linear' target="_blank" href="www.facebook.com"><FaceBookIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex max-w-[1140px] pb-[30px] flex-col pt-[60px] mx-auto">
                    <div className="footer-line h-0.5 w-full"></div>
                    <p className="text-white text-center pt-5 leading-[150%] max-sm:text-sm">Copyright ECHO AI © {newYear} | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer