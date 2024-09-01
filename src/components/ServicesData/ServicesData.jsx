import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imgS1 from '../../assets/images/Frame 128.jpg';
import imgS2 from '../../assets/images/Frame 131.jpg';
import imgS3 from '../../assets/images/Arriendo1.webp';
import imgS4 from '../../assets/images/Frame 126.jpg';
import imgS5 from '../../assets/images/Frame 127.jpg';
import './ServicesData.css';

const servicesData = [
  { title: "Asesoría Inmobiliaria", image: imgS1, description: "Ofrecemos asesoría legal especializada en transacciones inmobiliarias, garantizando la protección de los intereses de nuestros clientes." },
  { title: "Compra y Venta de Propiedades", image: imgS2, description: "Servicio integral que incluye la búsqueda de inmuebles, negociación de precios y cierre de contratos." },
  { title: "Gestión de Arrendamientos", image: imgS3, description: "Brindamos asesoría integral y gestión experta en contratos de alquiler, asegurando la protección de los intereses de propietarios e inquilinos." },
  { title: "Desarrollos Inmobiliarios", image: imgS4, description: "Facilitamos todo el proceso del desarrollo inmobiliario, brindando consultoría y apoyo integral desde la planificación inicial hasta la ejecución final." },
  { title: "Resolución de Conflictos", image: imgS5, description: "Ofrecemos servicios de mediación y resolución de disputas, ayudando a nuestros clientes a resolver conflictos de manera eficiente." }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2, 
    slidesToSlide: 2, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1, 
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

const ServicesCarousel = () => {
  return (
    <section className="services">
      <div className="container-services">
        <h2 className="services-title">Nuestros Servicios</h2>
        <Carousel 
          responsive={responsive} 
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          containerClass="carousel-container"
          className="services-carousel"
        >
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-container">
                {service.image && <img src={service.image} alt={service.title} className="service-image" />}
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesCarousel;
