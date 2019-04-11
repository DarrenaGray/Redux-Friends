import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Login from './components/Login';
import FriendsListView from './views/FriendsListView';
import PrivateRoute from './components/PrivateRoute';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Friends</Link>
            </li>
            
          </ul>
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/protected" component={FriendsListView} />
        </div>
      </Router>
    );
  }
}

export default App;
