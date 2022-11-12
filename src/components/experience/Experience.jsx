import React from 'react'
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { experience } from '../../data';

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {experience.frontend.map((exp, i) => {
              return (
                <article className='experience__details'>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{exp.skill}</h4>
                    <small className='text-light'>{exp.level}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {experience.backend.map((exp, i) => {
              return (
                <article className='experience__details'>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{exp.skill}</h4>
                    <small className='text-light'>{exp.level}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience