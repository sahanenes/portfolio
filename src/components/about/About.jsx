import React from "react";
import "./about.css";
import ME from "../../assets/me1.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experince</h5>
              <small>1+years</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Experince</h5>
              <small>1+years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            quaerat harum, ducimus quos assumenda a perferendis sequi pariatur
            fuga fugit modi voluptatem similique molestias maxime sint! Omnis
            doloribus natus dolore!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
