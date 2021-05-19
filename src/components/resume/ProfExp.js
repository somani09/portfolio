import React, {useState} from 'react'
import JobDetails from './JobDetails'
import {motion, AnimatePresence} from 'framer-motion'
import {fadeInFastVariant} from '../../data/variants'

function ProfExp({profExp}) {

    const [detailsOpen, setDetailsOpen] = useState(false)
    const [showId, setShowId] = useState(null);
    return (
        <div className="resumeSection">
            <div className="subHeading">Professional Experience</div>
            {profExp.map((x,i) => (
                <div key={i} className="dataArea pb-20">
                    <div className="subSubHeading">
                        {x.designation}
                    </div>
                    <div className="flex-row">
                        <div className="year">
                            {x.duration}
                        </div>
                    </div>
                    <em className="companyName">
                        {x.company}
                    </em>
                    <br/>
                    <em className="summaryPart">
                        {x.location}
                    </em>
                    
                    <div className="companySummary">
                        <span className="semi-bold sumText">Summary </span>- {x.summary}
                    </div>
                    {x.details&&<button className="detailsButton" onClick={()=>{setDetailsOpen(true);setShowId(i)}}>Details</button>}
                    <AnimatePresence exitBeforeEnter>
                    {x.details&&detailsOpen&&showId===i&& 
                       
                            <motion.div
                                variants={fadeInFastVariant}
                            >
                                <JobDetails 
                                    setDetailsOpen={setDetailsOpen} 
                                    setShowId={setShowId} 
                                    details={x.details} 
                                    learning={x.learning}/>  
                                <div onClick={()=>{setDetailsOpen(true);setShowId(null)}} className="backgroundOnOpen">

                                </div>
                            </motion.div>
                        
                        }
                    </AnimatePresence >   
                </div>
            )) }
        </div>
    )
}

export default ProfExp
