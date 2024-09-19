import "./App.css";
import Photo from "./Photo";
import About from "./About";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Marta Nogueira</h1>
        </header>
        <div className="row">
          <div className="col-12 col-md-3">
            <Photo />
          </div>
          <div className="col-12 col-md">
            <About />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md">Projects</div>
          <div className="col-12 col-md-2">
            <Skills />
          </div>
        </div>
        <footer>Contacts</footer>
      </div>
    </div>
  );
}

export default App;
