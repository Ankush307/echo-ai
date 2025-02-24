import React from 'react'
import { RESULTS_LIST } from '../utils/helper';

const Projects = () => {
    return (
        <div id='benefits' className="pt-[56px] max-lg:pt-10 max-md:pt-8 bg-wood-smoke my-[-2px] lg:pb-[160px] pb-8">
            <div className="max-w-[1138px] mx-auto">
                <div className="flex max-lg:flex-wrap justify-center gap-y-10 max-md:gap-[30px]">
                    {RESULTS_LIST.map((item, index) => (
                        <div className={`md:w-4/12 sm:w-1/2 w-full justify-center flex max-md:pr-0 pr-[17px] max-md:!border-r-0 border-right border-solid ${index === 1 ? "max-lg:border-r-0" : index === 2 ? "!border-r-0 max-sm:w-full max-lg:pr-0 " : ""}`}>
                            <div className="max-w-[365px] justify-center items-center flex flex-col">
                                <h3 className='lg:text-5xl sm:text-4xl text-3xl font-semibold leading-[120%] text-white pb-2'>{item.heading} </h3>
                                <p className={`max-w-[146px] text-center text-white leading-6 font-normal text-base max-md:text-sm ${index === 2 ? "max-w-[187px]" : "max-w-[146px]"}`}>{item.description}{" "}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects