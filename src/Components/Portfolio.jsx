import React, { useState } from 'react';

// Sample project data
const projects = [
  {
    image: require('../assets/scr1.png'),
    title: 'Responsive Website',
    description: 'A fully responsive website built using HTML and CSS.',
    category: 'HTML and CSS',
    // github: 'https://github.com/user/responsive-website',
    hosted: 'https://stellular-centaur-3065ef.netlify.app/#',
    status: 'Completed',
    client: false,
  },

  {
    image: require('../assets/scr3.png'),
    title: 'E-commerce Platform',
    description: 'A fully responsive website built using HTML and CSS.',
    category: 'HTML and CSS',
    // github: 'https://github.com/user/ecommerce-platform',
    hosted: 'https://app.netlify.com/sites/warm-creponne-e5b145/',
    status: 'Completed',
    client: false,
  },
  {
    image: require('../assets/scr4.png'),
    title: 'Vue Blog App',
    description: 'A fully responsive website built using HTML and CSS.',
    category: 'HTML and CSS',
    // github: 'https://github.com/user/vue-blog-app',
    hosted: 'https://app.netlify.com/sites/stalwart-salamander-06871f/',
    status: 'Completed',
    client: false,
  },





  {
    image: require('../assets/scr6.png'),
    title: 'Abyride ',
    description: 'this is business portfolio of abyride company ltd which offer good transportattion services based on USA',
    category: 'Static Website',
    hosted: 'https://abyride.com/',
    status: 'Completed',
    client: true,
  },
  {
    image: require('../assets/scr7.png'),
    title: 'Frexi Ltd ',
    description: 'THis is business portfolio of Frexi ltd which offers tour and travel and insurance service and high customer services it is based on kigali city  ',
    category: 'Static Website',

    hosted: 'https://frexi.rw/',
    status: 'Completed',
    client: true,
  },
  {
    image: require('../assets/scr8.jpg'),
    title: 'Coffe King',
    description: 'is coffe king website still in developemnt',
    category: 'Static Website',
    github: 'https://github.com/12th-ai/coffe_shop',
    
    status: 'In Progress',
    client: true,
  },



  {
    image: require('../assets/scr11.png'),
    title: 'Abyride Dispatch system',
    description: 'is staff booking management system of abyride company ',
    category: 'Dynamic Website',
    status: 'In progress',
    client: true,
  },
  {
    image: require('../assets/scr12.png'),
    title: 'Claim Insta',
    description: 'this is claim and insurance amanagement system is still in development',
    category: 'Dynamic Website',
 
    status: 'In progress',
    client: true,
  },
  {
    image: require('../assets/scr13.png'),
    title: 'Inventory System',
    description: 'is cimerwa invetory management system clone ',
    category: 'Dynamic Website',
    github: 'https://github.com/12th-ai/invoices',

    status: 'Completed',
    client: true,
  },




  {
    image: require('../assets/scr16.jpg'),
    title: 'Recipe application',
    description: 'recipe application generator based on ingredients you have selected or typed in serach  ',
    category: 'Mobile Application',
    status: 'Completed',
    client: true,
  },
  {
    image: require('../assets/scr18.jpg'),
    title: 'Claim Insta',
    description: 'abyride mobile application of booking ride and more riding services comming soon ',
    category:   'Mobile Application',
 
    status: 'In progress',
    client: true,
  },
  {
    image: require('../assets/scr19.jpg'),
    title: 'Inventory System',
    description: 'pleant diseases and pest detection and other Agriculture services comming soon  ',
    category:   'Mobile Application',
    github: 'https://github.com/12th-ai/invoices',

    status: 'in progress',
    client: true,
  },
 
];

// Categories for filtering
const categories = [
  'All',
  'HTML and CSS',

  'Static Website',
  'Dynamic Website',
  'Mobile Application',

];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects by category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 capitalize leading-10">
            My Portfolio
          </h2>
          <p className="text-gray-600 mt-4">
            Explore my projects categorized by technology and features.
          </p>
        </div>

        {/* Category Navigation */}
        <div className=" grid grid-cols-2 p-4  text-sm gap-4  md:flex justify-center space-x-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md font-semibold transition duration-300 ${
                selectedCategory === category
                  ? ' text-white bg-blue-500 '
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className=" grid  sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 font-medium text-sm">
                {project.description}
              </p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-700">Status: </span>
                <span className="text-sm text-gray-600">{project.status}</span>
              </div>
              <div className="flex space-x-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.hosted && (
                  <a
                    href={project.hosted}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
              <div className="mt-4">
                <span className="text-sm font-semibold text-gray-700">
                  Client Work:
                </span>{' '}
                <span className="text-sm text-gray-600">
                  {project.client ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          ))}
        </div>
       
      </div>
      <h1 className='text-center mt-10 capitalize text-lg text-primary '> for  more project visit my github account or contact me </h1>
    </section>
  );
}

export default Portfolio;
