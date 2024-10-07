import React from 'react'
import img1 from '../assets/gallery/nest_1.jpg'
import img2 from '../assets/gallery/nest_2.jpg'
import img3 from '../assets/gallery/nest_3.jpg'
import img4 from '../assets/gallery/nest_4.jpg'
import img5 from '../assets/gallery/nest_5.jpg'
import img6 from '../assets/gallery/nest_6.jpg'
import { Link } from 'react-router-dom'

const Gallery = () => {

    const images = [ img1, img2, img3, img4, img5, img6 ]

  return (
    <div className='mt-20'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl mb-10 text-center text-brown-700'>Our Spaces</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-1 mx-2 min-[400px]:mx-5 sm:mx-20'>
        {images.map((img)=>(
            <img src={img} alt="" className='w-full h-full object-cover '/>
        ))}
      </div>
      <div className="w-fit m-auto">
        <Link to='/gallery'><button className='bg-brown-700 hover:bg-green-800 rounded text-white p-2 min-[400px]:p-3 mt-5 '>View Gallery</button></Link>
      </div>
    </div>
  )
}

export default Gallery
