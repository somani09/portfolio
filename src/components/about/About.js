import './about.scss'
import { useInView } from 'react-intersection-observer';
import AboutMain from './AboutMain'
// const AboutMain = React.lazy(() => import('./AboutMain'));

function About({loading}) {

    const [ref, inView] = useInView({rootMargin:'5px',triggerOnce:'true',  threshold: 0.1})

    return (
        <div
            ref={ref}
            className="outer"
            id="about"
        >

            {inView?
            //<Suspense fallback={<div className="mainLoader center w100 "><img src={loading} height="20px" alt="loading" /></div>}>
                <AboutMain />
            //</Suspense>
                :<div style={{height:'100vh',width:'100%',backgroundColor:'white'}}></div>}
        </div>
    )
}

export default About
