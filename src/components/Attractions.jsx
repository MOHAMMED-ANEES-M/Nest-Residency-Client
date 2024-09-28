import React from 'react';
import img from '../assets/93ecbf5f_z.jpg';
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Attractions = () => {
  return (
    <div className="px-5 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto my-10 md:my-20 max-w-7xl">
        
        {/* Text Section */}
        <div className="m-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 text-center md:text-left text-brown-700">
            Attractions
          </h1>
          <div className="m-auto md:m-0 w-full text-lg">
            <div className="flex items-center gap-3 mb-3">
              <VscDebugBreakpointLog />
              Hygienic Environment
            </div>
            <div className="flex items-center gap-3 mb-3">
              <VscDebugBreakpointLog />
              Close to MIMS Hospital, Calicut
            </div>
            <div className="flex items-center gap-3 mb-3">
              <VscDebugBreakpointLog />
              Near Lulu Mall, Calicut
            </div>
            <div className="flex items-center gap-3 mb-3">
              <VscDebugBreakpointLog />
              3 km to Railway Station
            </div>
            <div className="flex items-center gap-3 mb-3">
              <VscDebugBreakpointLog />
              2.5 km to Baby Hospital, Calicut
            </div>
            <div className="flex items-center gap-3">
              <VscDebugBreakpointLog />
              5 km to the Kozhikode Beach
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[75%] h-auto rounded-lg overflow-hidden m-auto">
          <img src={img} alt="Attraction Image" className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Attractions;