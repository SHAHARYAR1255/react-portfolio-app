import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
// import { FiDribbble } from 'react-icons/fi';



function HeaderSocial() {
    return (
        <div className="header__socials">

            <a href="https://www.linkedin.com/in/shaharyar-malik-b7415219a/" rel='noreferrer' target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/SHAHARYAR1255" target="_blank" rel='noreferrer'><FaGithub></FaGithub></a>
            {/* <a href="" target="_blank"><FiDribbble></FiDribbble></a> */}
        </div>
    )
}

export default HeaderSocial