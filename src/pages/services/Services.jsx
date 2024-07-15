import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Service from '../../components/Services/Services.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgS1 from '../../assets/images/AsesoriaLegal.webp';
import imgS2 from '../../assets/images/Compraventa1.webp';
import imgS3 from '../../assets/images/Arriendo1.webp';
import imgS4 from '../../assets/images/Proyectos1.webp';
import imgS5 from '../../assets/images/ResConflictos.webp';
import './Services.css';

const servicesData = [
  {
    title: "Asesoría Legal Inmobiliaria",
    image: imgS1,
    description: "Proveemos orientación legal en todas las fases de transacciones inmobiliarias, asegurando que cada operación se realice con total transparencia y seguridad jurídica."
  },
  {
    title: "Compra y Venta de Propiedades",
    image: imgS2,
    description: "Facilitamos la compra y venta de propiedades, ofreciendo un servicio integral que incluye la búsqueda de inmuebles, negociación de precios y cierre de contratos."
  },
  {
    title: "Gestión de Arrendamientos",
    image: imgS3,
    description: "Brindamos asesoría integral y gestión experta en contratos de alquiler, asegurando la protección de los intereses de propietarios e inquilinos, garantizando transacciones justas y seguras para ambas partes."
  },
  {
    title: "Desarrollos Inmobiliarios",
    image: imgS4,
    description: "Facilitamos todo el proceso del desarrollo inmobiliario, brindando consultoría y apoyo integral desde la planificación inicial hasta la ejecución final, asegurando el éxito en cada etapa del proyecto."
  },
  {
    title: "Resolución de Conflictos",
    image: imgS5,
    description: "Ofrecemos servicios de mediación y resolución de disputas, ayudando a nuestros clientes a resolver conflictos de manera eficiente y con el menor impacto posible."
  }
];

const ServicesPage = () => {
  return (
    <>
      <Header />

      <Service />
      <section className="services">
        <div className="container">
          <h2 className="services-title">Nuestros Servicios</h2>
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="services-carousel">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image-container">
                <h3 className="service-title">{service.title}</h3>
                  {service.image && <img src={service.image} alt={service.title} className="service-image" />}
                </div>
                <div className="service-content">
                  
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
