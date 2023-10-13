import React from 'react'
import Teamcards from './Teamcards'
import Img from "./Images/team-01.jpg"
import Img1 from "./Images/team-02.jpg"
import Img2 from "./Images/team-03.jpg"

function Team() {
    return (
        <>
            <div className=' w-full p-1 border-box'>
                <h1 className='text-[22px] ml-2 sm:ml-12 lg:text-[30px] md:text-[26px] md:ml-8 tracking-[3px] leading-[36px] font-thin  mt-10 lg:ml-8 xl:ml-16'>
                    WHO WE ARE
                </h1>
                <h2 className='text-[30px] ml-2 leading-[45px] sm:ml-12 lg:text-[48px] md:text-[40px] md:ml-8 font-semibold tracking-[2px] lg:leading-[57px]  text-[#55565B] mt-3 lg:ml-8 xl:ml-16'>
                    TEAM WORK
                </h2>
                <p className='text-[18px] ml-2 leading-[25px]  sm:ml-12 lg:text-[18px] md:text-[17px] md:ml-8 italic tracking-[1px] lg:leading-[30px]  lg:ml-8
                xl:ml-16 mt-5'>
                    We really love what we do & our work on every project truly reflects that.
                </p>

            </div>
            <div className='grid grid-cols-1  sm:grid-cols-1 sm:place-items-center md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-8 xl:gap-0 xl:px-16'>
                <Teamcards data={{ url: Img , name : "JASSICA FIZOVIC" }} />
                <Teamcards data={{ url: Img1, name: "JASON STRATHOM" }} />
                <Teamcards data={{ url: Img2, name: "JAMES NASS" }}/>


            </div>
        </>
    )
}

export default Team
