import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import circuit1 from './images/circuit1.jpg';
import bottledLightning from './images/bottledLightning.jpg';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/"
                render={ (props) => {
                  return (<Home {...props} title="Homie Page" />)
                  }
                }
          />  
        
        
      </div>
      </Router>
    );
  }
}

export default App;
