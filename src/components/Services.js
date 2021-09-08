import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import "../css/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <GiCompass />,
      title: "mission",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      id: 2,
      icon: <GiDiamondHard />,
      title: "vision",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      id: 3,
      icon: <GiStabbedNote />,
      title: "history",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
  ];
  return (
    <div className="servicesContainer">
      <div className="centered">
        <div className="header">
          <h3>
            Custom Furniture <br /> Built Only For You
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="services-boxes">
          {services.map((service) => {
            return (
              <div className="service" key={service.id}>
                <span className="icon">{service.icon}</span>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
