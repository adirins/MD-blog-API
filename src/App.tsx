import React from 'react';
import "flexboxgrid";
import './App.css';
import { Home } from './components/Pages/home'
import { About } from './components/Pages/about'
import { NotFound } from './components/Pages/NotFound'
import Article from './components/Pages/article'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const App = () => {

    return (
      <Router>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/article/1">Articles</Link>
        <Switch>
          <Route exact path="/">
            <Home />             
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/article/:id" >
            <Article />
          </Route>
          <Route path="/">
            <NotFound
              currentURL={window.location.href}
            />
          </Route>
        </Switch>
      </Router>
    );
  };
export default App;
