import React from 'react'
import {aboutData} from '../../data/aboutData'
import Head from '../common/head/Head'
import ImageLoop from './ImageLoop'
import InfoRow from './InfoRow'
import {motion} from 'framer-motion'
import {fadeInVariant} from '../../data/variants'

function AboutMain() {
    return (
        <motion.div 
            
                 
                className="about flex-col"
                variants={fadeInVariant}
                >
                <Head title="ABOUT" text={aboutData.aboutIntro} />
                <div className="content">
                    <div className="imageLoop">
                        <ImageLoop images={aboutData.loopImages} />
                    </div>
                    <div className="aboutMeData">
                        <div className="subHeading">
                            {aboutData.subHeading}
                        </div>
                        <div className="addInfo">
                            {aboutData.moreInfo}
                        </div>
                        <div className="basicInfo">
                            <div className="basicInfoCol">
                                {aboutData.info.map((x,i)=>(
                                i<3&& <InfoRow key={i} title={x.title} value={x.value} />
                                ))}
                            </div>
                            <div className="basicInfoCol">
                                {aboutData.info.map((x,i)=>(
                                i>=3&& <InfoRow key={i} title={x.title} value={x.value} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
    )
}

export default AboutMain
