import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import AboutUs from '../Components/About';
import HeroSection from '../Components/HeroSection';
import ContactPage from '../Components/ContactPage';
import ServiceSection from '../Components/ServiceSection';
import WhyChooseUs from '../Components/WhyChooseUs';
import Portfolio from '../Components/Portfolio';
import ReviewsSection from '../Components/ReviewsSection';
import FAQSection from '../Components/FAQSection';

function LandingLayout() {
  return (
    <div>
      <NavBar />
      <div id="heroSection">
        <HeroSection />
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="services">
        <ServiceSection />
      </div>
      <div id="whyChooseUs">
        <WhyChooseUs />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="reviews">
        <ReviewsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>

      <div id="contact">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}

export default LandingLayout;
