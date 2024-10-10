import React, { useEffect, useState } from 'react';

const ContactForm = () => {

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const accessKey = process.env.REACT_APP_ACCESS_KEY; 
  const web3formsApiUrl = process.env.REACT_APP_WEB3FORMS_API_URL;

  const handleInputChange = (e) => {
    setContactForm({ ...contactForm, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (contactForm.name === '' || contactForm.email === '' || contactForm.subject === '' || contactForm.message === '') {
      return setFormStatus('All fields are required.');
    }
    setFormStatus('Sending...');

    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch(web3formsApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus('Message sent successfully!');
        setContactForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setFormStatus('Error sending message. Please try again.');
    }
  };

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setFormStatus('');
    }, 10 * 1000); 

    return () => clearInterval(statusInterval); 
  }, [formStatus]);

  return (
    <div className="p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl text-[#912501] mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Your Name"
            value={contactForm.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Your Email"
            value={contactForm.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-lg font-medium">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Your Subject"
            value={contactForm.subject}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message"
            rows="2"
            name="message"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Your Message"
            value={contactForm.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-[#912501] text-white py-3 rounded hover:bg-green-900">
          Send Message
        </button>
        {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
      </form>
    </div>
  );
};

export default ContactForm;