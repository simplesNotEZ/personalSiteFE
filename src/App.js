import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="">
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
