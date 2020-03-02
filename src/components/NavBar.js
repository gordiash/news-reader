import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import CountryList from "./CountryList";

export default function NavBar(props) {
  return (
    <React.Fragment>
      <header className="container-fluid px-0">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <CountryList
            selectedLanguage={props.selectedLanguageHandler}
            language={props.language}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <NavLink className="nav-link mr-3" exact to={"/"}>
                Home
              </NavLink>

              <NavLink className="nav-link mr-3" to={"/business"}>
                Business
              </NavLink>

              <NavLink className="nav-link mr-3" to={"/health"}>
                Health
              </NavLink>

              <NavLink className="nav-link mr-3" to={"/entertainment"}>
                Entertainment
              </NavLink>

              <NavLink className="nav-link mr-3" to={"/science"}>
                Science
              </NavLink>

              <NavLink className="nav-link mr-3" to={"/sports"}>
                Sports
              </NavLink>

              <NavLink className="nav-link mr-5" to={"/technology"}>
                Technology
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </React.Fragment>
  );
}
