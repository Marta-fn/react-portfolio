import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <div className="Skills">
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faHtml5} className="icons" />
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faCss3Alt} className="icons" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faJs} className="icons" />
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faReact} className="icons" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faPython} className="icons" />
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faGithub} className="icons" />
        </div>
      </div>
    </div>
  );
}
