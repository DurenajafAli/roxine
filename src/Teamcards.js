import React from 'react'

function Teamcards(props) {
    return (
        <>
            <div style={{ backgroundImage: `url(${props.data.url})` }} className='relative  w-full sm:w-[70%] md:w-full lg:w-full xl:w-[350px] h-[525px]  p-1 border-box mt-10 bg-cover team overflow-hidden'>
                <div className='purplediv absolute  w-full h-[131.594px]   bg-[#5645FF] ml-[-4px] mt-[112%]'>
                    <h1 className='text-white text-[18px] tracking-[2px] leading-[21px] text-right px-8 mt-10'>
                        {props.data.name}
                    </h1>
                    <p className='text-[14px] italic tracking-[1px] leading-[30px] text-white text-right px-8'>
                        UI/UX GURU
                    </p>

                </div>
            </div>
        </>
    )
}

export default Teamcards
