import React from 'react';

const Contact = () => {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Nombre" className="p-2 border border-gray-300 rounded"/>
        <input type="email" placeholder="Correo Electrónico" className="p-2 border border-gray-300 rounded"/>
        <input type="tel" placeholder="Teléfono" className="p-2 border border-gray-300 rounded"/>
        <textarea placeholder="Mensaje" className="p-2 border border-gray-300 rounded"></textarea>
        <button className="bg-mediumGray text-white p-4 rounded hover:bg-gray-600">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
