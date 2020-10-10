import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Siren
            <small class="text-muted">Salon De Beauté</small>
          </h2>
        </div>
      </Router>
    );
  }
}

export default App;
