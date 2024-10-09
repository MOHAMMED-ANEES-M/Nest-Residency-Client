import React from 'react';
import './Amenities.css';
import img from '../../assets/rooms/residential_ac_king1.jpg';
import { FaWifi, FaKey } from "react-icons/fa6";
import { IoCarSportSharp, IoFastFood } from "react-icons/io5";
import { RiServiceFill } from "react-icons/ri";
import { BiSolidCctv } from "react-icons/bi";
import Divider from '../../layouts/Divider';

const Amenities = () => {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row justify-center gap-4 gap-y-10 mt-10 sm:mt-20">      
      {/* Image Section */}
      <div className="m-5 md:w-[50%] ">
        <img src={img} alt="Amenity 1" className="rounded w-[75%] h-auto object-cover m-auto" />
      </div>

      {/* Amenities Text Section */}
      <div className="m-auto md:w-[50%]">
        <h2 className="text-3xl sm:text-[50px] mb-5 sm:mb-10 text-center md:text-left text-brown-700">Amenities</h2>
        <div className="grid grid-cols-2 justify-center text-base sm:text-lg gap-3 sm:space-y-5">
          
          <div className='flex gap-1 min-[400px]:gap-3 items-center  mt-5'>
            <FaWifi /> Free Wi-Fi
          </div>
          
          <div className='flex gap-1 min-[400px]:gap-3 items-center '>
            <FaKey /> Key Card
          </div>
          
          <div className='flex gap-1 min-[400px]:gap-3 items-center '>
            <IoCarSportSharp /> Free Parking
          </div>
          
          <div className='flex gap-1 min-[400px]:gap-3 items-center '>
            <IoFastFood /> Mini Kitchen
          </div>
          
          <div className='flex gap-1 min-[400px]:gap-3 items-center '>
            <RiServiceFill /> Room Service
          </div>
          
          <div className='flex gap-1 min-[400px]:gap-3 items-center '>
            <BiSolidCctv /> CCTV
          </div>

        </div>
      </div>

    </div>
      <Divider />
    </>
  );
};

export default Amenities;