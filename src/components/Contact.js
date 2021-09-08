import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h3>Join our newsletter and get 20% off</h3>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form className="contact-form">
          <input
            type="email"
            className="form-input"
            placeholder="Enter Email"
          />
          <button type="submit" className="submit-btn">
            subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
