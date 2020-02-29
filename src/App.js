import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import General from "./components/General";


import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     selectedLanguage:""
    };
  }

  selectedLanguageHandler=(e)=>{
    this.setState({
      selectedLanguage:e.target.value
    })
  }

  render() {
console.log(this.state.selectedLanguage)

    return (
      <React.Fragment>
       <NavBar selectedLanguageHandler={this.selectedLanguageHandler}
         language={this.state.selectedLanguage}
       />

        <Switch>
          <Route path="/general" component={General} />
          <Route path="/business" component={General} />
          <Route path="/health" component={General} />
          <Route path="/entertainment" component={General} />
          <Route path="/science" component={General} />
          <Route path="/sports" component={General} />
          <Route path="/technology" component={General} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
