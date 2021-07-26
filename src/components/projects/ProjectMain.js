import React from 'react'
import Head from '../common/head/Head'
import {motion} from 'framer-motion'
import {fadeInVariant} from '../../data/variants'
import {projectData} from '../../data/projectsData'
import { ImLink } from 'react-icons/im'

function ProjectMain() {
    return (
        <motion.div  
            variants={fadeInVariant}
            className="project flex-col">

            <Head title="PROJECTS" text={projectData.text} />

            <div className="content">

                {
                    projectData.projects.map((x,i) => (
                        <div key={i} onClick={()=> window.open(x.link, "_blank")} className="projectBox">
                            <img  src={x.image} className="projectImages" alt={x.title} />
                            <div className="center-col projectData">
                                <p className="projectHeading">{x.title}</p>
                                <p className="projectAbout">{x.about}</p>
                                <ImLink className=" " />
                            </div>
                        </div>
                    ))
                }

            </div>

        </motion.div>
    )
}

export default ProjectMain
