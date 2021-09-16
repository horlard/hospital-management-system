import React from 'react';
import Header from './components/Header'
import RouterCard from './components/routerCard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <RouterCard/>
      <Switch>
        <Route path='/' exact>Home</Route>
        <Route path='/patients'>Patients</Route>
        <Route path='/doctors'>Doctors</Route>
        <Route path='/appointments'>Appointments</Route>
      </Switch>
    </Router>
  );
}

export default App;
