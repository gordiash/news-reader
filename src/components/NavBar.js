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
          <Navbar.Collapse id="responsive-navbar-nav">
          <CountryList
                selectedLanguage={props.selectedLanguageHandler}
                language={props.language}
              />
            <Nav>
              
              <Nav.Link className="align-content-center">
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
              </Nav.Link>
              <Nav.Link>
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
              </Nav.Link>
              <Nav.Link>
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
              </Nav.Link>
              <Nav.Link>
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
              </Nav.Link>
              <Nav.Link>
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
              </Nav.Link>
              <Nav.Link>
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
              </Nav.Link>
              <Nav.Link>
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
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </React.Fragment>
  );
}
