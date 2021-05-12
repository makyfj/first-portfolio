// import Navbar from "./components/Navbar/Navbar";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
