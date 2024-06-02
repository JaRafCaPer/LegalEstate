import React from 'react';
import imgClick from '../../assets/images/image315.png';
import './Services.css';

const Services = () => {
  return (
    <div className='sContainer'>
      <section className="secSer p-10">
        <h2 className="title">Servicios</h2>
        <p className="textP2">
          En Legal Estate, ofrecemos una gama completa de servicios legales y de bienes raíces diseñados para satisfacer las necesidades únicas de nuestros clientes. Nuestro equipo de profesionales está comprometido a brindar asesoramiento experto y soluciones efectivas en cada etapa del proceso inmobiliario.
        </p>
        <p className="textP2">
          Nuestro compromiso es proporcionar un servicio excepcional que supere las expectativas de nuestros clientes, asegurando siempre su satisfacción y tranquilidad.
        </p>
        <h3 className='title'>Conoce nuestros servicios:</h3>
        <ul className="services-list">
          <li><strong>Asesoría Legal Inmobiliaria:</strong> Proveemos orientación legal en todas las fases de transacciones inmobiliarias, asegurando que cada operación se realice con total transparencia y seguridad jurídica.</li>
          <li><strong>Compra y Venta de Propiedades:</strong> Facilitamos la compra y venta de propiedades, ofreciendo un servicio integral que incluye la búsqueda de inmuebles, negociación de precios y cierre de contratos.</li>
          <li><strong>Gestión de Arrendamientos:</strong> Asesoramos y gestionamos contratos de alquiler, protegiendo los intereses tanto de propietarios como de inquilinos.</li>
          <li><strong>Desarrollos Inmobiliarios:</strong> Brindamos consultoría y apoyo en proyectos de desarrollo inmobiliario, desde la planificación inicial hasta la ejecución final.</li>
          <li><strong>Resolución de Conflictos:</strong> Ofrecemos servicios de mediación y resolución de disputas, ayudando a nuestros clientes a resolver conflictos de manera eficiente y con el menor impacto posible.</li>
        </ul>
        
      </section>
      <img src={imgClick} alt="Servicios Legales" className='imgSer' />
    </div>
  );
};

export default Services;
