import React, { Component } from "react";
import CounterContainer from "./CounterContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer initialCount={100} />
        <CounterContainer initialCount={15} />
        <CounterContainer initialCount={10} />
      </div>
    );
  }
}

export default App;
