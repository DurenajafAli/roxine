import React from 'react'
import Workcards from './Workcards'
import Img from "./Images/img-32.jpg"
import Img1 from "./Images/img-33.jpg"
import Img2 from "./Images/img-34.jpg"

function Work() {
  return (
    <>
      <div className='w-full p-1 border-box'>
        <h1 className='text-[30px] font-semibold sm: lg:text-[48px] md:text-[35px] lg:font-semibold tracking-[2px] leading-[57px] text-center text-[#555566e3] mt-10'>
          THE WORK
        </h1>
        <ul className='flex justify-center flex-wrap gap-2 text-[12px] mt-8  sm: md:text-[15px] md:gap-6 lg:flex lg:gap-5  lg:justify-center lg:items-center lg:mt-12'>
          <li className='hover:text-[#5645FF]'>ALL</li>
          <li>-</li>
          <li className='hover:text-[#5645FF]'>UI/UX DESIGN</li>
          <li>-</li>
          <li className='hover:text-[#5645FF]'>PROGRAMMING</li>
          <li>-</li>
          <li className='hover:text-[#5645FF]'>PHOTOGRAPHY</li>
          <li>-</li>
          <li className='hover:text-[#5645FF]'>ECOMMERCE</li>

        </ul>
      </div>
      <div className='grid grid-cols-1 w-full  sm:  md:grid-cols-2 lg:grid-cols-3 lg:gap-5  '>
        <Workcards data={{ url: Img}} />
        <Workcards data={{ url: Img1 }} />
        <Workcards data={{ url: Img2 }} />

      </div>
    </>
  )
}

export default Work
