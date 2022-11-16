import React from 'react'
import './services.css';
import { BiCheck } from 'react-icons/bi';
import { services } from '../../data';

function Services() {
  return (
    <section id="services">

      <h5>Known</h5>
      <h2>Flavours</h2>
      <div className="container container__services">
        {services.map((service, i) => {
          return (
            <article key={i} className='services'>
              <div className="services__head">
                <h3>{service.title}</h3>
              </div>
              <ul className='services__list'>
                {service.flavours.map((service, i) => {
                  console.log(service);
                  return (
                    <li key={i}>
                      <BiCheck className='services__list-icon'></BiCheck>
                      <p>{service}</p>
                    </li>
                  )

                })
                }
              </ul>

            </article>
          );
        })}
      </div>
    </section>
  )
}


// const ServicesItem = ({ ServicesItems }) => {
//   console.log(ServicesItems);
//   ServicesItems.map((service, i) => {
//     console.log(service);
//     return (
//       <li key={i}>
//         <BiCheck className='services__list-icon'></BiCheck>
//         <p>{service}</p>
//       </li>
//     )

//   })
// }


export default Services