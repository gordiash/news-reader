import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import General from "./components/General";

import "./App.css";

export default function App() {
  let [selectedLanguage, setSelectedLanguage] = useState("gb");
  let [perPage, setPerPage] = useState(10);

  const selectedLanguageHandler = e => {
    setSelectedLanguage(e.target.value);
  };

  const selectedPerPage = e => {
    setPerPage(e.target.value);
  };

 
  return (
    <React.Fragment>
      <NavBar
        selectedLanguageHandler={selectedLanguageHandler}
        language={selectedLanguage}
      />

      <Switch>
      <Route
          path="/" exact
          render={props => (
            <General
              {...props}
              category="general"
              selectedPerPage={selectedPerPage}
              perPage={perPage}
              language={selectedLanguage}
            
            />
          )}
        />
      
        <Route
          path="/business"
          render={props => (
            <General
              {...props}
              category="business"
              selectedPerPage={selectedPerPage}
              perPage={perPage}
              language={selectedLanguage}
            />
          )}
        />
        <Route
          path="/health"
          render={props => (
            <General
              {...props}
              category="health"
              selectedPerPage={selectedPerPage}
              perPage={perPage}
              language={selectedLanguage}
            />
          )}
        />
        <Route
          path="/entertainment"
          render={props => (
            <General
              {...props}
              category="entertainment"
              selectedPerPage={selectedPerPage}
              perPage={perPage}
              language={selectedLanguage}
            />
          )}
        />
        <Route
          path="/science"
          render={props => (
            <General
              {...props}
              category="science"
              selectedPerPage={selectedPerPage}
              perPage={perPage}
              language={selectedLanguage}
            />
          )}
        />
        <Route
          path="/sports"
          render={props => (
            <General
              {...props}
              category="sports"
              selectedPerPage={selectedPerPage}
              perPage={perPage}
              language={selectedLanguage}
            />
          )}
        />
        <Route
          path="/technology"
          render={props => (
            <General
              {...props}
              category="technology"
              selectedPerPage={selectedPerPage}
              perPage={perPage}
              language={selectedLanguage}
            />
          )}
        />
       
      </Switch>
    </React.Fragment>
  );
}
