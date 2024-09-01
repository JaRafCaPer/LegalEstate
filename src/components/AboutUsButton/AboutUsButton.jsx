import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUsButton.css';

const AboutUsButton = () => {
  const navigate = useNavigate();

  return (
    <div className="containerButton2">
    <button 
      className="about-us-button"
      onClick={() => navigate('/about')}
    >
      Learn More About Us
    </button>
    </div>
  );
};

export default AboutUsButton;
