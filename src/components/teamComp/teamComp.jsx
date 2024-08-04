import React from 'react';
import './teamComp.css';
import { Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/images/Frame 126.jpg';
import img2 from '../../assets/images/Frame 130.jpg';
import img3 from '../../assets/images/Frame 127.jpg';
import img4 from '../../assets/images/real4.jpg';
import img5 from '../../assets/images/real12.jpg';
import Img12 from '../../assets/images/image317.png';
import Img13 from '../../assets/images/13.png';

const Team = () => {
  const teamImages = [img1, img2, img3, img4, img5];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className='team-section'>
      <div className='container'>
        <h1 className='title2'>Nuestro Equipo de Profesionales en Legal Estate</h1>
        <p className='description'>
          En Legal Estate, contamos con un equipo multidisciplinario compuesto por abogados especializados, asesores inmobiliarios, asistentes, comerciales y un dedicado equipo de gestión humana. Cada miembro de nuestro equipo aporta su experiencia y conocimientos únicos para ofrecer soluciones integrales y personalizadas a nuestros clientes.
        </p>
        <img src={Img13} alt="Equipo de trabajo" className='team-banner' />
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
        <Carousel responsive={responsive} infinite={true} className='carousel'>
          {teamImages.map((image, index) => (
            <div key={index} className='image-container'>
              <Image src={image} className='team-image' />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
