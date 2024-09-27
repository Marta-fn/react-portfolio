import "./App.css";
import Photo from "./Photo";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Marta Nogueira</h1>
          <h2>Front-end Developer</h2>
          <div className="row">
            <div className="col-12 col-md-3">
              <Photo />
            </div>
            <div className="col-12 col-md about">
              <About />
            </div>
          </div>
        </header>
        <div className="row skills">
          <Skills />
        </div>
        <div className="row">
          <Projects />
        </div>
        <footer>
          <Contacts />
        </footer>
      </div>
    </div>
  );
}

export default App;
