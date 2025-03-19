import React, { useState } from "react";
import "./Projects.css";
import weatherApp from "./images/weatherApp.png";
import worldClock from "./images/worldClock.png";
import quoteGenerator from "./images/quoteGenerator.png";
import rockPaperScissor from "./images/rockPaperScissors.png";
import reactWeatherApp from "./images/reactWeatherApp.png";
import dictionary from "./images/dictionary.png";
import pawfectMatch from "./images/pawfectMatch.png";
import pomodoroTimer from "./images/pomodoroTimer.png";
import ProjectButtons from "./ProjectButtons";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const myProjects = [
    { title: "Pomodoro Timer", img: pomodoroTimer, code: "pomodoroTimer" },
    { title: "Pawfect Match", img: pawfectMatch, code: "pawfectMatch" },
    { title: "Weather App", img: reactWeatherApp, code: "reactWeatherApp" },
    { title: "Dictionary", img: dictionary, code: "dictionary" },
    { title: "Quote Generator", img: quoteGenerator, code: "quoteGenerator" },
    {
      title: "Rock, Paper, Scissor Game",
      img: rockPaperScissor,
      code: "rockPaperScissor",
    },
    { title: "Weather App", img: weatherApp, code: "weatherApp" },
    { title: "World Clock", img: worldClock, code: "worldClock" },
  ];

  const visibleProjects = showMore ? myProjects : myProjects.slice(0, 3);

  return (
    <div className="Projects">
      <h3>My Projects:</h3>
      <div className="row row-cols-1 row-cols-sm-3 g-4">
        {visibleProjects.map((project, index) => (
          <div key={index} className="col">
            <div className="card h-100 text-center">
              <img
                src={project.img}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <ProjectButtons project={project.code} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showMore && (
        <div className="showMoreButton">
          <button className="btn" onClick={() => setShowMore(true)}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
