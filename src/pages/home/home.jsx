import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import CarouselServ from '../../components/CarouselServ/CarouselServ.jsx';
import AboutUs from '../../components/AboutUs/AboutUs.jsx';
import Services from '../../components/Services/Services.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <CarouselServ />
      <AboutUs />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
