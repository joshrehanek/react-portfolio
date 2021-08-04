//import dependencies
import React from 'react'
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import components
import Nav from "./components/Navbar/Nav"
import Home from "./components/pages/Home"


export default function App() {
  return (
    <div className="App">
    {/* uses react-router to set Navbar and switch path */}
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>

    </div>
  )
}
