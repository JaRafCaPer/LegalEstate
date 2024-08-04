import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mensaje enviado con éxito!');
    }).catch((error) => {
      console.log('FAILED...', error);
      alert('Error al enviar el mensaje.');
    });
  };

  return (
    <section className="contact-section p-10 bg-beige">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-lightGray">Contacto</h2>
        <div className="contact-info mb-8 text-center text-lightGray">
          <p className="text-lg mb-2"><strong>Dirección:</strong> Centro, Calle 38 del Sargento Mayor # 6 - 16, 130001</p>
          <p className="text-lg mb-2"><strong>Teléfono:</strong> <a href="tel:3001768488" className="text-lightGray hover:underline">300 1768488</a></p>
          <p className="text-lg mb-2"><strong>Correo Electrónico:</strong> <a href="mailto:info@legalestate.co" className="text-lightGray hover:underline">info@legalestate.co</a></p>
        </div>
        <form className="contact-form flex flex-col space-y-4 max-w-lg mx-auto mb-8" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Nombre" 
            className="p-3 border border-mediumGray rounded focus:outline-none focus:ring-2 focus:ring-lightGray"
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Correo Electrónico" 
            className="p-3 border border-mediumGray rounded focus:outline-none focus:ring-2 focus:ring-lightGray"
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Teléfono" 
            className="p-3 border border-mediumGray rounded focus:outline-none focus:ring-2 focus:ring-lightGray"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea 
            name="message"
            placeholder="Mensaje" 
            className="p-3 border border-mediumGray rounded focus:outline-none focus:ring-2 focus:ring-lightGray"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button 
            type="submit"
            className="bg-mediumGray text-textOnLightGray p-3 rounded hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Enviar
          </button>
        </form>
        <div className="social-media flex justify-center space-x-6 text-lightGray">
          <h2 >Nuestras Redes:</h2>
          <a href="https://www.facebook.com/LegalEstate.co" className="hover:text-gray-600 transition duration-300 ease-in-out">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com/legalestate.co/?hl=en" className="hover:text-gray-600 transition duration-300 ease-in-out">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/3001768488" className="hover:text-gray-600 transition duration-300 ease-in-out">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
