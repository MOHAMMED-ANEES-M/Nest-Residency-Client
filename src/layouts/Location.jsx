import React from 'react'

const Location = () => {
  return (
    <div className='my-20 p-2 '>
      {/* <div className='w-[75%] m-auto bg-green-800 text-white p-2'>
        <h1 className='text-2xl mt-3 text-center font-semibold'>How to Get Here</h1>
        <p className='text-center mt-3'>Near M.I.M.S Hospital, Govindapuram, Kozhikode, Kerala 673016</p>
      </div> */}
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15652.807854682125!2d75.7992019!3d11.2465484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6590008d0a8db%3A0x205ba9814d03457b!2sNEST%20RESIDENCY!5e0!3m2!1sen!2sin!4v1727330634945!5m2!1sen!2sin" 
       className='w-[90%] sm:w-[75%] m-auto h-[300px] sm:h-[400px] md:h-[500px] rounded'
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade"> 
      </iframe>
    </div>
  )
}

export default Location