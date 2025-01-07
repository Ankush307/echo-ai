import React, { useEffect, useState } from 'react'

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false)
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const setHendler = () => {
        setScrollToTop(window.scrollY > 120)
    }
    useEffect(() => {
        window.addEventListener("scroll", setHendler)
    },)
    return (
        <div>{scrollTop && (
            <button onClick={scrollHandler} className='fixed right-[10px] bottom-[10px] z-50'><img className='size-9 animate-bounce 2xl:size-14 lg:size-12 bg-black rounded-full' src="./assets/images/png/back-to-top.png" alt="back-to-top-btn" /></button>
        )}
        </div>
    )
}

export default BackToTop