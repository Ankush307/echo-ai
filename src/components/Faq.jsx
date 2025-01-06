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
            <div className="container pt-[210px] max-xl:py-[170px] max-lg:py-24 max-md:py-14 mx-auto">
                <h2 className="text-white text-center text-[48px] font-semibold leading-[57.6px] py-[56px]"> FAQ's</h2>
                <div className="max-w-[1022px] flex flex-col gap-6 mx-auto">
                    {FAQ_DATA_LIST.map((item, index) => (
                        <div key={index} className={`rounded-xl p-6 border border-solid border-dark-blue ${active === index ?'border':''}`}>
                            <button onClick={() => toggle(index)} className={`flex w-full text-white justify-between max-sm:gap-4 bg-transparent items-center text-left max-sm:text-base font-medium text-xl max-md:text-lg ${active === index ? "pb-4" : ""}`}>
                                {item.heading}
                                <span className={`transition-all duration-300 ${active === index ? 'rotate-180' : ''} `}><ArrowIcon /></span>
                            </button>
                            <p className={`text-white max-md:text-sm overflow-hidden transition-all ease-linear duration-500 ${active === index ? "max-h-32 max-sm:max-h-56" : "max-h-0"}`} >{item.subHeading}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq