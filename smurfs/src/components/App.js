import React, { Component } from "react";
import "./App.css";

//components
import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>

        <SmurfList />
      </div>
    );
  }
}

export default App;
