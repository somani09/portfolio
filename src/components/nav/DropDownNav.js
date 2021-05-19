import React, {useRef, useState} from 'react'
import { motion } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import './dropDownNav.scss'
import { MenuToggle } from "./MenuToggle";
import DropDownItems from './DropDownItems'
const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };


function DropDownNav() {

    // const [isOpen, toggleOpen] = useCycle(false, true);
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);  


    return (
      <>
          {isOpen?<div 
            className="forClose"
            onClick={() => setIsOpen(false)}
            ></div>:null}
        <motion.nav 
            className="dropNav" 
            id="dropDownNav"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            >
            <motion.div
                className="dropDownNav"
                variants={sidebar}
            >
              <DropDownItems  setIsOpen={setIsOpen} isOpen={isOpen}/>
              <MenuToggle setIsOpen={setIsOpen} isOpen={isOpen} />    
            </motion.div>
        </motion.nav>
        
      </>
    )
}

export default DropDownNav
