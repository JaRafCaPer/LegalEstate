import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-200 p-4">
      <nav className="flex justify-around">
        <Link to="/" className="text-xl">Inicio</Link>
        <Link to="/about" className="text-xl">Quiénes Somos</Link>
        <Link to="/services" className="text-xl">Servicios</Link>
        <Link to="/team" className="text-xl">Equipo</Link>
        <Link to="/contact" className="text-xl">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
