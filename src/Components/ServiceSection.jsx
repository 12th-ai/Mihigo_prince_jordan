import React from 'react';
import { Link } from 'react-scroll'; 

// Sample data for the service cards
const services = [
  {
    image: require('../assets/desktop.jpg'),
    heading: 'Web Development',
    description: 'We provide expert web development services to help you build your online presence.',
  },
  {
    image: require('../assets/mobile.jpg'),
    heading: 'Mobile App Development',
    description: 'Our mobile app development services create user-friendly and efficient apps for various platforms.',
  },
  {
    image: require('../assets/webdisign.webp'),
    heading: 'Web Design',
    description: 'We offer creative web design solutions to give your website a unique and professional look.',
  },
  {
    image: require('../assets/database.webp'),
    heading: 'Database Management',
    description: 'Our database management services ensure that your data is organized, secure, and easily accessible.',
  },
  {
    image: require('../assets/seo.webp'),
    heading: 'SEO Optimization',
    description: 'We provide SEO optimization services to increase the visibility and ranking of your website on search engines.',
  },
  {
    image: require('../assets/cloud.webp'),
    heading: 'Cloud Services',
    description: 'Our cloud services provide scalable, secure, and cost-effective solutions for your business.',
  },
];

function ServiceSection() {
  return (
    <section className="bg-gray-100 py-16 px-4 pb-20 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-xl mb-6 leading-tight uppercase font-semibold text-blue-500">
            <span>My Services</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 capitalize leading-10">
            I ensure the best services for my clients.
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.heading}
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.heading}</h3>
              <p className="text-gray-700 mb-4 font-medium text-md">{service.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
