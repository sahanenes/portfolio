import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/enes-sahan" target="_blank">
        <BsLinkedin size="1.5rem" />
      </a>
      <a href="https://github.com/sahanenes" target="_blank">
        <BsGithub size="1.5rem" />
      </a>
      <a href="" target="_blank">
        <FiDribbble size="1.5rem" />
      </a>
    </div>
  );
};

export default HeaderSocial;
