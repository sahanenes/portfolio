import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Enes Sahan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/sahaneness/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/sahanenes1" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Sahanenes.All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
