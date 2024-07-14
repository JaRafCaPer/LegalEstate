import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import AboutUs from '../../components/AboutUs/AboutUs.jsx';
import Services from '../../components/Services/Services.jsx';
import Team from '../../components/Team/Team.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import imgLogo from '../../assets/images/4.png';
import './home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
     <div className='imgContainer'>
      <img src={imgLogo} alt="" className="imgLogo" />
     </div>
      <Footer />
    </>
  );
};

export default Home;
