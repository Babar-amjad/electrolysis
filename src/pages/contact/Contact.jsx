import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import "./contact.css";

const Contact = () => {
  const handleClicked = () => {
    const whatsappNumber = "03166701684";
    const message = "Hello, I would like to connect with you!";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="container contact text-black my-10 mt-20" id="contact">
        <h1 className="text-4xl text-center mt-20 font-semibold">CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a onClick={handleClicked} target="_blank" className="items">
            <FaWhatsapp className="icons" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100085099856228"
            target="_blank"
            className="items"
          >
            <FaSquareFacebook className="icons"/>
          </a>
          <a
            href="https://www.instagram.com/tehseenjafar?igsh=YWk0ZmNvNjZ3bDI="
            target="_blank"
            className="items"
          >
            <SiInstagram  className="icons"/>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tehseenjafar84@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
      <div className=" text-white bg-orange-500 mt-64 sm:mt-72">
        <p className=" text-center text-xs p-4 font-serif">
          All Content ©2024 Babar-amjad{" "}
        </p>
      </div>
    </>
  );
};

export default Contact;