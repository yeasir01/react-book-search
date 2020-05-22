import React, { Component } from "react";
import Header from '../header';
import Hero from '../hero';
import Results from '../results';
import './global.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Results />
      </div>
    );
  }
}

export default App;
