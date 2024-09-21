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
      <FontAwesomeIcon icon={faHtml5} className="icons" />
      <FontAwesomeIcon icon={faCss3Alt} className="icons" />
      <FontAwesomeIcon icon={faJs} className="icons" />
      <FontAwesomeIcon icon={faReact} className="icons" />
      <FontAwesomeIcon icon={faPython} className="icons" />
      <FontAwesomeIcon icon={faGithub} className="icons" />
    </div>
  );
}
