import React from 'react';
import muroImg from '../../assets/images/11.png';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>Protegemos tu legado</h1>
        <p>
          LEEST nace de la idea de que una vivienda no es solo una inversión, sino un legado que se transmite de generación en generación. Esta marca se crea con la misión de proteger y preservar ese legado a través de servicios legales especializados en bienes raíces.
        </p>
        <p>
          Somos el muro que protege a tu familia y a tu patrimonio. Contruyamos juntos tu mejor futuro.
        </p>
        <button className="buttonBanner">Contáctanos</button>
      </div>
      <div className="banner-image">
        <img src={muroImg} alt="Imagen representativa" />
      </div>
    </section>
  );
};

export default Banner;
