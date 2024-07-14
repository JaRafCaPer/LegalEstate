import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3>Contáctanos</h3>
          <p>Centro, Calle 38 del Sargento Mayor # 6 - 16</p>
          <p>Cartagena, Colombia</p>
          <p>Teléfono: +57 300 1768488</p>
          <p>Email: info@legalestate.com</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Quiénes Somos</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/team">Equipo</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/LegalEstate.co" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/legalestate.co/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/573001768488" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Legal Estate. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
