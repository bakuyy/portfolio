import React from 'react'
import {Nav,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavMenu>
        
        <NavBtn>
            <NavBtnLink to='/About' className ="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 p-2 lg:px-4 rounded-lg duration-300 transition-colors text-center">
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
