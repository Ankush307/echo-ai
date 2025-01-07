import React, { useState } from 'react'
import { FAQ_DATA_LIST } from '../utils/helper'
import { ArrowIcon } from '../utils/icons';

const Faq = () => {
    const [active, setActive] = useState(0);
    const toggle = (index) => {
        setActive(active === index ? null : index);
    };
    return (
        <div className="bg-wood-smoke">
            <div className="container xl:pt-[194px] lg:pt-24 mx-auto max-xl:px-4">
                <h2 className="text-white text-center lg:text-[48px] sm:text-[36px] text-[30px] font-semibold leading-[57.6px] xl:pb-[60px] sm:pb-5 pb-3"> FAQ's</h2>
                <div className="max-w-[1022px] flex flex-col gap-6 mx-auto">
                    {FAQ_DATA_LIST.map((item, index) => (
                        <div className={`rounded-xl  ${active === index ? 'bg-custom p-[1px]' : ''}`}>
                            <div key={index} className={`rounded-xl !bg-wood-smoke sm:p-6 p-4 border gap-4 border-solid border-dark-blue ${active === index ? '!border-none' : ''}`}>
                                <button onClick={() => toggle(index)} className={`flex w-full text-white justify-between max-sm:gap-4 bg-transparent items-center text-left max-sm:text-base font-medium text-xl max-md:text-lg`}>
                                    {item.heading}
                                    <span className={`transition-all duration-700 ${active === index ? 'rotate-180' : ''} `}><ArrowIcon /></span>
                                </button>
                                <p className={`text-white max-md:text-sm overflow-hidden transition-all ease-linear duration-500 ${active === index ? "max-h-36 max-sm:max-h-56 pt-4" : "max-h-0"}`} >{item.subHeading}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq