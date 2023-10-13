import React from 'react'
import Img from "./Images/logo.svg";

function Section() {

  // const nav=""
  // window.addEventListener('scroll', () => {
  //   console.log(window.screenY,"test");
  //   if (window.scrolly > 200 && window.scrolly < 1000) {
  //     nav.style.backgroundColor = 'white'
  //     nav.style.transitionDuration='1s'
  //   }
  //   else if (window.scrolly > 1000) {
  //     nav.style.backgroundColor='black'
  //   }
  //   else {
  //     nav.style.backgroundColor="white"
  //   }
    
  // })
  return (
    <>

      <section className='overflow-hidden sec1   w-full h-[90vh]   sm: lg:w-ful lg:h-[100vh] border-box p-1'>
        <nav className=' top-0  sm: lg:w-full lg:h-[15vh] lg:flex justify-between items-center px-20'>
          <img className='mt-10 sm: lg:mt-0' src={Img} alt='' />
          <ul className='lg:flex justify-evenly items-center gap-10 text-white hidden'>
            <li>HOME</li>
            <li>FEATURES</li>
            <li>PORTFOLIO</li>
            <li>ELEMENTS</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>BLOG</li>
            <li>CONTACT</li>

          </ul>
        </nav>
        <h1 className='text-[18px] ml-10 mt-40 font-semibold sm: text-white lg:text-[24px] lg:font-semibold lg:tracking-[4px] lg:leading-[28px] lg:mt-10 lg:ml-44 '>GRAPHICS. WEB. DIGITAL.</h1>
        <h2 className='font-black ml-10  sm:text-[35px] text-white lg:text-[120px] lg:font-black lg:tracking-[18px] lg:leading-[145px] lg:text-center lg:mt-16 '>START - UP</h2>
        <p className='text-[12px] w-[290px] mt-0 ml-8  sm: text-white  lg:text-[15px] lg:leading-[23px] lg:w-[457px] lg:ml-48 lg:mt-5'>
          Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod tempor inticidunt ut labore et dolore magna aliqua.Ut enim ad minim.
        </p>
        <button className='w-44 ml-8 mt-5 h-10  sm: text-white border-2 border-black bg-[#5645FF] border-none lg:w-52 lg:h-10 rounded-[8px] lg:ml-48 lg:mt-10'>EXPLORE WORK</button>


      </section>
    </>
  )
}

export default Section
