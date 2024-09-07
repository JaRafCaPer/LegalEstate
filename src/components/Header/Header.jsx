import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoTipo from '../../assets/images/1.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav flex justify-between items-center">
        <div className="imgCon flex items-center space-x-4" style={{ marginLeft: '6.25%' }}>
          <img src={logoTipo} alt="Legal Estate Logo" className="imgLeest" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`list-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="text-textOnBeige hover:underline">Inicio</Link>
          <Link to="/about" className="text-textOnBeige hover:underline">Quiénes Somos</Link>
          <Link to="/services" className="text-textOnBeige hover:underline">Servicios</Link>
          <Link to="/team" className="text-textOnBeige hover:underline">Equipo</Link>
          <Link to="/contact" className="text-textOnBeige hover:underline">Contacto</Link>
        </div>
      </nav>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
