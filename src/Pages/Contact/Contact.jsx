import React from "react";
import "./contact.scss";
import { Link } from "react-router-dom";
import { GrLinkedin } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact__title">CONTACT</h1>
      <div className="contact__container">
        <p className="contact__text">
          {" "}
          <span>Email</span> : cedricfriscia@gmail.com
        </p>
        <p className="contact__text">
          <span>Téléphone</span> : 0645977502
        </p>
      </div>
    </div>
  );
};

export default Contact;
