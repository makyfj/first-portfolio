import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
