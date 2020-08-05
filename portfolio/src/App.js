import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/projects/Projects";
import Resume from "./components/Resume";
import Error from "./components/Error";
import { BrowserRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import configureStore from "./store/configure-store";
import { Provider } from "react-redux";

function App() {
  const store = configureStore({ history });

  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Footer />
          <Switch>
            <Route exact path='/portfolio' component={Home} />
            <Route exact path='/portfolio/projects' component={Projects} />
            <Route exact path='/portfolio/resume' component={Resume} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
