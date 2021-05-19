import React, {Suspense} from 'react'
import './resume.scss'
import { useInView } from 'react-intersection-observer'
const ResumeMain = React.lazy(() => import('./ResumeMain'));

function Resume({loading}) {

    const [ref, inView] = useInView({rootMargin:'5px',triggerOnce:'true',  threshold: 0.2})

    return (
        <div
            ref={ref}
            className="outer"
            id="resume"
            >

        
            {inView?
            <Suspense fallback={<div className="mainLoader center w100 "><img src={loading} height="20px" alt="loading" /></div>}>
                <ResumeMain />
            </Suspense>
            :<div style={{height:'100vh', width:'100%',backgroundColor:'white'}}></div>}

        </div>
    )
}

export default Resume
