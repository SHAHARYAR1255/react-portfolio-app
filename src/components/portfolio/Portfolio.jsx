import React from 'react'
import './portfolio.css';
import { dataportfolio } from '../../data';
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        {dataportfolio.map((dat, i) => {
          return (
            <article key={i} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={dat.img} alt="por" />
              </div>
              <h3>{dat.desctiption}</h3>
              <div className="portfolio__item-cta">
                <a href={dat.github} rel="noreferrer" className='btn' target="_blank">Github</a>
                <a href={dat.link} className='btn' rel="noreferrer" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio