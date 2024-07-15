import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section p-10 bg-beige">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-lightGray">Contacto</h2>
        <div className="contact-info mb-8 text-center text-lightGray">
          <p className="text-lg mb-2"><strong>Dirección:</strong> Centro, Calle 38 del Sargento Mayor # 6 - 16, 130001</p>
          <p className="text-lg mb-2"><strong>Teléfono:</strong> <a href="tel:3001768488" className="text-lightGray hover:underline">300 1768488</a></p>
          <p className="text-lg mb-2"><strong>Correo Electrónico:</strong> <a href="mailto:info@legalestate.co" className="text-lightGray hover:underline">info@legalestate.co</a></p>
        </div>
        <form className="contact-form flex flex-col space-y-4 max-w-lg mx-auto mb-8">
          <input 
            type="text" 
            placeholder="Nombre" 
            className="p-3 border border-mediumGray rounded focus:outline-none focus:ring-2 focus:ring-lightGray"
          />
          <input 
            type="email" 
            placeholder="Correo Electrónico" 
            className="p-3 border border-mediumGray rounded focus:outline-none focus:ring-2 focus:ring-lightGray"
          />
          <input 
            type="tel" 
            placeholder="Teléfono" 
            className="p-3 border border-mediumGray rounded focus:outline-none focus:ring-2 focus:ring-lightGray"
          />
          <textarea 
            placeholder="Mensaje" 
            className="p-3 border border-mediumGray rounded focus:outline-none focus:ring-2 focus:ring-lightGray"
            rows="5"
          ></textarea>
          <button 
            type="submit"
            className="bg-mediumGray text-textOnLightGray p-3 rounded hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Enviar
          </button>
        </form>
        <div className="social-media flex justify-center space-x-6 text-lightGray">
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
