import React, { useEffect } from 'react';
import img from '../assets/rooms/residential_ac_twin1.jpg';
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
    ];

    return (
        <div className="mt-10 max-w-7xl mx-auto px-4 py-16">
            {/* Welcome Section */}
            <section className="text-center mt-5 mb-12">
                <h1 className="text-3xl sm:text-4xl mb-5 sm:mb-10 text-center text-[#912501]">
                    Welcome to Nest Residency, Calicut
                </h1>
                <p className="text-lg mb-5 max-w-[90%] sm:max-w-[70%] m-auto">
                    Discover Nest Residency, your premier hotel in Calicut, where comfort meets hygiene. Conveniently located near MIMS Hospital, Lulu Mall, and the Calicut Railway Station, our hotel is the ideal choice for visitors seeking quality accommodation.
                    Experience exceptional service and relaxation in a welcoming atmosphere that caters to all your needs. Choose Nest Residency for your next visit and enjoy the best that Calicut has to offer.
                </p>
                <button className="bg-[#912501] hover:bg-green-800 rounded text-white p-3 mb-10">360 Virtual Tour</button>
                <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto h-auto">
                    <img src={img} alt="Nest Residency" className="rounded-lg w-full h-fit"/>
                </div>
            </section>

            {/* Cards Section */}
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 px-4">
                {datas?.map((data, index) => (
                    <AboutCard key={index} about={data} />
                ))}
            </div>

            {/* Why Choose Us Section */}
            <section className="mb-12 mt-20 px-4">
                <h2 className="text-[30px] mb-5 text-center text-[#912501]">Why Choose Us?</h2>
                <p className="text-lg leading-relaxed text-center max-w-5xl mx-auto">
                    At Nest Residency, we understand the importance of comfort and convenience. With proximity to key 
                    locations like MIMS Hospital and Lulu Mall, and being just 3 km from the railway station, our hotel is 
                    perfect for both short and extended stays. Our rooms are designed to provide a restful and hygienic 
                    experience, and our friendly staff is here to cater to your needs 24/7.
                </p>
            </section>

            {/* Experience Section */}
            <section className="text-center mt-12 px-4">
                <h3 className="text-2xl text-[#912501] mb-6">
                    Experience a Comfortable Stay at Nest Residency
                </h3>
                <p className="text-lg mb-8 max-w-5xl mx-auto">
                    Book your stay with us today to enjoy exceptional service and a prime location in Calicut.
                    We look forward to welcoming you!
                </p>
            </section>
        </div>
    );
};

export default AboutPage;