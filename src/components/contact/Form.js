import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import loading from '../../assets/images/loading.svg'
import { FcCheckmark } from 'react-icons/fc'

function Form() {

    const [email, setEmail] = useState('')
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [name, setName] = useState('')
    const [emptyName, setEmptyName] = useState(false)
    const [invalidName, setInvalidName] = useState(false)
    const [subject, setSubject] = useState('')
    const [emptySubject, setEmptySubject] = useState(false)
    const [invalidSubject, setInvalidSubject] = useState(false)
    const [message, setMessage] = useState('')
    const [emptyMessage, setEmptyMessage] = useState(false)
    const [invalidMessage, setInvalidMessage] = useState(false)
    const [allSet, setAllSet] = useState(false)
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

    function validateEmail(email) 
    {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
        return re.test(email);
    }

    function sendEmail(e) {
        e.preventDefault();
        
        setAllSet(true);

        if(name.length === 0)
            {
                setEmptyName(true)
                setAllSet(false)
            }
        else if(name.length < 3) 
            {
                setInvalidName(true)
                setAllSet(false)
            }
        if(email.length === 0) 
            {
                setEmptyEmail(true)
                setAllSet(false)
            }
        else if(!validateEmail(email))
            {
                setInvalidEmail(true)
                setAllSet(false)
            }
        if(subject.length === 0) 
            {
                setEmptySubject(true)
                setAllSet(false)
            }
        else if(subject.length < 5)
            {
                setInvalidSubject(true)
                setAllSet(false)
            }
        if(message.length === 0) 
            {
                setEmptyMessage(true)
                setAllSet(false)
            }
        else if(message.length < 6)
            {
                setInvalidMessage(true)
                setAllSet(false)
            }

        if(allSet)
        {
            setSending(true)
            emailjs.sendForm('gmail', 'template_9iex7el', e.target, 'user_4b69Q0VgoiDQO5kxxKi5u')
            .then((result) => {
                  setSent(true)
                  setSending(false)
                  setEmail('')
                  setEmptyEmail(false)
                  setInvalidEmail(false)
                  setName('')
                  setEmptyName(false)
                  setInvalidName(false)
                  setSubject('')
                  setEmptySubject(false)
                  setInvalidSubject(false)
                  setMessage('')
                  setEmptyMessage(false)
                  setInvalidMessage(false)
  
            }, (error) => {
                console.log(error.text);  
            });
            e.target.reset()
        }
        
      }

    function  handleOnBlur(target){
       
        switch(target) {
            case "name":
                if(name.length === 0)
                    setEmptyName(true)
                else if(name.length < 3) 
                        setInvalidName(true)
                break;
            case "email":
                if(email.length === 0) 
                    setEmptyEmail(true)
                else if(!validateEmail(email))
                    setInvalidEmail(true)
                break;
            case "subject":
                if(subject.length === 0) 
                    setEmptySubject(true)
                else if(subject.length < 5)
                    setInvalidSubject(true)
                break;
            case "message"  :
                if(message.length === 0) 
                    setEmptyMessage(true);
                else if(message.length < 6)
                    setInvalidMessage(true)
                break;

            default:
              // code block
          }
    }


    return (
        <div className="contactForm">
                        <form onSubmit={sendEmail}>
                            <div className="name-mail">
                                <div className="text-field nameInput">
                                    <input  
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder=" " 
                                    onBlur={e=>handleOnBlur("name")} 
                                    value={name} 
                                    onChange={e =>{ setName(e.target.value); setEmptyName(false); setInvalidName(false)}}/>
                                    <label>Your Name</label>
                                    <div style={{visibility: emptyName||invalidName?'visible':'hidden'}}>
                                        {emptyName?
                                        <div className="error" >Name is required</div>:
                                        invalidName?<div className="error" >Name is too short</div>:<div className="error">f</div>
                                        }
                                    </div>
                                </div>
                                <div className="text-field emailInput">
                                    <input 
                                    type="text"  
                                    name="email" 
                                    id="email" 
                                    placeholder=" " 
                                    value={email}
                                    onBlur={e=>handleOnBlur("email")} 
                                    onChange={e =>{ setEmail(e.target.value); setEmptyEmail(false); setInvalidEmail(false)}}
                                    />
                                    <label>Your Email</label>
                                    <div style={{visibility: emptyEmail||invalidEmail?'visible':'hidden'}}>
                                        {emptyEmail?
                                        <div className="error" >Email is required</div>:
                                        invalidEmail?<div className="error" >Email is invalid</div>:<div className="error">f</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="text-field">
                                <input 
                                type="text" 
                                className="" 
                                name="subject" 
                                id="subject" 
                                placeholder=" " 
                                onBlur={e=>handleOnBlur("subject")} 
                                value={subject} 
                                onChange={e =>{ setSubject(e.target.value); setEmptySubject(false); setInvalidSubject(false)}}
                                />
                                <label>Subject</label>
                                <div style={{visibility: emptySubject||invalidSubject?'visible':'hidden'}}>
                                    {emptySubject?
                                    <div className="error" >Subject is required</div>:
                                    invalidSubject?<div className="error" >Subject is too short</div>:<div className="error">f</div>
                                    }
                                </div>                             
                            </div>
                            <div className="text-field">
                                <textarea 
                                rows="8" 
                                className="" 
                                name="message" 
                                id="message"  
                                placeholder=" " 

                                onBlur={e=>handleOnBlur("message")} 
                                value={message} 
                                onChange={e =>{ setMessage(e.target.value); setEmptyMessage(false); setInvalidMessage(false)}}
                                ></textarea>
                                <label>Message</label>
                                <div style={{visibility: emptyMessage||invalidMessage?'visible':'hidden'}}>
                                    {emptyMessage?
                                    <div className="error" >Message is required</div>:
                                    invalidMessage?<div className="error" >Message is too short</div>:<div className="error">f</div>
                                    }
                                </div>                                 
                            </div>
        
                            <div className="center"><button 
                            className="formButton" 
                            type="submit"
                            >Send Message</button></div>
                        </form>
                        <div className="send text-center" style={{visibility: sent||sending?'visible':'hidden'}}>
                            {sending?<div className="sending x-center">Sending....<img src={loading} height="20px" alt="loading" /></div>:
                            sent?<div className="sending ">Sent  <FcCheckmark  /></div>:<div className="sending">f</div>
                            }
                        </div>
                    </div>
    )
}

export default Form
