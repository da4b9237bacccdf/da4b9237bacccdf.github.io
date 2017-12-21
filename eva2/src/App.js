import React, { Component } from 'react';
import './App.css';

import MakeSelector from './components/MakeSelector/MakeSelector.js';
import ModelSelector from './components/ModelSelector/ModelSelector.js';

const url = 'https://www.edmunds.com/api/vehicle/v2/makes?fmt=json&state=NEW,USED,FUTURE&view=full';

class App extends Component {
  constructor() {
    super();
    this.state = {
      makes: [],
      models: [],
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

  handleMakeSelect(e) {
    const models = this.state.models || [];
    this.state.makes.forEach(make => {
      if (make.id === +e.target.value) {
        this.setState({
          models: make.models
        });
      }
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Edmunds Vehicle Appraisal</h1>
        </header>
        <div className="App-intro">
          <div>
            <MakeSelector makes={this.state.makes} onChange={this.handleMakeSelect.bind(this)}></MakeSelector>
          </div>
          <div>
            {this.state.models.length > 0 ? (<ModelSelector models={this.state.models}></ModelSelector>) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
