import React from "react";
import "./Services.css";
import Card from "../card/Card";
import HeartEmoji from "../../img/leaf1.png";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>About Me </span>
        
          <span style={{fontSize:"2rem"}}>Who Am I? </span>
        
        <span style={{ marginBottom: "3rem" }}>
        I am Argentinian who emigrate to Europe following my heart and new adventures. I love plants and animals in that sense, I found myself hooked by how people in Europe take hands on actions to protect the environment as we all live in the same planet, and we do not have a planet B. What I believe? I believed we can use the know-how found in biotechnology to the conservation, restoration of ecosystems and endangered species. What drives me the most, is to learn how different technologies can be use to have a positive impact on the environment while having profitable business. 
        </span>
        <a style={{ textDecoration: "none" }} download href="/">
          <div className="button i-button">Download CV</div>
        </a>
        {/*   <div
          className="blur s-blur1"
          style={{
            background: "#35bb299e",
            left: "45rem",
            top: "12rem",
            width: "21rem",
            height: "11rem",
            zIndex: "-9",
          }}
        ></div> */}
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "14rem", opacity: 0 }}
          whileInView={{ left: "35%", opacity: 1 }}
          transition={transition}
          style={{ left: "5rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Skills"}
            detail={"Laboratory skills, Research skills, Work for objectives"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-14rem", opacity: 0 }}
          whileInView={{ left: "5%", opacity: 1 }}
          transition={transition}
          style={{ top: "17rem", left: "10rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Skills"}
            detail={"Time management, Great communication, Well organized "}
          />
        </motion.div>

        <motion.div
          initial={{ left: "10rem", opacity: 0 }}
          whileInView={{ left: "65%", opacity: 1 }}
          transition={transition}
          style={{ top: "21rem", left: "12rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Skills"}
            detail={"Problem solving, MS Office Suite, Statistics software InfoStat "}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
