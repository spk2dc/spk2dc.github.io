import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Error from "../components/Error"
import { Link } from "gatsby"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
      <Switch>
        <Link to="/home">Home</Link>
        <Link to="/projects/">Projects</Link>
        <Link to="/resume/">Resume</Link>
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App
