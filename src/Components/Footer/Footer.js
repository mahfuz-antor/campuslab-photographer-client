import React from "react";
// import event from "../../Images/header.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div
      style={{
        paddingTop: "5%",
        backgroundColor: "#52bcd4",
        color: "black",
        marginTop: "",
        textAlign: 'center'
      }}
    >
      <div
        style={{ marginRight: "0px", padding: "0px 2% 1% 3%" }}
        className="row"
      >
        <div className="col-md-5 pl-5">
          <h2>ABOUT US</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam
            unde corrupti ducimus magnam, at inventore in exercitationem
            molestias molestiae eaque aspernatur vitae, quasi, quos nulla nemo
            dolorum voluptas odit. Repudiandae itaque dolor possimus, esse iusto
            iste nulla. Ex, quos? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam
            unde corrupti ducimus magnam, at inventore in exercitationem
            molestias molestiae eaque aspernatur suorer, qua{" "}
          </p>
        </div>
        <div className="col-md-6 pl-5">
          <h2>OUR ADDRESS</h2>
          <h6><FontAwesomeIcon className=" mt-3" icon={faHome} size="lg" /> OUR OFFICE LOCATION:</h6>
          <p style={{ borderBottom: "1px solid secondary", paddingBottom: "15px" }}>
            #23, Ranibazar, Rajshahi-6100, Bangladesh
          </p>
          <h6><FontAwesomeIcon className=" mt-3" icon={faPhoneAlt} size="lg" /> 012345567890</h6>
          <p >
            
          </p>
          <h6><FontAwesomeIcon className=" mt-3" icon={faEnvelope} size="lg" /> antorcnj@gmail.com</h6>
          <p></p>
        </div>
      </div>
      <div className=" text-center  ">
        <p className="p-3" style={{ borderTop: "1px solid white" }}>
          Copyright © {new Date().getFullYear()} | <b>CampusLab PhotoGrapher</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
