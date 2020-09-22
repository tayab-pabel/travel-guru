import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking/:id">
            <Booking />
          </Route>
          <Route path="*">
						<NotFound></NotFound>
					</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
