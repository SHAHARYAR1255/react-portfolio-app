import React from 'react';
import './Navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

function Navbar() {
  return (
    <nav>
      <a href="#" ><AiOutlineHome /></a>
      <a href="#" ><AiOutlineUser /></a>
      <a href="#" ><BiBook /></a>
      <a href="#" ><RiServiceLine /></a>
      <a href="#" ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar