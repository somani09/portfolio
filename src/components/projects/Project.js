import React, {Suspense} from 'react'
import './project.scss'
import ProjectMain from './ProjectMain'
import { useInView } from 'react-intersection-observer'

function Project({loading}) {
    const [ref, inView] = useInView({rootMargin:'5px',triggerOnce:'true',  threshold: 0.2})

    return (
        <div
            ref={ref}
            className="outer"
            id="projects"
            >

        
            {inView?
            <Suspense fallback={<div className="mainLoader center w100 "><img src={loading} height="20px" alt="loading" /></div>}>
                <ProjectMain />
            </Suspense>
            :<div style={{height:'100vh', width:'100%',backgroundColor:'white'}}></div>}

        </div>
    )
}

export default Project
