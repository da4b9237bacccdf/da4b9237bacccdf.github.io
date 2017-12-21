import React, { Component } from 'react';
import './App.css';

import MakeSelector from './components/MakeSelector/MakeSelector.js';

const url = 'https://www.edmunds.com/api/vehicle/v2/makes?fmt=json&state=NEW,USED,FUTURE&view=full';

class App extends Component {
  constructor() {
    super();
    this.state = {
      makes: []
    }
  }

  componentDidMount() {
    fetch(url).then(response => {
      return response.json();
    }).then(response => {
      this.setState({
        makes: response.makes
      });
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Edmunds Vehicle Appraisal</h1>
        </header>
        <p className="App-intro">
          <MakeSelector makes={this.state.makes}></MakeSelector>
        </p>
      </div>
    );
  }
}

export default App;
