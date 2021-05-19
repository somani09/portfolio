import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'


function JobDetails({learning,details,setDetailsOpen,setShowId}) {
    return (
        <div className="jobDetails">
            <AiOutlineClose onClick={()=>{setDetailsOpen(true);setShowId(null)}} className="close"/>
            {details.map((x,i) => (
                <div key={i} className="infoRow">
                    <span className="mark">:-&nbsp;&nbsp;</span>
                    <span className="infoValue">{x.task}</span>
                </div>
            ))}
            <div className="line"></div>
            <div className="learning">
                <div className="learnedTitle">Skills, Language, or Technology Learned/Enhanced -</div>
                <div className="learnedItem">{learning}</div>
            </div>
        </div>
    )
}

export default JobDetails
