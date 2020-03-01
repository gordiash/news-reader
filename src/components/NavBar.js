import React from "react";
import { NavLink } from "react-router-dom";

import CountryList from "./CountryList";

export default function NavBar(props) {
  return (
    <React.Fragment>
      <header className="container-fluid px-0">
        <nav className="navbar navbar-dark bg-dark d-flex flex-wrap align-items-center">

          <CountryList
            selectedLanguage={props.selectedLanguageHandler}
            language={props.language}
          />

          <ul className="navbar-nav col-sm-9 container-fluid d-flex flex-wrap flex-column flex-md-row justify-content-around">
            <NavLink
              className="nav-link mr-3"
              to={{
                pathname: "/general",
                state: {
                  category: "general",
                  language: props.language
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
                  category: "business",
                  language: props.language
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
                  category: "health",
                  language: props.language
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
                  category: "entertainment",
                  language: props.language
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
                  category: "science",
                  language: props.language
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
                  category: "sports",
                  language: props.language
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
                  category: "technology",
                  language: props.language
                }
              }}
            >
              Technology
            </NavLink>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
