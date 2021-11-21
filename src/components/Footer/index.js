import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    FooterRoute, 
    SocialMedia, 
    SocialMediaWrap,
    Logo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,} from './FooterElements.js';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>How it works</FooterLink>
                                <FooterLink to='/'>Testimonials</FooterLink>
                                <FooterLink to='/'>Career</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                                <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>Destinations</FooterLink>
                                <FooterLink to='/'>Sponsorship</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterRoute href='//www.instagram.com' target='_blank' > Instagram </FooterRoute>
                                <FooterRoute href='//www.facebook.com' target='_blank' >Facebook</FooterRoute>
                                <FooterRoute href='//www.youtube.com' target='_blank' >Youtube</FooterRoute>
                                <FooterRoute href='//www.twitter.com' target='_blank' >Twitter</FooterRoute>
                                <FooterRoute href='//www.linkedin.com' target='_blank' >Linkedin</FooterRoute>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Lorem ipsum</FooterLinkTitle>
                                <FooterLink to='/'>Lorem ipsum</FooterLink>
                                <FooterLink to='/'>Lorem ipsum</FooterLink>
                                <FooterLink to='/'>Lorem ipsum</FooterLink>
                                <FooterLink to='/'>Lorem ipsum</FooterLink>
                                <FooterLink to='/'>Lorem ipsum</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Logo to='/' onClick={toggleHome}>
                            Go Up
                        </Logo>
                        <WebsiteRights>Jakub Zalewski © {new Date().getFullYear()}<br /> Design: Brian Design</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.instagram.com' target='_blank' aria-label='Instagram' >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook' >
                                <FaFacebook />
                            </SocialIconLink>    
                            <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube' >
                                <FaYoutube />
                            </SocialIconLink>    
                            <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter' >
                                <FaTwitter />
                            </SocialIconLink>    
                            <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='Linkedin' >
                                <FaLinkedin />
                            </SocialIconLink>        
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
