import React, {Suspense} from 'react'
import './skills.scss'
import { useInView } from 'react-intersection-observer';
const SkillsMain = React.lazy(() => import('./SkillsMain'));

function Skills({loading}) {

    const [ref, inView] = useInView({rootMargin:'5px',triggerOnce:'true',  threshold: 0.3})

    return (
        <div
            ref={ref}
            id="skills"
            className="outer"
        >
            {inView?
            <Suspense fallback={<div className="mainLoader center w100 "><img src={loading} height="20px" alt="loading" /></div>}>
                <SkillsMain />
            </Suspense>
            :<div style={{height:'100vh',width:'100%', backgroundColor:'white'}}></div>}
            
        </div>
    )
}

export default Skills
