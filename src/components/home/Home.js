import React, {useState, useEffect} from 'react'
import './home.scss'
import { GrInstagram } from 'react-icons/gr'
import { ImLinkedin } from 'react-icons/im'
import logo from '../../assets/images/logo.png'
import {motion} from 'framer-motion'
import Typer from '../../Typer'
import {socialsHomeVariants} from '../../data/variants'
import {socialsData} from '../../data/socialsData'



function Home() {

    // const [iconsDelay, setIconsDelay] = useState(8)
    const iconsDelay = 4
    const [name, setName] = useState("");
    const [descr, setDescr] = useState("");

    useEffect(() => {
        const nameTimeout = setTimeout(() => {
            setName(value => value + "Vaibhav")
        }, 200);
        const desTimeout = setTimeout(() => {
            setDescr(value => value + "Full Stack Software Developer")
        }, 1500);
        return () => {
            clearTimeout(desTimeout)
            clearTimeout(nameTimeout)
        }
    }, [])

    return (
        <div id="home" className="home flex-row">
            <div className="intro flex-col">
                {name!==""?<Typer className="title homeTitle " text="Vaibhav Somani"  />:null}
                {descr!==""?<Typer className="heading desc" text={descr}  />:null}
                <div className="socials flex-row">
                    <motion.a
                    target="_blank" 
                    rel="noreferrer" 
                    href={socialsData.instagram} 
                    variants={socialsHomeVariants}
                    custom={[1,iconsDelay]}>
                        <GrInstagram className="socialIcons"/>
                    </motion.a>
                    <motion.a
                    target="_blank" 
                    rel="noreferrer" 
                    href={socialsData.linkedin} 
                    variants={socialsHomeVariants}
                    custom={[2,iconsDelay]}>
                        <ImLinkedin  className="socialIcons" />      
                    </motion.a>
                    <motion.a
                    target="_blank" 
                    rel="noreferrer" 
                    className="socialIconsLogo"
                    href={socialsData.somaniMusic} 
                    variants={socialsHomeVariants}
                    custom={[3,iconsDelay]}>
                        <img 
                        src={logo} 
                        className="socialIconsLogo"
                        alt="logo"
                        />
                    </motion.a>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
