import React, {useRef, useState} from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';

import {BsLinkedin} from "react-icons/bs"


const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sgniiic', 'template_a6847kp', form.current, 'QISCBgPypnWs81yrZ')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                
                    <span style={{fontSize:"3rem"}}> Contact me </span>
                    <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <p><small>Personal email :</small></p>
                    <span>marianarodriguez1300@gmail.com</span>
                    </div>
                    
                    <p>+(351) 931937684 </p>
            
                    
            <a href="https://www.linkedin.com/in/mariana-rodriguez-b990ab15a" target="_blank" rel="noreferrer">
               {/*  <img src={linkedin} alt="linkedin"/> */}
                <BsLinkedin size={50} color={"#1106ad"}/>
            </a>
                   
                {/* <div className="blur s-blur1" style={{background: "#35bb299e",left:"45rem",top:"12rem", width:"21rem", height:"11rem", zIndex:"-9"}}></div> */}
            </div>
        </div>

    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user-name' className='user' placeholder='Name' required />
            <input type="email" name='user-email' className='user' placeholder='Email' required />
            <textarea name="message" className='user' placeholder='Message' required/>
            <input type="submit" value="Send" className='button' />
            
                <span>{done && "Email sent, Thanks for contacting!"}</span>
           
            
           {/*  <div className="blur s-blur1" style={{background: "#35bb299e",left:"-45rem",top:"24rem", width:"21rem", height:"11rem", zIndex:"-9"}}></div>
            <div className="blur" style={{background:"#4c67b1",left:"15rem",top:"12rem", width:"21rem", height:"11rem", zIndex:"-9"}}></div> */}
        </form>
        
    </div>

    </div>
  )
}

export default Contact