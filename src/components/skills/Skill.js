import React from 'react'
import {progressVariant} from '../../data/variants'
import {motion} from 'framer-motion'

function Skill({name, percent,i}) {

    

    return (
        <div className="skill">
            <div className="skillName">{name}</div>
            <div className="bar">
                <motion.div 
                    className="amount"
                    variants={progressVariant}
                    custom={[percent,i]}
                ></motion.div>
            </div>
        </div>
    )
}

export default Skill
