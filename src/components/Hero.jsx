import React from 'react'
import img from '../assets/R0016822.jpg'

const Hero = () => {
  return (
    <>
    <div className='py-20 hero'>
      <h2 className='text-2xl font-semibold text-center mb-3 opacity-75'>Best Hotel Rooms in Calicut</h2>
      <h1 className='text-3xl font-bold text-center mb-5 text-brown-700'>Nest Residency</h1>
      <p className='text-center mx-60'>Discover Nest Residency, the best hotel to stay in Calicut. Enjoy hygienic accommodations near MIMS Hospital, Lulu Mall, and the railway station, just 3 km from the beach.
         Experience comfort and convenience during your stay! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint fugiat, quam ratione, neque animi nesciunt cupiditate autem provident impedit veniam asperiores voluptates molestias eum distinctio veritatis vel. Quae, aliquid?</p>
    </div>
    <div className='bg-green-800 pb-20 pt-10 px-10'>
        <h1 className='text-white text-center text-3xl font-semibold pb-20'>Rooms</h1>
        <div className=' grid grid-cols-3 gap-10 justify-center'>
            <div>
                <img src={img} alt="" />   
                <p className='text-white text-center text-lg font-semibold pt-10'>Suite Room</p> 
            </div>
            <div>
                <img src={img} alt="" />   
                <p className='text-white text-center text-lg font-semibold pt-10'>Delux Room</p> 
            </div>
            <div>
                <img src={img} alt="" />   
                <p className='text-white text-center text-lg font-semibold pt-10'>King Room</p> 
            </div>
        </div>
            
    </div>
    </>
  )
}

export default Hero
