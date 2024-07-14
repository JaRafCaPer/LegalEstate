import React from 'react';
import Header from '../../components/Header/Header.jsx';
import AboutUs from '../../components/AboutUs/AboutUs.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import teamImage from '../../assets/images/Quiensomos2.webp';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <section className="about-us">
      <div className="container">
        <p className="textP2">
          Legal Estate es una empresa en crecimiento que se especializa en servicios inmobiliarios de compra y venta de bienes inmuebles en la ciudad de Cartagena y otras ciudades. Fundada por Dolly Ramírez Hidalgo, una abogada recién especializada en derecho inmobiliario, nuestra empresa se esfuerza por ofrecer servicios de calidad y asesoramiento legal confiable a nuestros clientes.
        </p>
        <p className="textP2">
          Somos un equipo apasionado que está dando sus primeros pasos en el mundo inmobiliario. Aunque somos nuevos en el mercado, estamos comprometidos a aprender y crecer para satisfacer las necesidades de nuestros clientes.
        </p>
        <div className="team-section">
          <img src={teamImage} alt="Nuestro equipo" className="team-image" />
          <div className="team-text">
            <ul className="team-list">
              <li><strong>Profesionalismo:</strong> Cada miembro de nuestro equipo se distingue por su profesionalismo y ética de trabajo, garantizando un servicio confiable y de calidad en todo momento.</li>
              <li><strong>Experiencia y Conocimientos:</strong> Nuestro equipo cuenta con una combinación de experiencia y conocimientos en diversos aspectos del sector inmobiliario y legal, lo que nos permite ofrecer un enfoque integral a las necesidades de nuestros clientes.</li>
              <li><strong>Dedicación al Cliente:</strong> Nos preocupamos por comprender las necesidades individuales de cada cliente y nos esforzamos por superar sus expectativas en cada interacción. La satisfacción del cliente es nuestra máxima prioridad.</li>
              <li><strong>Trabajo en Equipo:</strong> Valoramos la colaboración y el trabajo en equipo, reconociendo que juntos podemos lograr resultados sobresalientes para nuestros clientes.</li>
              <li><strong>Adaptabilidad y Creatividad:</strong> Nos destacamos por nuestra capacidad para adaptarnos a diferentes situaciones y encontrar soluciones creativas a los desafíos que enfrentan nuestros clientes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default About;
