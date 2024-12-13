import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import swal from 'sweetalert';


const ContactPage = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2c3ioua', 'template_rhbtuxa', e.target, 'gfJTjJ_JJ6pA0sNlO')
      .then((result) => {
        swal({
          title: "Success!",
          text: "Thank you for reaching out! Your message has been successfully sent, and we truly appreciate your patience. We'll get back to you as soon as possible!",
          icon: "success",
          button: "Okay",
          customClass: {
            content: "text-center" // Adding a class to center the text
          }
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        swal({
          title: "Error!",
          text: "There was an error sending your message. Please try again later.",
          icon: "error",
          button: "Close",
        });
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="w-[100%] mx-auto p-5 md:p-20">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-2 text-lg text-gray-600">Get in touch with Me for any queries or support.</p>
      </header>

      {/* Flex Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="bg-white p-4 rounded-md shadow-md">
            {/* Icon Containers */}
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 p-2 rounded-md bg-blue-100 text-blue-500 mr-3">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Call Me</h2>
                <p className="text-gray-600">+250 791813289</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 p-2 rounded-md bg-blue-100 text-blue-500 mr-3">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Email Me</h2>
                <p className="text-gray-600">mihigojordan8@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 rounded-md bg-blue-100 text-blue-500 mr-3">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Visit Me</h2>
                <p className="text-gray-600">Kigali, Rwanda Norsken rwanda</p>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5159553475164!2d30.056990474804874!3d-1.9465655980357768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4240db7b3f5%3A0x5256fd511623ef15!2sMakuza%20Peace%20Plaza!5e0!3m2!1sen!2srw!4v1731262198919!5m2!1sen!2sr
                "
                frameBorder="0"
                allowFullScreen
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-md font-semibold mb-4">Got any questions? Ask here</h2>
            <h3 className="text-4xl font-bold mb-8 mt-5">Send us a message</h3>
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 border border-blue-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-blue-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message"
                  className="w-full p-3 border border-blue-300 rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-500 text-white text-xl font-bold rounded-md border border-blue-500"
              >
                Send
              </button>
            </form>
          </div>

  
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
