import React from 'react'
import Sec7 from '../Sec7'
export default function SecX() {
  return (
      <>
      <div className="sec7  border-box w-full grid grid-cols-1 place-items-center text-center items-center  md:grid-cols-2 md:w-full sm:w-full 
            lg:grid-cols-4     mt-10">
              <Sec7 data={{ number: "505", title: "TOTAL PROJECTS" }} />
              <Sec7 data={{ number: "220", title: "SATISFIED CLIENTS" }} />
              <Sec7 data={{ number: "720", title: "AWARDS WON" }} />
              <Sec7 data={{ number: "707", title: "MILESTONES MET" }} />
          </div>
      </>
  )
}
