import React from 'react';
import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Services from '../components/Services.jsx';
import Team from '../components/Team.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

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
