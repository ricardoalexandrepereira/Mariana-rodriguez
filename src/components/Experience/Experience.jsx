import React from "react";
import "./Experience.css";
import b from "../../img/belgium.png"
import a from "../../img/argentina.png"
import t from "../../img/taiwan.png"

const Experience = () => {
  return (
    <div className="experience" id="Experience">
      <div className="awesome">
      
        <span>Experience </span>

        <span style={{ fontSize: "2rem" }}>
          Manager • Boereboom In vitro Portugal<br></br>
          <span style={{ fontSize: "1rem" }}>2022–Currently </span>
        </span>

        <span style={{ marginBottom: "3rem" }}>
        Manage the day-to-day operations of the Tissue Culture Lab with primary oversight responsibilities including production planning, media preparation, sterilization, tracking plants, and all facility logistics. Provide training and oversight to new technicians. Ensure all employees are operating safely and following all company health and safety standards. Do the weekly production schedule/planning. Ensure that the laboratory is kept in a clean and good operating condition, including working with outside vendors as needed. Track and organize preventative maintenance, calibration, and any troubleshooting of equipment. In collaboration with other team members, develop, update, and maintain accurate protocols for tissue culture process.
        </span>
      </div>

      <div className="awesome">
        <span></span>

        <span style={{ fontSize: "2rem" }}>
        Internship • Research group Plants and Ecosystems Research Group (PLECO) • University of Antwerp. 
          <br></br>
          <span style={{ fontSize: "1rem" }}>2022–2022 </span>
        </span>

        <span style={{ marginBottom: "3rem" }}>
        Project: Carbonation for Agriculture use: A Circular Economy Approach Experiment. Set up CO2 and N2O fluxes measurement with Los Gatos, LGR, CA, Analyser. Quantification of plants growth and  pH measurement of rhizons samples.
        </span>
      </div>

      <div className="awesome">
        <span></span>

        <span style={{ fontSize: "2rem" }}>
        Internship • Research group Plants and Ecosystems Research Group (PLECO) • University of Antwerp. 
          <br></br>
          <span style={{ fontSize: "1rem" }}>2022–2022 </span>
        </span>

        <span style={{ marginBottom: "3rem" }}>
        Project: Combined Effect of Earthworms and Enhanced Silicate Weathering for Reducing Atmospheric CO2 and N2O Concentrations. Conducting experiments on Soil and water sample.  Sequestration of CO2 and N2O fluxes measurement. Laboratory measurement e.g., pH measurement.  Recording and statistical data analysing Presenting results to senior/other research staff Writing research reports.
        </span>
      </div>
      <div className="awesome">
        <span></span>

        <span style={{ fontSize: "2rem" }}>
        Laboratorian technician • Boereboom Invitro, Portugal, Lisbon (Portugal) • Lisboa 
          <br></br>
          <span style={{ fontSize: "1rem" }}>2018–2019 </span>
        </span>

        <span style={{ marginBottom: "3rem" }}>
        Aseptic Plants tissue culture.  Plants Sanitation, establishment of various plants varieties. Propagation of ornamentals plants. Assessment Dispatch production.
        </span>
      </div>

      <div className="awesome">
        <span></span>

        <span style={{ fontSize: "2rem" }}>
        Laboratorian technician • Biovida • Chilecito, La Rioja, Argentina. 
          <br></br>
          <span style={{ fontSize: "1rem" }}>2013–2017 </span>
        </span>

        <span style={{ marginBottom: "3rem" }}>
        Planning and conducting experiments to new protocol implementation. Develop, standardize, and optimize all tissue culture processes. Propagation of Woody plants. Conducting fieldwork i.e.transfer of plantlets in the greenhouse environment. Training of permanent and transitional staff.
        </span>
      </div>
      

      <div>
      <div className="awesome">
        <span style={{
           marginBottom:"2rem" 
        }}>Education</span>

        <span style={{ fontSize: "1.5rem", marginBottom:"2rem"}}>
        Postgraduate of Energy & Climate, University of Antwerp (Antwerp, Belgium) 
          <br></br>
          <span style={{ fontSize: "1rem" }}>2020–2021 </span> <img src={b} alt="belgium" style={{width:"20px"}} />
        </span>
        
      </div>

      <div className="awesome">
        <span></span>

        <span style={{ fontSize: "1.5rem", marginBottom:"2rem"  }}>
        Workshop on Plant Tissue Culture and Healthy Seedlings, ICDF Fund, Taichung (Taiwan)  
          <br></br>
          <span style={{ fontSize: "1rem" }}>2014–2014 </span> <img src={t} alt="belgium" style={{width:"20px"}} />
        </span>
      </div>

      <div className="awesome">
        <span></span>

        <span style={{ fontSize: "1.5rem",  marginBottom:"2rem"  }}>
        Bachelor of Science (BSc) in biotechnology, National University of Tucumán, Tucumán (Argentina)  
          <br></br>
          <span style={{ fontSize: "1rem" }}>2013–2017 </span> <img src={a} alt="belgium" style={{width:"20px"}} />
        </span>
      </div>
      
      </div>

    </div>
  );
};

export default Experience;
