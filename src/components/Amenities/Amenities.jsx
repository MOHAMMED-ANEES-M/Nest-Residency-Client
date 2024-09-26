import React from 'react';
import './Amenities.css';
import img from '../../assets/outdoor-pool.jpg'
import img1 from '../../assets/93ecbf5f_z.jpg'
import img2 from '../../assets/R0016816.jpg'
import { FaWifi } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { RiServiceFill } from "react-icons/ri";
import { BiSolidCctv } from "react-icons/bi";


const Amenities = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-16 p-5 mt-20">
      {/* First Grid Item: Image */}
      <div className="">
        <img src={img} alt="Amenity 1" className="" />
      </div>

      {/* Second Grid Item: Amenities list */}
      <div className=" rounded-lg m-auto">
        <h2 className="text-[50px] mb-10 text-center text-brown-700">Amenities</h2>
        <div className="grid grid-cols-2 justify-center text-lg space-y-5">
          <div className='flex gap-3 items-center ms-10 mt-5'><FaWifi /> Free Wi-Fi</div>
          <div className='flex gap-3 items-center ms-10'><FaKey /> Key Card</div>
          <div className='flex gap-3 items-center ms-10'><IoCarSportSharp /> Free Parking</div>
          <div className='flex gap-3 items-center ms-10'><IoFastFood /> Breakfast Included</div>
          <div className='flex gap-3 items-center ms-10'><RiServiceFill /> Room Service</div>
          <div className='flex gap-3 items-center ms-10'><BiSolidCctv /> CCTV</div>
        </div>
      </div>

      {/* Third Grid Item: Image */}
      {/* <div className="">
        <img src={img1} alt="Amenity 2" className="h-96 m-auto" />
      </div> */}

      {/* Fourth Grid Item: Image */}
      {/* <div className="">
        <img src={img2} alt="Amenity 3" className="h-96 m-auto" />
      </div> */}

    </div>
  );
};

export default Amenities;