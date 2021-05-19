import React from 'react'
import Head from '../common/head/Head'
import Skill from './Skill'
import {motion} from 'framer-motion'
import {skillsData} from '../../data/skillsData'
import {fadeInVariant} from '../../data/variants'

function SkillsMain() {
    return (
        <motion.div 
                className="skills flex-col"
                variants={fadeInVariant}
                >

                <Head title="SKILLS" text={skillsData.text} />

                <div className="content">
                    <div className="skills-col">
                        <div className="subHeading">Languages and Frameworks</div>
                        {
                            skillsData.language.map((x,i) => (
                                <Skill key={i} i={i} name={x.name} percent={x.percent} />
                            ))
                        }
                    </div>
                    <div className="skills-col">
                        <div className="subHeading">Tools and Softwares</div>
                        {
                            skillsData.tools.map((x,i) => (
                                <Skill key={i} i={i+7} name={x.name} percent={x.percent} />
                            ))
                        }
                    </div>
                </div>

            </motion.div>
    )
}

export default SkillsMain
