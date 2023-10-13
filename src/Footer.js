import React from 'react'
import Img from "./Images/logo-dark.svg"
import Icon from './Icon'




function Footer(props) {
    return (
        <>
            <div className="w-full h-[55vh]  bg-[#212121]">





                <div className='w-full h-[22vh] flex justify-evenly pt-16  flex-col sm:pt-20  lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:h-[22vh]    md:pt-20  '>
                    <img className='w-28 ml-14  ' src={Img} alt='' />
                    <ul className='  flex justify-evenly items-center px-8 pt-5  sm:px-40 sm:ml-[-170px] sm:pt-10 md:ml-[-200px]  lg:flex lg:justify-evenly  lg:items-center lg:gap-8 lg:pt-0 lg:ml-0 lg:text-[13px] '>
                        <li className='text-[13px] font-light tracking-[1px] leading-[28px] text-[#55565B] hover:text-white'>Home</li>
                        <li className='text-[13px] font-light tracking-[1px] leading-[28px] text-[#55565B] hover:text-white'>About</li>
                        <li className='text-[13px] font-light tracking-[1px] leading-[28px] text-[#55565B] hover:text-white'>Blog</li>
                        <li className='text-[13px] font-light tracking-[1px] leading-[28px] text-[#55565B] hover:text-white'>Contact</li>
                    </ul>
                    <div className=' flex justify-evenly items-center gap-1 pt-5  sm:gap-0 sm:px-40 sm:ml-[-170px] sm:pt-5 md:ml-[-200px] md:pt-10 lg:flex lg:justify-evenly lg:items-center lg:gap-8 lg:pt-0'>
                        <Icon data={{ id: 1 }} />
                        <Icon data={{ id: 2 }} />
                        <Icon data={{ id: 3 }} />
                        <Icon data={{ id: 4 }} />
                        <Icon data={{ id: 5 }} />

                    </div>
                    

                </div>
                <h1 className='text-[13px] tracking-[1px] leading-[28px] text-[#55565B] lg:text-center  w-72 mx-auto mt-20 sm:w-[500px]  sm:mt-28 md:mt-32 lg:mt-28'>
                    Copyright 2016 - Roxine - Multi Purpose Theme by Waituk
                </h1>
            </div>

        </>
    )
}

export default Footer
