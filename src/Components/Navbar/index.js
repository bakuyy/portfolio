import React, {useRef} from 'react'
import {Nav,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'
import { FaBars, FaTimes } from "react-icons/fa";
import {IconContext} from "react-icons";

const Navbar = () => {
    const navRef = useRef()
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <>
    <Nav>
        <NavMenu>
        
            <NavBtn>
                <NavBtnLink to='/About'>
                    About Me
                </NavBtnLink>
                <NavBtnLink to='/Projects'>
                    Projects
                </NavBtnLink>
                <NavBtnLink to='/Clubs'>
                    Clubs and Awards
                </NavBtnLink>
                <NavBtnLink to='/Contact'>
                    Contact Me
                </NavBtnLink>    
                <NavBtn className="nav-btn nav-close-btn" onClick = {showNavBar}>
                    <FaTimes/>
                </NavBtn>        
            </NavBtn>
            <NavBtn className="nav-btn nav-close-btn" onClick= {showNavBar}>
                <FaBars/>
            </NavBtn>
        </NavMenu>
        
    </Nav>
    
    </>
  )
}
export default Navbar
