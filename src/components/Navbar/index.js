import React, {useState, useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = ( {toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
      
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{color: '#ffffff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to = '/' onClick={toggleHome}>Sample</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to = 'about' smooth={true} duration={450} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = 'discover' smooth={true} duration={450} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = 'services' smooth={true} duration={450} spy={true} exact='true' offset={-80}>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = 'signup' smooth={true} duration={450} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to = '/signin'> Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
