import React from "react";
import { Switch, Route, Link } from "react-router-dom";

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
      articles: [],
      business: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <header className="container-fluid px-0">
          <nav className="navbar navbar-dark bg-dark fixed-top">

              <ul className="navbar-nav container-fluid d-flex flex-column flex-md-row justify-content-between">
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/general",
                    state: {
                      category: "general"
                    }
                  }}
                >
                  General
                </Link>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/business",
                    state: {
                      category: "business"
                    }
                  }}
                >
                  Business
                </Link>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/health",
                    state: {
                      category: "health"
                    }
                  }}
                >
                  Health
                </Link>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/entertainment",
                    state: {
                      category: "entertainment"
                    }
                  }}
                >
                  Entertainment
                </Link>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/science",
                    state: {
                      category: "science"
                    }
                  }}
                >
                  Science
                </Link>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/sports",
                    state: {
                      category: "sports"
                    }
                  }}
                >
                  Sports
                </Link>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/technology",
                    state: {
                      category: "technology"
                    }
                  }}
                >
                  Technology
                </Link>
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
