import React from 'react';
import { FiFacebook, FiInstagram,FiX,FiGithub, FiChevronRight } from 'react-icons/fi';
import { FaLinkedin, } from "react-icons/fa"; // Font Awesome for LinkedIn
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#002244] text-gray-200 py-16 px-4 lg:px-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Section 1: Logo, Description, and Social Media */}
        <div>
        <h1 className='text-2xl font-bold capitalize text-white'>mihigo prince jordan </h1>
        <p className="mb-5 mt-6 font-medium text-gray-200 capitalize leading-8">
  Thank you for visiting My page! I appreciate your time and interest. Feel free to explore and reach out if you have any questions.
</p>

        
        </div>

        {/* Section 2: Links with Icons */}
        <div className='  md:ml-20'>
          <h4 className="font-bold text-2xl mb-4 capitalize">Quick Links</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 hover:scale-105 transform transition-transform">
      
              <FiChevronRight className="text-gray-300 w-6" />
              <Link to='/' className="hover:text-white  font-semibold">About Me</Link>
            </li>
            <li className="flex items-center space-x-2 hover:scale-105 transform transition-transform">
      
      <FiChevronRight className="text-gray-300 w-6" />
      <Link to='/' className="hover:text-white  font-semibold">Services</Link>
    </li>

    <li className="flex items-center space-x-2 hover:scale-105 transform transition-transform">
      
      <FiChevronRight className="text-gray-300 w-6" />
      <Link to='/' className="hover:text-white  font-semibold">Contact Me</Link>
    </li>

 

          </ul>
        </div>
         {/* Section 2: Links with Icons */}
         <div >
          <h4 className="font-bold text-2xl mb-4 capitalize">Resources</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 hover:scale-105 transform transition-transform">
      
              <FiChevronRight className="text-gray-300 w-6" />
              <Link to='/' className="hover:text-white  font-semibold">Portifolio</Link>
            </li>
            <li className="flex items-center space-x-2 hover:scale-105 transform transition-transform">
      
      <FiChevronRight className="text-gray-300 w-6" />
      <Link to='/' className="hover:text-white  font-semibold">Services</Link>
    </li>

    <li className="flex items-center space-x-2 hover:scale-105 transform transition-transform">
      
      <FiChevronRight className="text-gray-300 w-6" />
      <Link to='/' className="hover:text-white  font-semibold">Contact Me</Link>
    </li>

 

          </ul>
        </div>


        

        {/* Section 4: Contact Form */}
        <div>
  <h4 className="font-bold text-2xl mb-4 capitalize">Get in Touch</h4>
  <p className="mb-4 text-gray-200">Follow Me on My social media platforms to stay updated and connect with Me!</p>
  <div className="flex space-x-4">


  <a
  href="https://github.com/12th-ai"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-blue-500 p-3 rounded-full"
>
  <FiGithub className="text-white w-6 h-6" />
</a>
    <a
  href="https://x.com/JordanMihi12912"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-blue-500 p-3 rounded-full"
>
  <FiX className="text-white w-6 h-6" />
</a>

    {/* Instagram Icon with Link */}
    <a
      href="https://www.instagram.com/mihigojordan/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="border-2 border-blue-500 p-3 rounded-full"
    >
      <FiInstagram className="text-white w-6 h-6" />
    </a>
      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/mihigo-jordan-0a2455331/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-blue-500 p-3 rounded-full"
      >
        <FaLinkedin className="text-white w-6 h-6" />
      </a>
  </div>
</div>


      </div>
    </footer>
  );
}

export default Footer;