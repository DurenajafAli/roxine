import React from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { GiDiamondsSmile } from 'react-icons/gi'
import { FaGlasses, FaGlassCheers } from 'react-icons/fa'

function Sec7(props) {
    

    return (
        <>

            <div className='icon1 forhover w-[100%]   h-auto  flex flex-col items-center  py-20 gap-3  '>
                {
                    props?.data?.number === "505" ?
                        < AiFillAppstore className='text-[50px] text-[#C1C5CD]' /> :
                        props?.data?.number === "220" ?
                            < GiDiamondsSmile className='text-[50px] text-[#C1C5CD] ' /> :

                            props?.data?.number === "720" ?
                                < FaGlasses className='text-[50px] text-[#C1C5CD] ' /> :
                                props?.data?.number === "707" ?
                                    < FaGlassCheers className='text-[50px] text-[#C1C5CD] ' /> :
                                    <FaGlassCheers />
                }

                <h1 className='text-[30px] font-semibold text-[#C1C5CD]'>{props?.data?.number}</h1>
                <h2 className='text-[18px] tracking-[1px] leading-[21px] text-[#C1C5CD]'>{props?.data?.title}
                </h2>

            </div>
        </>
    )
}

export default Sec7
