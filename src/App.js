import React, { createContext, useContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [placeArea, setPlaceArea] = useState({name: 'Cox’s  Bazar', 
  img: 'https://i.ibb.co/xFD0x6X/Sajek.png', 
  description: 'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.', 
  id: 'coxsbazar'});
  
  
  return (
    <UserContext.Provider value={[placeArea, setPlaceArea]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/booking/:id">
            <Booking />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <Route path="*">
						<NotFound></NotFound>
					</Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
