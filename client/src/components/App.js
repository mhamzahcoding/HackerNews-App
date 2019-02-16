import React, { Component } from 'react';
import NewsResults from './NewsResults';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron" style={{width:"100%"}}>
            <h1>Hacker News Searching Platform</h1>
          </div>
        </div>
        <div className="row">
          <Router>
            <Switch>
              <Route exact path='/' component={NewsResults} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
