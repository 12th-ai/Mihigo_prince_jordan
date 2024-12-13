import React from 'react';
import { Link } from 'react-scroll';  

function HeroSection() {
  return (
 <div className="container mx-auto pt-24 pb-10 flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Left Side */}
        <div className="lg:w-1/2 leading-tight flex flex-col justify-center items-center lg:items-start p-6 min-h-[30px] lg:min-h-[40px]">
          <div className="flex items-center space-x-2 text-lg lg:text-xl mb-4 lg:mb-6 leading-tight uppercase font-semibold text-blue-500">
            <span>Welcome to my world</span>
          </div>
          <h1 className="text-3xl lg:text-5xl leading-snug lg:leading-relaxed capitalize font-bold text-gray-800 mt-2">
            Mihigo Prince Jordan <br /> Software Developer
          </h1>
          <p className="text-base lg:text-lg font-medium mb-5 lg:mb-7 mt-4 lg:mt-8 text-gray-400">
  I specialize in creating cutting-edge web and mobile applications tailored to your needs, with a strong emphasis on seamless user experiences, high performance, and scalability. With a passion for innovation and a keen eye for detail, I focus on building intuitive, responsive designs that not only look great but also function flawlessly across all devices. Whether you're looking to launch a new product or improve an existing one, let's collaborate and create something extraordinary together!
</p>

          <div className="flex space-x-3 lg:space-x-4 mt-4 lg:mt-6">
            {/* Contact Button */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-blue-500 cursor-pointer text-white font-semibold capitalize px-4 lg:px-6 py-2 lg:py-3 flex items-center space-x-2 rounded-md hover:bg-primaryColor transition duration-300"
            >
              <span>Contact Me</span>
            </Link>
          </div>
        </div>

        {/* Right Side (Image or Optional Portfolio Items) */}
        <div className=" w-[95%] lg:w-1/2  flex items-center justify-center">
          <img 
            src={require('../assets/image_1.png')}
            alt="Mihigo Prince Jordan" 
            className="w-full h-[280px] lg:h-[640px] object-cover rounded-lg" 
          />
        </div>
      </div>

  );
}

export default HeroSection;
