import React from 'react';
import { Link } from 'react-router-dom';
import logoTipo from '../../assets/images/1.png';
import './Header.css';

const Header = () => {
  return (
    <header className=" header ">
      <nav className=" nav flex justify-between items-center">
        <div className="imgCon flex items-center space-x-4" style={{ marginLeft: '6.25%' }}>
          <img src={logoTipo} alt="Legal Estate Logo" className="imgLeest" />
          
        </div>
        <div className="list-nav text-mediumGray" style={{ marginRight: '6.25%' }}>
          <Link to="/" className="text-textOnBeige hover:underline">Inicio</Link>
          <Link to="/about" className="text-textOnBeige hover:underline">Quiénes Somos</Link>
          <Link to="/services" className="text-textOnBeige hover:underline">Servicios</Link>
          <Link to="/team" className="text-textOnBeige hover:underline">Equipo</Link>
          <Link to="/contact" className="text-textOnBeige hover:underline">Contacto</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
