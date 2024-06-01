import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-beige p-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">Legal Estate</div>
        <div className="space-x-4">
          <Link to="/" className="text-xl">Inicio</Link>
          <Link to="/about" className="text-xl">Quiénes Somos</Link>
          <Link to="/services" className="text-xl">Servicios</Link>
          <Link to="/team" className="text-xl">Equipo</Link>
          <Link to="/contact" className="text-xl">Contacto</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
