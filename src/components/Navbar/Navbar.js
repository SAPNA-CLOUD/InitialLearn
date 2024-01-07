import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import Contact from "../../assets/contact.png";
import Menu from "../../assets/menu.png";
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img className = 'logo' src ={Logo} alt = "logo"/>
      <div className = 'menu'>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} direction={500} className='menuList'>Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} direction={500} className='menuList'>About</Link>
      <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} direction={500} className='menuList'>Portfolio</Link>
      </div>
      <button className='menuBtn' onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>
      <img src = {Contact} alt ='contactImg' className="menuImg"/>Contact me</button>

      <img className = 'burger' src ={Menu} alt = "burgerMenu" onClick={()=> setShowMenu(!showMenu)}/>
      <div className = 'burgerMenu' style={{display: showMenu?'flex':'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} direction={500} className='burgerMenuList'onClick={()=> setShowMenu(false)}>Home</Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} direction={800} className='burgerMenuList'onClick={()=> setShowMenu(false)}>About</Link>
      <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} direction={500} className='burgerMenuList'onClick={()=> setShowMenu(false)}>Portfolio</Link>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} direction={500} className='burgerMenuList'onClick={()=> setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar;
