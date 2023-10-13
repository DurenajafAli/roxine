import React from 'react'
import Sec2 from '../Sec2'
export default function Expert() {
    return (
        <div>
            <div className="grid grid-cols-1 place-items-center gap-10   sm:grid-cols-2 sm:gap-10 sm:place-items-center md:grid-cols-2 lg:grid-cols-3  lg:gap-20  md:px-8  xl:px-20 xl:gap-8 mt-10">
            
                <Sec2 data={{ id: 1 }} />
                <Sec2 data={{ id: 2 }} />
                <Sec2 data={{ id: 2 }} />
                <Sec2 data={{ id: 2 }} />
                <Sec2 data={{ id: 2 }} />
                <Sec2 data={{ id: 2 }} />

            </div>
        </div>
    )
}
