import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

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
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

        className="container testimonials__container">
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className='client__name'>namfmdwmdwd sadadd</h5>
          <small className='client__review'>

            the leader in cloud-based software for the global life sciences industry. Committed to innovation, product excellence,
            and customer success, our customers range from the world’s largest pharmaceutical companies to emerging biotechs. Veeva’s
            software helps our customers bring medicines and therapies to patients faster.


          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className='client__name'>namfmdwmdwd sadadd</h5>
          <small className='client__review'>

            the leader in cloud-based software for the global life sciences industry. Committed to innovation, product excellence,
            and customer success, our customers range from the world’s largest pharmaceutical companies to emerging biotechs. Veeva’s
            software helps our customers bring medicines and therapies to patients faster.


          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className='client__name'>namfmdwmdwd sadadd</h5>
          <small className='client__review'>

            the leader in cloud-based software for the global life sciences industry. Committed to innovation, product excellence,
            and customer success, our customers range from the world’s largest pharmaceutical companies to emerging biotechs. Veeva’s
            software helps our customers bring medicines and therapies to patients faster.


          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className='client__name'>namfmdwmdwd sadadd</h5>
          <small className='client__review'>

            the leader in cloud-based software for the global life sciences industry. Committed to innovation, product excellence,
            and customer success, our customers range from the world’s largest pharmaceutical companies to emerging biotechs. Veeva’s
            software helps our customers bring medicines and therapies to patients faster.


          </small>
        </SwiperSlide>

      </Swiper >
    </section >
  )
}

export default Testimonials