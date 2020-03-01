import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import General from "./components/General";
import Weather from "./components/Weather"

import "./App.css";

export default function App() {
  let [selectedLanguage, setSelectedLanguage] = useState("gb");
  let [perPage, setPerPage] = useState();
  let [city, setCity] = useState("London");

  const selectedLanguageHandler = e => {
    setSelectedLanguage(e.target.value);
  };

  const selectedPerPage = e => {
    setPerPage(e.target.value);
  };

  // const getCity =e=>{
  //   setCity(e.target.value)
  // }

  return (
    <React.Fragment>
      <NavBar
        selectedLanguageHandler={selectedLanguageHandler}
        language={selectedLanguage}
        selectedPerPage={selectedPerPage}
        perPage={perPage}
      />

      <Switch>
        <Route
          path="/general"
          render={props => (
            <General
              {...props}
              selectedPerPage={selectedPerPage}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/business"
          render={props => (
            <General
              {...props}
              selectedPerPage={selectedPerPage}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/health"
          render={props => (
            <General
              {...props}
              selectedPerPage={selectedPerPage}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/entertainment"
          render={props => (
            <General
              {...props}
              selectedPerPage={selectedPerPage}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/science"
          render={props => (
            <General
              {...props}
              selectedPerPage={selectedPerPage}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/sports"
          render={props => (
            <General
              {...props}
              selectedPerPage={selectedPerPage}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/technology"
          render={props => (
            <General
              {...props}
              selectedPerPage={selectedPerPage}
              perPage={perPage}
            />
          )}
        />
        <Route
          path="/weather"
          render={props => (
            <Weather
              {...props}
              // getCity={getCity}
              city={city}
            />
          )}
        />
      </Switch>
    </React.Fragment>
  );
}
