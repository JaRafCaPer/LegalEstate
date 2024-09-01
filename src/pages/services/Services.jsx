import React from "react";
import Service from "../../components/Services/Services.jsx";
import "./Services.css";
import ServicesCarousel from "../../components/ServicesData/ServicesData.jsx";

const ServicesPage = () => {
  return (
    <>
      <Service />
      <ServicesCarousel />
    </>
  );
};

export default ServicesPage;
