import React from 'react';
import Header from './components/Header'
import Patients from './pages/patientsPage'
import Doctors from './pages/doctorsPage'
import Appointments from './pages/appointmentsPage'
import Home from './pages/homePage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/patients'>
          <Patients/>
        </Route>
        <Route path='/doctors'>
          <Doctors/>
        </Route>
        <Route path='/appointments'>
          <Appointments/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
