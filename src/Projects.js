import React, { useState } from "react";
import "./Projects.css";
import weatherApp from "./images/weatherApp.png";
import worldClock from "./images/worldClock.png";
import sheCodesChallenge from "./images/SheCodesChallenge.png";
import quoteGenerator from "./images/quoteGenerator.png";
import rockPaperScissor from "./images/rockPaperScissors.png";
import reactWeatherApp from "./images/reactWeatherApp.png";
import dictionary from "./images/dictionary.png";
import ProjectButtons from "./ProjectButtons";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(true);
  }

  return (
    <div className="Projects">
      <h3>My Projects:</h3>
      <div class="row">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card w-100 text-center">
            <img
              src={reactWeatherApp}
              class="card-img-top"
              alt="React Weather App Project"
            />
            <div class="card-body">
              <h5 class="card-title">Weather App</h5>
              <ProjectButtons project="reactWeatherApp" />
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card w-100 text-center">
            <img
              src={dictionary}
              class="card-img-top"
              alt="Dictionary Project"
            />
            <div class="card-body">
              <h5 class="card-title">Dictionary</h5>
              <ProjectButtons project="dictionary" />
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card w-100 text-center">
            <img
              src={quoteGenerator}
              class="card-img-top"
              alt="Quote Generator Project"
            />
            <div class="card-body">
              <h5 class="card-title">Quote Generator</h5>
              <ProjectButtons project="quoteGenerator" />
            </div>
          </div>
        </div>
      </div>
      {showMore && (
        <>
          <div class="row">
            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card w-100 text-center">
                <img
                  src={sheCodesChallenge}
                  class="card-img-top"
                  alt="SheCodes Challenge Project"
                />
                <div class="card-body">
                  <h5 class="card-title">SheCodes Challenge Project</h5>
                  <ProjectButtons project="sheCodesChallenge" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card w-100 text-center">
                <img
                  src={rockPaperScissor}
                  class="card-img-top"
                  alt="Rock Paper Scissor Project"
                />
                <div class="card-body">
                  <h5 class="card-title">Rock, Paper, Scissor Game</h5>
                  <ProjectButtons project="rockPaperScissor" />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card w-100 text-center">
                <img
                  src={weatherApp}
                  class="card-img-top"
                  alt="Weather App Project"
                />
                <div class="card-body">
                  <h5 class="card-title">Weather App</h5>
                  <ProjectButtons project="weatherApp" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card w-100 text-center">
                <img
                  src={worldClock}
                  class="card-img-top"
                  alt="World Clock Project"
                />
                <div class="card-body">
                  <h5 class="card-title">World Clock</h5>
                  <ProjectButtons project="worldClock" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!showMore && (
        <div className="showMoreButton">
          <button className="btn" onClick={handleShowMore}>
            Show More Projects
          </button>
        </div>
      )}
    </div>
  );
}
