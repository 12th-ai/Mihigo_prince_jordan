import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link } from 'react-scroll';

const faqs = [
  {
    question: "Who is Mihigo Prince?",
    answer: "Mihigo Prince is a passionate software developer who specializes in creating scalable applications and systems. With a strong background in tech, he is driven by a deep interest in both the tech and art industries, with aspirations of becoming a top fashion designer. Mihigo is also known for his dedication to personal growth and his respect for those who helped shape his career.",
    type: "life"
  },
  {
    question: "What are your hobbies and interests?",
    answer: "Despite being a software developer, Mihigo Prince has a deep passion for the art industry, particularly design and fashion. Growing up with the ambition of becoming a top fashion designer, Mihigo still loves to explore artistic expression. In terms of sports, Mihigo enjoys football. He also deeply values his family, especially his mother, Nyiransengiyumva Florence, and his aunt, Mihigo Olive, whom he regards as his 'black queens' and has the utmost respect for them, considering their immense support in his career.",
    type: "life"
  },
  {
    question: "How do you balance your personal life and career?",
    answer: "Mihigo believes in the importance of work-life balance. While his career is important to him, he values his personal time with family and friends. He also makes time to pursue his hobbies, including design and sports, to ensure that he remains creative and fulfilled in all aspects of his life.",
    type: "life"
  },
  {
    question: "How do you balance your personal life and career?",
    answer: "Mihigo believes in the importance of work-life balance. While his career is important to him, he values his personal time with family and friends. He also makes time to pursue his hobbies, including design and sports, to ensure that he remains creative and fulfilled in all aspects of his life.",
    type: "life"
  },
  { type: 'life',
     question: 'What do you prefer to do in your free time?',
      answer: 'I enjoy drinking coffee and eating burgers at my favorite cafe. I also love visiting restaurants and always at sunday  I pray at the local church. During my teenage years, I used to be a singer in a church  choir.' },

  {
    question: "How did your career in software development begin?",
    answer: "Mihigo’s career in software development began even before completing high school. His interest in building scalable applications and systems started at an early age, which he pursued throughout his academic years. By the time he finished high school, he had built a strong portfolio showcasing his skills in application development and system architecture, which led to his first year of professional experience.",
    type: "career"
  },
  {
    question: "What motivates you as a software developer?",
    answer: "Mihigo Prince is motivated by the challenge of creating scalable, efficient systems that can make a meaningful impact. His drive stems from a desire to push boundaries in technology while balancing his passion for creativity and design. His goal is to create products that not only function well but also offer beautiful, user-centric designs.",
    type: "career"
  },
  {
    question: "What are your future goals in your career?",
    answer: "Mihigo aims to continue growing as a software developer and expand his skills into new areas such as AI and machine learning. He is also eager to explore the intersection of technology and design, especially in the fashion industry, which he has always had a passion for. His long-term goal is to make significant contributions to both tech and art sectors.",
    type: "career"
  },
  {
    question: "Who are the people you are most grateful for in your career development?",
    answer: "Mihigo Prince owes much of his career development to his family and close friends. He is especially thankful to his mother, Nyiransengiyumva Florence, and his aunt, Mihigo Olive, for their unwavering support. Additionally, Mihigo appreciates the guidance and friendship of his colleagues and friends such as Mugabo Hussein, Kibongo Simon, and Peter Charles, who have played pivotal roles in his journey.",
    type: "career"
  },

    { type: 'career', question: 'Who are some developers I admire?', answer: 'I admire several developers, including: \n - Mugabo hussien \n - kibongo simon peter \n - Niyonkuru elisa \n -Mwungeri Ngabo Severin   \n - Nkaka jean damour \n - NTiranta Jean claude \n - Charles Ndayisaba \n - Mazimpaka yves \n   - Elvis Iraguha \n - Manirarora JMv \n - SABATO Hakizimana  \n - Shema Daniel \n - fideli  \n - Florant nsengiyumva \n - Didas M Daniel and all over  developers who  have significantly impacted on my carreer and in tech industry in general much appreciate for them.' },

];
function FAQSection() {
  const [openLifeIndex, setOpenLifeIndex] = useState(null);
  const [openCareerIndex, setOpenCareerIndex] = useState(null);

  const toggleLifeAnswer = (index) => {
    setOpenLifeIndex(openLifeIndex === index ? null : index);
  };

  const toggleCareerAnswer = (index) => {
    setOpenCareerIndex(openCareerIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#e3e8ee] capitalize py-16 px-4 lg:px-8">
      <div className="flex items-center justify-center lg:justify-center space-x-2 text-xl mb-6 leading-tight uppercase font-semibold text-blue-500">
        <FiChevronDown className="w-6 h-6" />
        <span>Frequently Asked Questions</span>
      </div>
      <h3 className="text-2xl font-semibold mb-6 capitalize text-center text-gray-700">
        Answers to your most common queries
      </h3>
      <div className="container mx-auto flex flex-col lg:flex-row items-center md:space-x-8 space-y-8 lg:space-y-0">
        
        {/* Left Side (Life) */}
        <div className="lg:w-1/2 flex flex-col">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Life</h4>
          <div className="space-y-2">
            {faqs.filter(faq => faq.type === 'life').map((faq, index) => (
              <div key={index} className="">
                <button
                  onClick={() => toggleLifeAnswer(index)}
                  className="flex items-center justify-between h-14 w-full text-left py-2 px-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:bg-gray-50"
                >
                  <span className="text-sm font-semibold text-gray-700 capitalize">{faq.question}</span>
                  {openLifeIndex === index ? (
                    <FiChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <FiChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openLifeIndex === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  {openLifeIndex === index && (
                    <div className="mt-2 px-4 text-gray-100 p-4 bg-blue-400 capitalize rounded-md transition-shadow leading-10">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Career) */}
        <div className="  lg:w-1/2 flex flex-col ">
          <h4 className="text-lg font-semibold mb-4 text-gray-700">Career</h4>
          <div className="space-y-2">
            {faqs.filter(faq => faq.type === 'career').map((faq, index) => (
              <div key={index} className="">
                <button
                  onClick={() => toggleCareerAnswer(index)}
                  className="flex items-center justify-between h-14 text-sm w-full text-left py-2 px-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:bg-gray-50"
                >
                  <span className="text-sm font-semibold text-gray-700 capitalize">{faq.question}</span>
                  {openCareerIndex === index ? (
                    <FiChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <FiChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openCareerIndex === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  {openCareerIndex === index && (
                    <div className="mt-2 px-4 text-gray-100 p-4 bg-blue-400 capitalize rounded-md transition-shadow leading-10">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


export default FAQSection;
