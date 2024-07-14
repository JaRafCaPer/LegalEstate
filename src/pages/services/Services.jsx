import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Services from '../../components/Services/Services.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Services.css';

const servicesData = [
  {
    title: "Asesoría Legal Inmobiliaria",
    image: "/src/assets/images/AsesoriaLegal.webp",
    description: "Proveemos orientación legal en todas las fases de transacciones inmobiliarias, asegurando que cada operación se realice con total transparencia y seguridad jurídica."
  },
  {
    title: "Compra y Venta de Propiedades",
    images: ["/src/assets/images/Compraventa1.webp"],
    description: "Facilitamos la compra y venta de propiedades, ofreciendo un servicio integral que incluye la búsqueda de inmuebles, negociación de precios y cierre de contratos."
  },
  {
    title: "Gestión de Arrendamientos",
    image: "/src/assets/images/Arriendo1.webp",
    description: "Asesoramos y gestionamos contratos de alquiler, protegiendo los intereses tanto de propietarios como de inquilinos."
  },
  {
    title: "Desarrollos Inmobiliarios",
    images: ["/src/assets/images/Proyectos1.webp"],
    description: "Brindamos consultoría y apoyo en proyectos de desarrollo inmobiliario, desde la planificación inicial hasta la ejecución final."
  },
  {
    title: "Resolución de Conflictos",
    image: "/src/assets/images/ResConflictos.webp",
    description: "Ofrecemos servicios de mediación y resolución de disputas, ayudando a nuestros clientes a resolver conflictos de manera eficiente y con el menor impacto posible."
  }
];

const ServicesPage = () => {
  return (
    <>
      <Header />
      <Services />
      <section className="services">
      <div className="container">
        <h2 className="services-title">Nuestros Servicios</h2>
        {servicesData.map((service, index) => (
          <div key={index} className="service-item grid grid-cols-3 gap-4">
            <h3 className="service-title basis-1/4">{service.title}</h3>
            <p className="service-description basis-1/4">{service.description}</p>
            {service.image && <img src={service.image} alt={service.title} />}
            {service.images && service.images.map((image, idx) => (
              <img key={idx} src={image} alt={`${service.title} ${idx + 1}`} />
            ))}  
          </div>
        ))}
      </div>
    </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
