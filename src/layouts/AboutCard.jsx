import React from 'react'

const AboutCard = ({about}) => {
  return (
    <div className=' text-white p-1 rounded-lg shadow'>
      <div className='bg-gradient-to-br from-green-800 to-green-950 p-5 h-full rounded-md'>
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
