import React from "react";
import HeroBack from "../img/hero-bcg.jpg";
import "../css/Hero.css";

const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="txt">
        <h1>
          Design Your <br />
          Comfort Zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button>SHOP NOW</button>
      </div>
      <div className="img">
        <img src={HeroBack} alt="" />
      </div>
    </div>
  );
};

export default Hero;
