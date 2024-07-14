import React from 'react';
import imgComplete from '../../assets/images/15.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
  <div className='mainContainer'>
    <img className='imgAbout' src={imgComplete} alt="" />
    <section className=" ">
      <h2 className='title4' >Quiénes Somos:</h2>
      <p className='textP'>En Legal Estate, combinamos experiencia legal y conocimiento del mercado inmobiliario para ofrecer soluciones integrales y personalizadas. Fundada por la abogada Dolly Ramírez Hidalgo, nos enorgullecemos de nuestra transparencia, integridad y dedicación. Cada cliente recibe el asesoramiento necesario para tomar decisiones informadas y seguras. Tu tranquilidad es nuestra prioridad, y nos comprometemos a gestionar tu patrimonio con el más alto nivel de profesionalismo.</p>
    </section>
    </div>
  );
};

export default AboutUs;
