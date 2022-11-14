import React from 'react'
import './testimonials.css';
import { worktimeline } from '../../data.js';

// core version + navigation, pagination modules:
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],

// });

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>History</h5>
      <h2>Work Timeline</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

        className="container testimonials__container">
        {worktimeline.map((work, i) => {
          return (
            <SwiperSlide key={i} className="testimonial">
              <div className="client__avatar">
                <img src={work.img} alt="" />
              </div>
              <h5 className='client__name'>{work.where}</h5>
              <div>
                <span className="inline">
                  <h4>Position</h4>
                  <h3 className='inline__a'>{work.jobtitle}</h3>
                </span>
              </div>
              <div>
                <span className="inline">
                  <h4>Date </h4>
                  <h3 className='inline__a'>{work.date}</h3>
                </span>
              </div>
              <div>
                <span className="inline">
                  <h4>Visit</h4>
                  <h3 className='inline__a'><a href={work.link}>{work.short}</a></h3>
                </span>
              </div>
              {/* <small className='client__review'>
                the leader in cloud-based software for the global life sciences industry. Committed to innovation, product excellence,
                and customer success, our customers range from the world’s largest pharmaceutical companies to emerging biotechs. Veeva’s
                software helps our customers bring medicines and therapies to patients faster.
              </small> */}
            </SwiperSlide>
          );
        })}
      </Swiper >
    </section >
  )
}

export default Testimonials