import React, { Component } from 'react';
import Navigator from './layouts/navigator';
import Routes from './routes';
import './assets/css/layout.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigator />
      <Routes />
      </div>
    );
  }
}

export default App;
