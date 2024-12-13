import { useState } from 'react';
import { Link } from 'react-scroll';  // Importing Link from react-scroll
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi'; // Icons from react-icons

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar bg-white text-black p-2 fixed w-full top-0 transition-all duration-300`}>
      {/* Logo and other parts of navbar */}

      <nav className="container mx-auto p-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ">
          <h1 className='text-2xl font-bold capitalize text-primaryColor'>mihigo prince jordan</h1>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? (
              <FiX className="w-8 h-8" />
            ) : (
              <FiMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Main Menu */}
        <ul
          className={`flex-col lg:flex-row lg:flex lg:space-x-6 absolute lg:relative lg:bg-transparent bg-white w-full lg:w-auto left-0 top-16 lg:top-0 lg:items-center transition-transform duration-300 ease-in-out ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <li>
            <Link
              to="heroSection"  // Scroll to Hero Section
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-lg font-semibold capitalize text-gray-700 hover:text-[rgb(98,89,202)] cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="aboutUs"  // Scroll to About Section
              smooth={true}
              duration={500}
              className="block cursor-pointer px-4 py-2 text-lg font-semibold capitalize text-gray-700 hover:text-primaryColor"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"  // Scroll to Services Section
              smooth={true}
              duration={500}
              className="block cursor-pointer px-4 py-2 text-lg font-semibold capitalize text-gray-700 hover:text-primaryColor"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="whyChooseUs"  // Scroll to Services Section
              smooth={true}
              duration={500}
              className="block cursor-pointer px-4 py-2 text-lg font-semibold capitalize text-gray-700 hover:text-primaryColor"
            >
              Why choose me
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"  // Scroll to Portfolio Section
              smooth={true}
              duration={500}
              className="block cursor-pointer px-4 py-2 text-lg font-semibold capitalize text-gray-700 hover:text-primaryColor"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="reviews"  // Scroll to Portfolio Section
              smooth={true}
              duration={500}
              className="block cursor-pointer px-4 py-2 text-lg font-semibold capitalize text-gray-700 hover:text-primaryColor"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="contact"  // Scroll to Contact Section
              smooth={true}
              duration={500}
              className="block cursor-pointer px-4 py-2 text-lg font-semibold capitalize text-gray-700 hover:text-primaryColor"
            >
              Contact
            </Link>
          </li>

          {/* Mobile Call Button */}
          <div className={`lg:hidden flex items-center pl-4 pb-6 space-x-2 mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
            <a
              href="tel:+250791813289"
              className="flex items-center space-x-2 p-3 bg-primaryColor text-white rounded-full"
            >
              <FiPhoneCall className="w-4 h-4" /> {/* Phone Icon */}
            </a>
            <span className="text-lg font-semibold text-black">+250791813289</span>
          </div>
        </ul>

        {/* Call Button - Always Visible */}
        <div className="hidden lg:flex items-center space-x-2 ml-4 mt-4 lg:mt-0">
          <a
            href="tel:+250791813289"
            className="flex items-center space-x-2 p-3 bg-primaryColor text-white rounded-full"
          >
            <FiPhoneCall className="w-4 h-4" /> {/* Phone Icon */}
          </a>
          <span className="text-lg font-semibold text-black">+250791813289</span>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
