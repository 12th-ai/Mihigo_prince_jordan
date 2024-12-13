import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

function AboutUs() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#002244] rounded-lg">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Left Side (Image) */}
        <div className="lg:w-1/2 flex items-center justify-center  h-[650px]">
          <img 
            src={require('../assets/image2.jpg')} // replace with actual image
            alt="About Us"
            className="w-full h-[94%] object-contain rounded-lg shadow-md"
          />
        </div>

      {/* Right Side (Content) */}
<div className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
  <div className="flex items-center space-x-2 text-blue-500 mb-6">
    <FiChevronRight className="w-6 h-6" />
    <span className="text-xl font-semibold uppercase">About Me</span>
  </div>

  <h3 className="text-xl lg:text-5lg font-semibold w-4/5 leading-tight text-maincolor text-gray-600 mb-9 capitalize">
    Mihigo Jordan Prince: Passionate Software Developer
  </h3>
  
  <h3 className="text-xl leading-10 font-semibold w-4/5 text-gray-400 mb-9 capitalize">
    I specialize in creating innovative and efficient software solutions that deliver value and enhance user experience.
  </h3>
  
  <p className="text-lg text-gray-400 mb-6 w-4/5">
    As a dedicated software developer, I have honed my skills in various programming languages and technologies to build dynamic and user-centric applications. My passion lies in solving complex problems and delivering quality code that drives results. I believe in continuous learning and strive to stay ahead of industry trends to create cutting-edge software solutions.
  </p>
 {/* Flex Container with Dashes */}
 <div className="flex flex-wrap gap-4 mb-10 mt-8 w-4/5">
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
            <div className="flex-1 border-t-2 border-dashed border-blue-400 w-9  " style={{ height: '5px' }}></div>
           
          </div>

          {/* Flex Container with Circular Images and Text */}
          <div className="flex flex-wrap gap-8 mt-4">
            <div className="flex items-center space-x-4">
              <img 
                src={require('../assets/iriba.jpg')} // replace with actual image
                alt="Team Member"
                className="w-24 h-20 rounded-md object-cover shadow-md"
              />
              <div className='leading-tight'>
                <h4 className="text-lg font-semibold leading-tight mb-6 text-white capitalize">Iriba forge </h4>
                <p className="text-gray-400 font-semibold ">CEO</p>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;