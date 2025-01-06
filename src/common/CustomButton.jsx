import React from 'react'

const CustomButton = ({ myClass, text }) => {
    return (
        <>
            <button className={`${myClass} submit-btn font-semibold text-xl !leading-[25.2px] text-white rounded-[57px] hover:scale-110 transition-all duration-500 ease-linear`}>{text}</button>
        </>
    )
}

export default CustomButton