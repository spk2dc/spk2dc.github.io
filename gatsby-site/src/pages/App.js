import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Home from "./Home"
import Projects from "./Projects"
import Resume from "./Resume"
import Error from "../components/Error"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      <Switch>
        <Route exact path={`/portfolio`} component={Home} />
        <Route exact path={`/portfolio/projects`} component={Projects} />
        <Route exact path={`/portfolio/resume`} component={Resume} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App
