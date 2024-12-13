import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

// Skills data
const skills = {
  webDesign: [
    { name: 'HTML', level: 60 },
    { name: 'CSS', level: 75 },
    { name: 'SCSS', level: 60 },
    { name: 'Bootstrap', level: 45 },
    { name: 'Tailwind', level: 47 }, 
    { name: 'WordPress', level: 58 },

  ],
  webDevelopment: [
    { name: 'Node.js', level: 40 },
    { name: 'JavaScript', level: 65 },
    { name: 'React', level: 55 },
    { name: 'Vue', level: 40 },
    { name: 'Express', level: 65 },
    { name: 'NestJS', level: 40 },
    { name: 'Php', level: 60 },
  ],
  mobileAndDatabase: [
  
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 45 },
    { name: 'PostgreSQL', level: 30 },
    { name: 'Firebase', level: 20 },

    { name: 'Redis', level: 13 },
    { name: 'React Native', level: 35 },
 
    
  ],
   mobileAndDatabase: [
  
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 45 },
    { name: 'PostgreSQL', level: 30 },
    { name: 'Firebase', level: 20 },

    { name: 'Redis', level: 13 },
    { name: 'React Native', level: 35 },
 
    
  ],
};

function WhyChooseUs() {
  return (
    <section className="relative bg-[#002244] py-16 px-4 lg:px-8 rounded-lg">
      {/* Section Header */}
      <div className="flex items-center justify-center lg:justify-center space-x-2 text-xl mb-6 leading-tight uppercase font-semibold text-blue-500">
        <FiChevronRight className="w-6 h-6" />
        <span>WHY choose me</span>
      </div>

      <p className="text-base lg:text-md font-medium text-gray-400  w-[70%] m-auto leading-normal   text-center mb-10">
  With a focus on innovative solutions and a commitment to excellence, I am dedicated to delivering exceptional web and mobile applications that meet your unique needs. My expertise lies in crafting user-centered designs that are not only visually appealing but also highly functional, ensuring smooth performance across all devices. Whether you're starting a new project or enhancing an existing one, I bring a wealth of experience and a passion for building solutions that stand out. Explore my skills below to see how we can create something amazing together!
</p>

      {/* Skills Section */}
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {/* Web Design Skills */}
        <div className="w-full sm:w-[45%] lg:w-[30%] p-4">
          <div className="bg-white p-6 rounded-lg shadow-md h-auto flex flex-col justify-between">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Web Design</h4>
            <div className="space-y-4">
              {skills.webDesign.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-gray-500">{skill.name}</span>
                    <span className="text-lg font-semibold text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Web Development Skills */}
        <div className="w-full sm:w-[45%] lg:w-[30%] p-4">
          <div className="bg-white p-6 rounded-lg shadow-md h-auto flex flex-col justify-between">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Web Development</h4>
            <div className="space-y-4">
              {skills.webDevelopment.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-gray-500">{skill.name}</span>
                    <span className="text-lg font-semibold text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile App & Database Skills */}
        <div className="w-full sm:w-[45%] lg:w-[30%] p-4">
          <div className="bg-white p-6 rounded-lg shadow-md h-auto flex flex-col justify-between">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Mobile App & Database</h4>
            <div className="space-y-4">
              {skills.mobileAndDatabase.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-gray-500">{skill.name}</span>
                    <span className="text-lg font-semibold text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
