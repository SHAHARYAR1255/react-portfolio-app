import React from 'react'
import './portfolio.css';
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
// import IMG7 from "../../assets/portfolio7.jpg";
// import IMG8 from "../../assets/portfolio8.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="por" />
          </div>
          <h3>tejrekra jrjerltw</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="por" />
          </div>
          <h3>tejrekra jrjerltw</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="por" />
          </div>
          <h3>tejrekra jrjerltw</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="por" />
          </div>
          <h3>tejrekra jrjerltw</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="por" />
          </div>
          <h3>tejrekra jrjerltw</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="por" />
          </div>
          <h3>tejrekra jrjerltw</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target="_blank">Github</a>
            <a href="" className='btn' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio