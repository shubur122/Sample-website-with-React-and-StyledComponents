import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import InfoSectionAnchor from '../components/InfoSection/indexanchor';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSectionAnchor {...homeObjThree}/>
            <Footer />
            
        </>
    )
}

export default Home
