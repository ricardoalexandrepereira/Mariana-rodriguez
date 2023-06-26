import React from "react";
import "./Intro.css";
/* import FacebookF from "../../img/facebookF.png" */
/* import LinkedInF from "../../img/linkedinF.png" */
/* import InstagramF from "../../img/instagramF.png" */
import mariana from "../../img/marianarodriguez-removebg-preview.png";
import { Link } from "react-scroll";
/* import leaf1 from "../../img/leaf1.png" */
/* import leaf2 from "../../img/leaf2.png" */
/* import grass from "../../img/grass.png" */
/* import { motion } from "framer-motion" */

const Intro = () => {
  /* const transition = {duration : 2, type: "spring"} */

  return (
    <div className="intro">
      <div className="vector">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          
          
          viewBox="0 0 800 800"
          opacity="0.89"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="ggglitch-grad"
            >
              <stop
                stop-color="hsla(205, 1%, 99%, 1.00)"
                stop-opacity="1"
                offset="45%"
              ></stop>
              <stop
                stop-color="hsl(205, 69%, 80%)"
                stop-opacity="1"
                offset="100%"
              ></stop>
            </linearGradient>
            <clipPath id="SvgjsClipPath2854">
              <rect width="88.88888888888889" height="800" x="0" y="0"></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="177.77777777777777"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="355.55555555555554"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="533.3333333333333"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="711.1111111111111"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="888.8888888888889"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="1066.6666666666665"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="1244.4444444444443"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="1422.2222222222222"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="1600"
                y="0"
              ></rect>
            </clipPath>
            <clipPath id="SvgjsClipPath2855">
              <rect
                width="88.88888888888889"
                height="800"
                x="88.88888888888889"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="266.66666666666663"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="444.44444444444434"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="622.2222222222222"
                y="0"
              ></rect>
              <rect width="88.88888888888889" height="800" x="800" y="0"></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="977.7777777777776"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="1155.5555555555554"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="1333.3333333333333"
                y="0"
              ></rect>
              <rect
                width="88.88888888888889"
                height="800"
                x="1511.111111111111"
                y="0"
              ></rect>
            </clipPath>
          </defs>
          <g stroke-width="78" stroke="url(#ggglitch-grad)" fill="none">
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2854")'
              opacity="0.67"
              transform="translate(0 -667)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2855")'
              transform="translate(0 -694)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2854")'
              opacity="0.67"
              transform="translate(0 -547)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2855")'
              transform="translate(0 -574)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2854")'
              opacity="0.67"
              transform="translate(0 -427)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2855")'
              transform="translate(0 -454)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2854")'
              opacity="0.67"
              transform="translate(0 -307)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2855")'
              transform="translate(0 -334)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2854")'
              opacity="0.67"
              transform="translate(0 -187)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2855")'
              transform="translate(0 -214)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2854")'
              opacity="0.67"
              transform="translate(0 -67)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2855")'
              transform="translate(0 -94)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2854")'
              opacity="0.67"
              transform="translate(0 53)"
            ></polygon>
            <polygon
              points="-39,39 39,-39 839,761 761,839"
              stroke="none"
              fill="url(#ggglitch-grad)"
              clip-path='url("#SvgjsClipPath2855")'
              transform="translate(0 26)"
            ></polygon>
          </g>
        </svg>
      </div>

      <div className="i-left">
        <div className="i-name">
          <span>Hi ! i am</span>
          <span style={{ fontSize: "4rem" }}>
            {/* <img src={grass} alt="grass" /> */}Mariana
          </span>
          <span id="present">
            Bachelor of Science (BSc) in biotechnology and Postgraduate of
            Energy & Climate, University of Antwerp
          </span>
        </div>
        <Link spy={true} to="experience" smooth={true} activeClass="activeClass">
            <div className="button i-button" style={{fontSize:".7rem"}}>Looking for opportunities</div>
        </Link>

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
  );
};

export default Intro;
