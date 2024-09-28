import React, { useEffect } from 'react';
import img from '../assets/R0016822.jpg'
import AboutCard from '../layouts/AboutCard';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const datas = [
        {
            title: 'Our Vision',
            text: 'To be recognized as the most preferred hospitality destination in Calicut, providing exceptional service, comfort, and convenience for our guests. We aim to create a home away from home, ensuring a clean, safe, and welcoming environment for everyone.'
        },
        {
            title: 'Our Mission',
            text: 'At Nest Residency, we are committed to delivering high-quality accommodations that combine comfort with value. Our mission is to offer guests a clean, hygienic, and serene place to stay, with easy access to essential locations such as MIMS Hospital, Lulu Mall, and other attractions in Calicut.'
        },
        {
            title: 'Our Values',
            text: 'At Nest Residency, we prioritize customer satisfaction by providing quality service and a clean, safe environment. Conveniently located near key attractions, we ensure easy access to essential services. Our focus is on building lasting relationships with guests through trust and reliability.'
        },
        {
            title: 'Our Location',
            text: 'Nest Residency is conveniently located near MIMS Hospital, Lulu Mall, and other major attractions in Calicut. Whether you are here for medical reasons, business, or leisure, our central location ensures that you are never far from where you need to be.'
        },
    ]
  return (
    <div className="mt-10 max-w-7xl mx-auto px-4 py-16">
      <section className="text-center mt-5 mb-12">
        <h1 className="text-[40px] mb-5 text-center text-brown-700">
          Welcome to Nest Residency, Calicut
        </h1>
        <p className="text-lg mb-5 max-w-[70%] m-auto">
          Discover Nest Residency, a sanctuary of comfort and hygiene located in the heart of Calicut. 
          Whether you're visiting for medical care, business, or leisure, we're here to provide a restful stay near key landmarks such as 
          MIMS Hospital, Lulu Mall, and Calicut Railway Station.
        </p>
        <button className='bg-brown-700 hover:bg-green-800 rounded text-white p-3 mb-10'>360 Virtual Tour</button>
        <div className='bg-brown-700 rounded p-1 w-fit max-w-[80%] m-auto'>
         <img src={img} alt="" className=' rounded-sm'/>
        </div>
      </section>

      <div className='grid grid-cols-4 gap-5 mt-20'>
      {datas?.map((data)=>(
        <AboutCard about={data}/>
      ))}
      </div>

      <section className="mb-12 mt-20">
        <h2 className="text-[30px] mb-5 text-center text-brown-700">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed text-center px-20">
          At Nest Residency, we understand the importance of comfort and convenience. With proximity to key 
          locations like MIMS Hospital and Lulu Mall, and being just 3 km from the railway station, our hotel is 
          perfect for both short and extended stays. Our rooms are designed to provide a restful and hygienic 
          experience, and our friendly staff is here to cater to your needs 24/7.
        </p>
      </section>

      <section className="text-center mt-12">
        <h3 className="text-2xl text-brown-700 mb-6">
          Experience a Comfortable Stay at Nest Residency
        </h3>
        <p className="text-lg  mb-8">
          Book your stay with us today and enjoy modern amenities, exceptional service, 
          and a convenient location. We look forward to hosting you!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;