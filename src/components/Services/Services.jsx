import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import imgClick from '../../assets/images/image315.png';
import './Services.css';

const Services = () => {
  return (
    <div className='sContainer'>
      <section className="secSer">
        <h2 className="title3">Servicios</h2>
        <p className="textP2">
          En Legal Estate, ofrecemos una gama completa de servicios legales y de bienes raíces diseñados para satisfacer las necesidades únicas de nuestros clientes. Nuestro equipo de profesionales está comprometido a brindar asesoramiento experto y soluciones efectivas en cada etapa del proceso inmobiliario.
        </p>
        <p className="textP2">
          Nuestro compromiso es proporcionar un servicio excepcional que supere las expectativas de nuestros clientes, asegurando siempre su satisfacción y tranquilidad.
        </p>
        <h3 className='title3'>Conoce nuestros servicios:</h3>
        <ul className="services-list">
          <li><FaCheckCircle className="service-icon" /><strong>Asesoría Legal Inmobiliaria</strong></li>
          <li><FaCheckCircle className="service-icon" /><strong>Compra y Venta de Propiedades</strong></li>
          <li><FaCheckCircle className="service-icon" /><strong>Gestión de Arrendamientos</strong></li>
          <li><FaCheckCircle className="service-icon" /><strong>Desarrollos Inmobiliarios</strong></li>
          <li><FaCheckCircle className="service-icon" /><strong>Resolución de Conflictos</strong></li>
        </ul>
      </section>
      <img src={imgClick} alt="Servicios Legales" className='imgSer' />
    </div>
  );
};

export default Services;

