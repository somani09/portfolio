import React from 'react'
import './sideBarNav.scss'
import { Link } from "react-scroll";
import { BiHome } from 'react-icons/bi';
import { MdPersonOutline } from 'react-icons/md'
import { AiOutlineProfile } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { GrContact } from 'react-icons/gr'
import { GiSkills } from 'react-icons/gi'
import {motion} from 'framer-motion'

const linkSpring = {
    initial : {
        x: -100
    },
    animate : (i) =>( {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            delay:i*.1,
            duration:.5
          },
    })
}

function SideBarNav() {
    return (
        <div id="sideBarNav" className="sideBarNav ">
            <div className="bar">

                    <motion.div
                    variants={linkSpring}
                    initial="initial"
                    animate="animate"
                    custom={1}
                    >
                        <Link
                            className="item"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={5}
                            >   
                            <BiHome className="linkIcon"/>
                            <div className="iconText center"><span>Home</span></div>
                        </Link>
                    </motion.div>

                    <motion.div
                    variants={linkSpring}
                    initial="initial"
                    animate="animate"
                    custom={2}
                    >
                        <Link
                            className="item"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={5}
                        >   
                            <MdPersonOutline className="linkIcon"/>
                            <div className="iconText center">About</div>
                        </Link>
                    </motion.div>

                    <motion.div
                    variants={linkSpring}
                    initial="initial"
                    animate="animate"
                    custom={3}
                    >
                        <Link
                            className="item"
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={5}
                        >   
                            <AiOutlineProfile className="linkIcon"/>
                            <div className="iconText center"><span>Resume</span></div>
                        </Link>
                    </motion.div>

                    <motion.div
                    variants={linkSpring}
                    initial="initial"
                    animate="animate"
                    custom={4}
                    >
                        <Link
                            className="item"
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={5}
                        >   
                            <GiSkills className="linkIcon"/>
                            <div className="iconText center">Skills</div>
                        </Link>
                    </motion.div>

                    <motion.div
                    variants={linkSpring}
                    initial="initial"
                    animate="animate"
                    custom={5}
                    >
                        <Link
                            className="item"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={5}
                        >   
                            <GrProjects className="linkIcon"/>
                            <div className="iconText center"><span>Projects</span></div>
                        </Link>
                    </motion.div>

                    <motion.div
                    variants={linkSpring}
                    initial="initial"
                    animate="animate"
                    custom={6}
                    >
                        <Link
                            className="item"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={5}
                        >   
                            <GrContact className="linkIcon"/>
                            <div className="iconText center"><span>Contact</span></div>
                        </Link>
                    </motion.div>
                    
                
                
                
                
            </div>
        </div>
    )
}

export default SideBarNav
