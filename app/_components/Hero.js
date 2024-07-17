// <div className='bg-center bg-cover h-screen custom-img'>
//     {/* overlay */}
//     <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2] '/>
//     <div>
//         <h2>Heading</h2>
//         <p>Message</p>
//     </div>
// </div>

'use client'

import React from 'react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (

    <div className='relative bg-fixed bg-center bg-cover h-screen custom-img pt-[12rem] md:pt-[8rem] lg:pt-[10rem] z-[-10]'>
      {/* overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[5]'/>
      <div className='relative z-[3] flex flex-col gap-[1rem] items-center justify-center text-center w-full h-full max-w-[1240px] m-auto px-4 sm:px-6 lg:px-8 custom-text'>
        <h2 className={`text-white font-bold pt-10 px-6 mx-auto w-[70%] text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100 delay-500' : 'opacity-0'} text-3xl w-[90%] sm:text-4xl md:text-5xl lg:text-6xl text-center`}>Unlock Your Dream Home with Realty Plus</h2>
        <h3 className={`text-[#E5E7EB]  px-6 mx-auto font-bold transition-opacity duration-1000 ${isVisible ? 'opacity-100 delay-1000' : 'opacity-0'} text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center`}>Your Journey to the Perfect Property Begins Here</h3>
        <p className={`text-white mx-auto px-6 w-full transition-opacity duration-1000 ${isVisible ? 'opacity-100 delay-1500' : 'opacity-0'} text-[1rem] w-full sm:text-lg md:text-xl lg:text-2xl text-center max-w-xl mx-auto`}>We at Realty Plus, we turn your real estate dreams into reality. Our mission is to simplify the home buying, selling, and renting process by providing a seamless, user-friendly platform that connects you with the best properties on the market. </p>
      </div>
    </div>
  )
}
