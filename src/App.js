import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import CountryList from "./components/CountryList";
import General from "./components/General";
import Business from "./components/Business";
import Health from "./components/Health";
import Entertainment from "./components/Entertainment";
import Science from "./components/Science";
import Sports from "./components/Sports";
import Technology from "./components/Technology";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <React.Fragment>
        <header className="container-fluid px-0">
          <nav className="navbar navbar-dark bg-dark fixed-top d-flex flex-wrap align-items-center">

          <CountryList />

            <ul className="navbar-nav container-fluid w-75 d-flex flex-wrap flex-row flex-md-row justify-content-center">

              <NavLink
                className="nav-link mr-3"
                to={{
                  pathname: "/general",
                  state: {
                    category: "general"
                  }
                }}
              >
                General
              </NavLink>
              <NavLink
                className="nav-link mr-3"
                to={{
                  pathname: "/business",
                  state: {
                    category: "business"
                  }
                }}
              >
                Business
              </NavLink>
              <NavLink
                className="nav-link mr-3"
                to={{
                  pathname: "/health",
                  state: {
                    category: "health"
                  }
                }}
              >
                Health
              </NavLink>
              <NavLink
                className="nav-link mr-3"
                to={{
                  pathname: "/entertainment",
                  state: {
                    category: "entertainment"
                  }
                }}
              >
                Entertainment
              </NavLink>
              <NavLink
                className="nav-link mr-3"
                to={{
                  pathname: "/science",
                  state: {
                    category: "science"
                  }
                }}
              >
                Science
              </NavLink>
              <NavLink
                className="nav-link mr-3"
                to={{
                  pathname: "/sports",
                  state: {
                    category: "sports"
                  }
                }}
              >
                Sports
              </NavLink>
              <NavLink
                className="nav-link"
                to={{
                  pathname: "/technology",
                  state: {
                    category: "technology"
                  }
                }}
              >
                Technology
              </NavLink>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/general" component={General} />
          <Route path="/business" component={Business} />
          <Route path="/health" component={Health} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/science" component={Science} />
          <Route path="/sports" component={Sports} />
          <Route path="/technology" component={Technology} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
