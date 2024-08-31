import React from 'react';
import './teamComp.css';
import CarouselServ from '../CarouselServ/CarouselServ';
import 'react-multi-carousel/lib/styles.css';
import Img12 from '../../assets/images/13.png';
import Img13Desktop from '../../assets/images/image317.png';
import Img13Mobile from '../../assets/images/image3172.png';

const Team = () => {
  
  return (
    <div className='team-section'>
      <div className='container'>
        <h1 className='title2'>Nuestro Equipo de Profesionales en Legal Estate</h1>
        <p className='description'>
          En Legal Estate, contamos con un equipo multidisciplinario compuesto por abogados especializados, asesores inmobiliarios, asistentes, comerciales y un dedicado equipo de gestión humana. Cada miembro de nuestro equipo aporta su experiencia y conocimientos únicos para ofrecer soluciones integrales y personalizadas a nuestros clientes.
        </p>
        <img src={Img13Desktop} alt="Equipo de trabajo" className='team-banner-desktop' />
        <img src={Img13Mobile} alt="Equipo de trabajo" className='team-banner-mobile' />
        <h2 className='subsection-title'>Excelencia y Experiencia:</h2>
        <ol className='list'>
          <li><strong>Experiencia Comprobada:</strong>
            <p>Nuestro equipo de abogados y asesores especializados cuenta con una sólida trayectoria en la gestión de casos complejos y transacciones inmobiliarias.</p>
          </li>
          <li><strong>Asesoramiento Integral:</strong>
            <p>Ofrecemos una amplia gama de servicios, desde la redacción de contratos y la gestión de arrendamientos hasta la consultoría en desarrollos inmobiliarios.</p>
          </li>
          <li><strong>Resolución de Conflictos:</strong>
            <p>Nuestra experiencia en mediación y arbitraje nos permite resolver conflictos de manera eficiente, minimizando el impacto para nuestros clientes.</p>
          </li>
          <li><strong>Compromiso con la Excelencia:</strong>
            <p>Nos mantenemos actualizados con las últimas regulaciones y tendencias del sector inmobiliario para brindar el mejor asesoramiento posible.</p>
          </li>
          <li><strong>Atención Personalizada:</strong>
            <p>Adaptamos nuestras estrategias a las necesidades específicas de cada cliente, asegurando su satisfacción y tranquilidad.</p>
          </li>
        </ol>
        <img src={Img12} alt="Equipo de trabajo" className='team-banner2' />
        <h2 className='subsection-title'>Nuestro Equipo:</h2>
        <ol className='list'>
          <li><strong>Abogados Especializados:</strong>
            <p>Expertos en derecho multidisciplinarios que garantizan un asesoramiento legal preciso y confiable.</p>
          </li>
          <li><strong>Asesores Especializados:</strong>
            <p>Profesionales dedicados a brindar orientación en cada etapa de las transacciones inmobiliarias.</p>
          </li>
          <li><strong>Asistentes:</strong>
            <p>Personal de apoyo que asegura un servicio eficiente y organizado.</p>
          </li>
          <li><strong>Comerciales:</strong>
            <p>Encargados de gestionar las relaciones entre clientes y cerrar acuerdos beneficiosos para ambas partes.</p>
          </li>
        </ol>
       <CarouselServ/>
      </div>
    </div>
  );
};

export default Team;

