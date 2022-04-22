import React from "react";
import Hooks from "../../Hooks/Hooks";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  const [services] = Hooks();

  return (
    <div className="container">
      <h2 className="text-center">Services</h2>
      <div className="services-container">
        <PageTitle title="Services-"></PageTitle>
           
      {services.map((service) => (
        <Service service={service} key={service.id}></Service>
      ))}
      </div>
    </div>
  );
};

export default Services;
