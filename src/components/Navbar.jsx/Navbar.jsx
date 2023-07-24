import React, { useState } from 'react';
import Button from '../Button.jsx/Button'
import Logo from '../../assests/nav/logo.png'
import './Navbar.css';
import Linktext from '../LinkTest/LinkTest.jsx';
function Navbar(props) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar inline bg-purple-700 mt-1 items-center">
      <div className="logo z-0"> <img src={Logo} alt='image'/> </div>
      <div className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className={` items-center  menu ${isActive ? 'active' : ''}`}>
        <li><a href="#home"><Linktext txt='Marketplace'/></a></li>
        <li><a href="#about"><Linktext txt='Rankings'/></a></li>
        <li><a href="#services"><Linktext txt='Connect a wallet'/></a></li>
        <li><button><a href="#contact"><Button color='bg-purple-600 px-4 py-4 rounded-[20px] -mt-2  hover:bg-purple-700  active:bg-purple-800' img={require("../../assests/nav/User.png")}  imgstyle="inline pe-2" txt="Sign up" /></a></button></li>
      </ul>
    </nav> 
  );
}               

export default Navbar;
