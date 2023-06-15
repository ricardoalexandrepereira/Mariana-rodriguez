import React from 'react'
import "./Footer.css" 
import wave from "../../img/wave3.png"
import {BsFacebook,BsInstagram,BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} alt="wave" style={{width:"100%"}} />
            <div className="f-content">
                
                <div className="f-icons">
                    
                    <BsLinkedin color='#fff' size={40}/>
                </div>
            </div>
    </div>
  )
}

export default Footer