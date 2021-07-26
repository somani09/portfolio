import React, { Suspense } from 'react'
import {motion} from 'framer-motion'
import './main.scss'
import loading from '../assets/images/loading.svg'
import Background from './Background'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Resume from './resume/Resume'
import Skills from './skills/Skills'
import Project from './projects/Project'
// const Background = React.lazy(() => import('./Background'));
// const About = React.lazy(() => import('./about/About'));
// const Contact = React.lazy(() => import('./contact/Contact'));
// const Project = React.lazy(() => import('./projects/Project'));
// const Resume = React.lazy(() => import('./resume/Resume'));
// const Skills = React.lazy(() => import('./skills/Skills'));
const Footer = React.lazy(() => import('./footer/Footer'));
const ScrollToTop = React.lazy(() => import('./scrollToTop/ScrollToTop'));

function Main({ setLoaded}) {
    return (
        <motion.div 
            className="main" 
            id="main"
            initial="initial"
            animate="animate"
            exit="exit"
            >
            <Home />
            <Background  setLoaded={setLoaded}/>
            <About loading={loading}  />
            <Resume loading={loading}  />
            <Skills loading={loading}  />
            <Project loading={loading}/>
            <Contact loading={loading} />
            <Suspense fallback={<div className="mainLoader center w100 "><img src={loading} height="20px" alt="loading" /></div>}>
                <Footer />
                <ScrollToTop />
            </Suspense>
        </motion.div>
    )
}

export default Main
