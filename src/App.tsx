import React from "react";
import "flexboxgrid";
import "./App.css";
import { Hero } from "./components/Pages/hero";
import { FullArticle } from "./components/Pages/fullArticle";
import { About } from "./components/Pages/about";
import { NotFound } from "./components/Pages/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <div className="navig">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Hero/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/article/:id">
          <FullArticle/>
        </Route>
        <Route path="/">
          <NotFound currentURL={window.location.href} />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
