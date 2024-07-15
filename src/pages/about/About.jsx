import React from 'react';
import Header from '../../components/Header/Header.jsx';
import AboutUs from '../../components/AboutUs/AboutUs.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgCarousel1 from '../../assets/images/Proyectos1.webp';
import imgCarousel2 from '../../assets/images/Proyectos2.webp';
import imgCarousel3 from '../../assets/images/Proyectos3.webp';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <section className="about-us">
        <div className="container">
          <div className="about-section">
          </div>
          <div className="about-section">
            <p className="about-description">Nuestro equipo está compuesto por profesionales apasionados y dedicados, comprometidos a brindar soluciones adecuadas y eficaces para las necesidades inmobiliarias de nuestros clientes. Nos destacamos por nuestro conocimiento y experiencia en el sector.</p>
          </div>
          <div className="about-section">
            <p className="about-description">En Legal Estate, garantizamos la opción más segura y confiable para sus transacciones inmobiliarias. Nuestro enfoque integral y nuestra dedicación al cliente nos permiten superar las expectativas en cada interacción.</p>
          </div>
          <div className="carousel-section">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={imgCarousel1} alt="Equipo 1" />
              </div>
              <div>
                <img src={imgCarousel2} alt="Equipo 2" />
              </div>
              <div>
                <img src={imgCarousel3} alt="Equipo 3" />
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