import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BiHome } from 'react-icons/bi';
import { MdPersonOutline } from 'react-icons/md'
import { AiOutlineProfile } from 'react-icons/ai'
// import { GrProjects } from 'react-icons/gr'
import { GrContact } from 'react-icons/gr'
import { GiSkills } from 'react-icons/gi'

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const listItemsVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };


function DropDownItems({toggle}) {
    return (
        <motion.ul className="list" variants={listVariants}>
            <motion.li
                variants={listItemsVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                >
                <Link
                    className="item"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={5}
                    onClick={toggle}
                >   
                    <BiHome className="linkIcon"/>
                    <div className="iconText center"><span>Home</span></div>
                </Link>
            </motion.li>

            <motion.li
                variants={listItemsVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                >
                <Link
                  className="item"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={5}
                  onClick={toggle}
              >   
                  <MdPersonOutline className="linkIcon"/>
                  <div className="iconText center">about</div>
              </Link>
            </motion.li>

            <motion.li
                variants={listItemsVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                >
                <Link
                  className="item"
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={5}
                  onClick={toggle}
                >   
                  <AiOutlineProfile className="linkIcon"/>
                  <div className="iconText center"><span>Resume</span></div>
                </Link>
            </motion.li>

            <motion.li
                variants={listItemsVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                >
                <Link
                  className="item"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={5}
                  onClick={toggle}
                >   
                  <GiSkills className="linkIcon"/>
                  <div className="iconText center"><span>Skills</span></div>
                </Link>
            </motion.li>

            {/* <motion.li
                variants={listItemsVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                >
                <Link
                  className="item"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={5}
                  onClick={toggle}
                 >   
                  <GrProjects className="linkIcon"/>
                  <div className="iconText center"><span>Projects</span></div>
                </Link>  
            </motion.li> */}

            <motion.li
                variants={listItemsVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                >
                <Link
                  className="item"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={5}
                  onClick={toggle}
                  >   
                  <GrContact className="linkIcon"/>
                  <div className="iconText center"><span>Contact</span></div>
                </Link>
            </motion.li>

        </motion.ul>
    )
}

export default DropDownItems