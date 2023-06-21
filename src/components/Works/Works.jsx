import React from "react";
import "./Works.css";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import icon4 from "../../img/icon4.png";
import earth from "../../img/earth.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="works">
      {/*left side*/}
      <div className="awesome">
        <span>let's be conscious!</span>

        <span style={{ fontSize: "2rem" }}>Planet</span>

        <span>
        More than a century of burning fossil fuels as well as unequal and unsustainable energy and land use have led to global warming of 1.1°C above pre -industrial levels. This has resulted in more frequent and more intense extreme weather events that have caused increasingly dangerous impacts on nature and people in every region of the world. But there are multiple, feasible and effective options to reduce greenhouse gas emissions.Taking effective and equitable climate action will not only reduce losses and damages for nature and people, it will also provide wider benefits. 
        </span>

        {/*  <div className="blur s-blur1" style={{background: "#35bb299e",left:"10rem",top:"-8rem", width:"21rem", height:"11rem", zIndex:"-9"}}></div> */}
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={icon1} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={icon2} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={earth} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={icon4} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={icon3} alt="upwork" />
          </div>
        </motion.div>
        {/* background colored circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle greenCircle"></div>
      </div>
    </div>
  );
};

export default Works;
