import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { socialprofils } from '../../data';

function index() {
  return (
    <footer>
      <a href="#" className='footer__logo'><h2>Shaharyar Malik
      </h2></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href={socialprofils.facebook}><FaFacebook /></a>
        <a href={socialprofils.instagram}><FiInstagram /></a>
        <a href="#"><IoLogoTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shaharyar Malik. All rights reserved</small>
      </div>
    </footer>
  )
}

export default index