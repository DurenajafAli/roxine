import React from 'react'

function Workcards(props) {
    return (
        <>

            <div style={{ backgroundImage: `url(${props.data.url})` }}
                className='w-[100%] lg:w-full lg:h-[40vh] sm:h-[60vh]  h-[35vh]   md:h-[35vh] md:w-[90%]  p-1 boder-box mt-12 bg-cover '>

            </div>
        </>
    )
}

export default Workcards
