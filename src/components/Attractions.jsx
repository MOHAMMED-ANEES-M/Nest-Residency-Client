import React from 'react'
import img from '../assets/93ecbf5f_z.jpg'
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Attractions = () => {
  return (
    <div>
      <div className='grid grid-cols-2 mx-10 mt-20'>
        <div className=''>
            <h1 className='text-[50px] my-20 text-center text-brown-700'>Attractions</h1>
            <div className='m-auto w-fit text-lg'>
                <div className='flex items-center gap-3 mb-3'><VscDebugBreakpointLog />Hygienic Environment</div>
                <div className='flex items-center gap-3 mb-3'><VscDebugBreakpointLog />Close to MIMS Hospital, Calicut</div>
                <div className='flex items-center gap-3 mb-3'><VscDebugBreakpointLog />Near Lulu Mall, Calicut</div>
                <div className='flex items-center gap-3 mb-3'><VscDebugBreakpointLog />3 km to Railway Station</div>
                <div className='flex items-center gap-3 mb-3'><VscDebugBreakpointLog />2.5 km to Baby Hospital, Calicut</div>
                <div className='flex items-center gap-3'><VscDebugBreakpointLog />5 km to the Beach</div>
            </div>
        </div>
        <div className='bg-brown-700 p-1 rounded'>
            <img src={img} alt="" className='rounded-sm'/>
        </div>
      </div>
    </div>
  )
}

export default Attractions
