import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
