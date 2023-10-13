import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { BiLogoPinterest } from "react-icons/bi"
import { GiBasketballBall } from "react-icons/gi"
import { AiOutlineGooglePlus } from "react-icons/ai"

function Icon(props) {
    return (
        <>
            <div className=''>
                {
                    props?.data?.id === 1 ?
                        <FaFacebook className='text-[24px] tracking-[1px] leading-[28px] text-[#55565B] hover:text-[#3B5998]' /> :
                        props?.data?.id === 2 ?
                            <BsTwitter className='text-[24px] tracking-[1px] leading-[28px] text-[#55565B] hover:text-[#3B5998]' /> :
                            props?.data?.id === 3 ?
                                <BiLogoPinterest className='text-[24px] tracking-[1px] leading-[28px] text-[#55565B] hover:text-[#5B2A2A]' /> :
                                props?.data?.id === 4 ?
                                    <GiBasketballBall className='text-[24px] tracking-[1px] leading-[28px] text-[#55565B] hover:text-[#BD081C]' /> :
                                    props?.data?.id === 5 ?
                                        <AiOutlineGooglePlus className='text-[24px] tracking-[1px] leading-[28px] text-[#55565B] hover:text-[#BD081C]' /> :
                                        <AiOutlineGooglePlus />



                }
            </div>
        </>
    )
}

export default Icon
