import React from 'react'
import img from '../assets/don2.webp'
import img1 from '../assets/R0016822.jpg'
import { Link } from 'react-router-dom'

const Gallery = () => {

    const images = [ img, img1, img, img1, img, img1 ]

  return (
    <div className='mt-20'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl mb-8 text-center text-brown-700'>Our Spaces</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2 mx-5 sm:mx-10'>
        {images.map((img)=>(
            <img src={img} alt="" className='w-full h-full object-cover p-2  shadow'/>
        ))}
      </div>
      <div className="w-fit m-auto">
        <Link to='/gallery'><button className='bg-brown-700 hover:bg-green-800 rounded text-white p-2 min-[400px]:p-3 mt-5 '>View Gallery</button></Link>
      </div>
    </div>
  )
}

export default Gallery
