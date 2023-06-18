import React from 'react'
import "./Intro.css"
/* import FacebookF from "../../img/facebookF.png" */
/* import LinkedInF from "../../img/linkedinF.png" */
/* import InstagramF from "../../img/instagramF.png" */
import mariana from "../../img/marianarodriguez-removebg-preview.png"
/* import leaf1 from "../../img/leaf1.png" */
/* import leaf2 from "../../img/leaf2.png" */
/* import grass from "../../img/grass.png" */
/* import { motion } from "framer-motion" */


const Intro = () => {

    /* const transition = {duration : 2, type: "spring"} */

  return (
    <div className='intro'>

        <div className="i-left">
            <div className="i-name">
                <span>Hi ! i am</span>
                <span style={{fontSize:"4rem"}}>{/* <img src={grass} alt="grass" /> */}Mariana</span>
                <span id='present'>Bachelor of Science (BSc) in biotechnology and
                Postgraduate of Energy & Climate, University of Antwerp 
                </span>
            </div>
            <div className="button i-button">Hire me</div>
           
                {/* <a href="/"><img src={InstagramF} alt="instagram" /></a>
                <a href="/"><img src={FacebookF} alt="instagram" /></a> */}
                
        </div>
           
        <div className="i-right">
           
           <img src={mariana} alt="mariana" />
           {/* <motion.img 
           initial={{top:"-80%", left:'20%', opacity:0}}
           whileInView={{top:"-70%",left: '13%', opacity:1}}
           transition={transition}
           src={leaf1} alt="leaf" /> */}

          {/*  <motion.img 
           initial={{left: '-36%', opacity:0}}
           whileInView={{left: '-24%', opacity:1}}
           transition={transition}
           src={leaf2} alt="leaf" /> */}
           
           {/* blur background*/}
            {/* <div className="blur" style={{background:"#3fe05a", zIndex:"-9",left:"10rem",top:"1rem"}}></div> */}
            {/* <div className="blur" style={{background:"#4c67b1", top:"21rem",left:"-15rem", width:"21rem", height:"11rem", zIndex:"-9"}}></div> */}
        </div>

    </div>
  )
}

export default Intro