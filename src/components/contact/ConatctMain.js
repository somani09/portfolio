import React from 'react'
import Head from '../common/head/Head'
import {motion} from 'framer-motion'
import {fadeInVariant} from '../../data/variants'
import { contactData } from '../../data/contactData'
import {socialsData} from '../../data/socialsData'
import SocialArea from './SocialArea'
import Form from './Form'

function ConatctMain() {
    return (
        <motion.div 
                className="contact flex-col"
                variants={fadeInVariant}
                >

                <Head title="CONTACT" text={contactData.contactIntro} />

                <div className="content">
                    <Form />

                    <SocialArea contactData={contactData} socialsData={socialsData} />

                </div>

            </motion.div>
    )
}

export default ConatctMain
