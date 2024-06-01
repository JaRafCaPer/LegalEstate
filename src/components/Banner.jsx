import React from 'react';

const Banner = () => {
  return (
    <section className="flex items-center bg-beige p-10" style={{ minHeight: '80vh' }}>
      <div className="w-1/2 p-10">
        <h1 className="text-4xl font-bold mb-4">Protegemos tu legado</h1>
        <p className="mb-6">
          LEEST nace de la idea de que una vivienda no es solo una inversión, sino un legado que se transmite de generación en generación. Esta marca se crea con la misión de proteger y preservar ese legado a través de servicios legales especializados en bienes raíces.
        </p>
        <p className="mb-6">
          Desde la redacción de contratos hasta la resolución de disputas, LEEST está comprometido a salvaguardar los intereses y valores arraigados en cada hogar.
        </p>
        <button className="bg-mediumGray text-white p-4 rounded hover:bg-gray-600">Contáctanos</button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src="/path/to/your/image.png" alt="Imagen representativa" className="max-w-full h-auto" />
      </div>
    </section>
  );
};

export default Banner;
