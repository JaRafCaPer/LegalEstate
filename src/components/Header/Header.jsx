import React from 'react';
import { Link } from 'react-router-dom';
import logoTipo from '../../assets/images/1.png';
import './Header.css';

const Header = () => {
  return (
    <header className=" header  p-4">
      <nav className=" nav flex justify-between items-center">
        <div className="flex items-center space-x-4" style={{ marginLeft: '6.25%' }}>
          <img src={logoTipo} alt="Legal Estate Logo" className="h-12 w-auto" />
          
        </div>
        <div className="space-x-4 text-mediumGray" style={{ marginRight: '6.25%' }}>
          <Link to="/" className="text-xl text-textOnBeige hover:underline">Inicio</Link>
          <Link to="/about" className="text-xl text-textOnBeige hover:underline">Quiénes Somos</Link>
          <Link to="/services" className="text-xl text-textOnBeige hover:underline">Servicios</Link>
          <Link to="/team" className="text-xl text-textOnBeige hover:underline">Equipo</Link>
          <Link to="/contact" className="text-xl text-textOnBeige hover:underline">Contacto</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
