import React from "react";
import "./portfolio.css";
import IMG from "../../assets/portfolio.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>Stock-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sahanenes/StockApp" className="btn">
              Github
            </a>
            <a
              href="https://stockapp-lovat.vercel.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>Movie-App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahanenes/movie-app"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://movie-app-project-search.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="image" />
          </div>
          <h3>Recipe-App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahanenes/recipe-app"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://recipe-app-special.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
