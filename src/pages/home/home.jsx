import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import CarouselServ from '../../components/CarouselServ/CarouselServ.jsx';
import AboutUs from '../../components/AboutUs/AboutUs.jsx';
import Services from '../../components/Services/Services.jsx';
import './home.css';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ServicesButton from '../../components/ServicesButton/ServicesButton.jsx';
import AboutUsButton from '../../components/AboutUsButton/AboutUsButton.jsx';

const Home = () => {
  return (
    <>
    
      <Banner />
      <CarouselServ />
      <Services />
      <ServicesButton/>
      <AboutUs />
      <AboutUsButton/>
      <ContactForm />
    </>
  );
};

export default Home;
