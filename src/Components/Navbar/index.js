import React from 'react'
import {Nav,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'
import { GoThreeBars } from "react-icons/go";
import {IconContext} from "react-icons";

const Navbar = () => {
  return (
    <>
    <Nav>
        <IconContext.Provider value = {{className: "shared-class", color: '#4599F7', size: 56}}>
            <GoThreeBars/>
        </IconContext.Provider>
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
        </NavBtn>
        </NavMenu>
        
    </Nav>
    
    </>
  )
}
export default Navbar
