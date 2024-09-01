import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesButton.css';

const ServicesButton = () => {
  const navigate = useNavigate();

  return (
    <div className="containerButton">
    <button 
      className="services-button"
      onClick={() => navigate('/services')}
    >
      Conoce nuestros servicios
    </button>
    </div>
  );
};

export default ServicesButton;
