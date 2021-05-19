import React, { Suspense } from 'react'
import './contact.scss'
import { useInView } from 'react-intersection-observer'
const ConatctMain = React.lazy(() => import('./ConatctMain'));

function Contact({loading}) {

    const [ref, inView] = useInView({rootMargin:'5px',triggerOnce:'true',  threshold: 0.3})

    return (
        <div 
        ref={ref}    
        id="contact"
        className="outer"
        >

            {inView?
            <Suspense fallback={<div className="mainLoader center w100 "><img src={loading} height="20px" alt="loading" /></div>}>
                <ConatctMain />
            </Suspense>
            :<div style={{height:'100vh',width:'100%', backgroundColor:'white'}}></div>}
        </div>
    )
}

export default Contact
