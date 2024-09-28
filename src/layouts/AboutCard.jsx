import React from 'react'

const AboutCard = ({about}) => {
  return (
    <div className='bg-brown-700  text-white p-1 rounded-lg shadow'>
    <div className='bg-green-800 p-5 h-full rounded-md'>
      <div>
        <h3 className='text-center text-2xl font-semibold  '>{about.title}</h3>
      </div>
      <div>
        <p className='text-center mt-5'>{about.text}</p>
      </div>
      </div>
    </div>
  )
}

export default AboutCard
