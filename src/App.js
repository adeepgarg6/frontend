import React, { Component } from 'react';
import Products from './components/ProductList';
import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">courses</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
          <div className="container">
            <br/>
            <Route exact path="/" component={Products} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
