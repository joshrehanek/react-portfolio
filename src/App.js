import React from 'react'
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from "./components/Navbar/Nav"
import Home from "./components/pages/Home"


export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </Router>

    </div>
  )
}
