import React from 'react'
import { BiShareAlt } from 'react-icons/bi';
import { GrInstagram } from 'react-icons/gr'
import { ImLinkedin } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import logo from '../../assets/images/logo.png'

function SocialArea({contactData,socialsData}) {

    function sendSocials(link){
        window.open(link, '_blank');
    }

    return (
        <div className="socialsArea1">
                        <div className="typeBox">
                            <div className="contactIconContainer center">
                                <BiShareAlt className="contactIcons"/>
                            </div>
                            <div className="subHeading">Socials</div>
                            <div className="socialIconsList">
                                <a 
                                    href={socialsData.instagram} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="socialsIconContainer center">
                                    <GrInstagram className="socialsIcon" />
                                </a> 
                                <a 
                                    href={socialsData.linkedin} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="socialsIconContainer center">
                                    <ImLinkedin className="socialsIcon" />
                                </a> 
                                <a 
                                    href={socialsData.somaniMusic} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="socialsIconContainer center">
                                    <img src={logo} className="socialsIconlogo" alt="logo" />
                                </a> 

                            </div>
                        </div>
                        <div className="contactTypes">

                            <div 
                            onClick={()=>sendSocials(`mailto:${contactData.email}`)} 
                            className="typeBox email-phone">
                                <div className="contactIconContainer center">
                                    <SiGmail className="contactIcons"/>
                                </div>
                                
                                <div className="subHeading">Email Me</div>
                                <div className=" center">
                                    {contactData.email}
                                </div>
                            </div>
                            
                            <div 
                            onClick={()=>sendSocials(`tel:${contactData.phone}`)}
                            className="typeBox email-phone">
                                <div className="contactIconContainer center">
                                    <BiShareAlt className="contactIcons"/>
                                </div>
                                <div className="subHeading">Call Me</div>
                                <div className=" center">
                                    {contactData.phone}
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
    )
}

export default SocialArea
