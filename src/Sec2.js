import React from 'react'

function Sec2(props) {
    return (
        <>
            {
                props.data.id == 1 &&
                <div className='card w-80 mt-10 h-auto  flex flex-col items-center py-14'>
                    <h1 className='text-[28px] font-light text-center tracking-[3px] leading-[33px]'>WHAT WE DO</h1>
                    <h2 className='text-center text-[#55565B] text-[42px] font-bold'>EXPERTS</h2>
                    <p className='text-[18px]  tracking-[1px] leading-[30px] italic  mt-5'>We build digital solutions.</p>

                </div>
           }
            

            { props.data.id==2 &&
                <div className='card2 relative overflow-hidden bg-white w-80 h-auto  py-14 rounded-lg'>
                    <h1 className='text-[17px] tracking-[2px] leading-[20px] text-center hover:text-[#5645FF]'>PIXEL PERFECT</h1>
                    <p className='text-[15px] leading-[25px] tracking-[1px] ml-10 w-60 mt-5 text-center'>Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet</p>
                    <h2 className='text-center mt-12 hover:text-[#5645FF]'>LEARN MORE</h2>
                    
                </div>

          }
        </>
  )
}

export default Sec2
