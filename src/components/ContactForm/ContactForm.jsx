import React, { useState } from 'react';
import './ContactForm.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-page">
      <div className="contact-info2">
        <h2>Contáctanos</h2>
        <div className="info-item">
          <FaMapMarkerAlt /> <p>Centro, Calle 38 del Sargento Mayor # 6 - 16, Cartagena, Colombia</p>
        </div>
        <div className="info-item">
          <FaPhoneAlt /> <p>+57 300 1768488</p>
        </div>
        <div className="info-item">
          <FaEnvelope /> <p>info@legalestate.co</p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/LegalEstate.co"><FaFacebookF /></a>
          <a href="https://www.instagram.com/legalestate.co/?hl=en"><FaInstagram /></a>
          <a href="https://wa.me/3001768488"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="contact-form-section">
        <h2>Pide tu asesoria personalizada:</h2>
        <form action="https://public.herotofu.com/v1/12d6b520-6d10-11ef-ac86-0dfc96ef4036" method="post" accept-charset="UTF-8" className="contact-form">
          <div className="form-group">
            <input type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submit-button">Enviar Mensaje</button>
          {/* Anti-spam field */}
          <div style={{ textIndent: '-99999px', whiteSpace: 'nowrap', overflow: 'hidden', position: 'absolute' }} aria-hidden="true">
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
