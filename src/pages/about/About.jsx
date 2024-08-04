import React from 'react';
import Header from '../../components/Header/Header.jsx';
import AboutUs from '../../components/AboutUs/AboutUs.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgCarousel1 from '../../assets/images/Frame 124.jpg';
import imgCarousel2 from '../../assets/images/Frame 125.jpg';
import imgCarousel3 from '../../assets/images/Frame 127.jpg';
import imgCarousel4 from '../../assets/images/Frame 125.jpg';
import imgCarousel5 from '../../assets/images/Frame 129.jpg';
import imgAboutUs from '../../assets/images/image316.png';
import imgLeest from '../../assets/images/14.png';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <section className="about-us">
        <div className="container">
          <div className="about-section">
            <img src={imgLeest} alt="" />
            <img src={imgAboutUs} alt="Equipo 1" />
          </div>
          
          <div className="about-section">
            <p className="about-description">En Legal Estate, garantizamos la opción más segura y confiable para sus transacciones inmobiliarias. Nuestro enfoque integral y nuestra dedicación al cliente nos permiten superar las expectativas en cada interacción.</p>
          </div>
          <div className="carousel-section">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              
              <div>
                <img src={imgCarousel1} alt="Equipo 2" />
              </div>
              <div>
                <img src={imgCarousel3} alt="Equipo 3" />
              </div>
              <div>
                <img src={imgCarousel4} alt="Equipo 4" />
              </div>
              <div>
                <img src={imgCarousel5} alt="Equipo 5" />
              </div>
              
            </Carousel>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
