import React,{createContext,useState} from 'react';
import Header from './components/Header'
import Patients from './pages/patientsPage'
import Doctors from './pages/doctorsPage'
import Appointments from './pages/appointmentsPage'
import Home from './pages/homePage'
import Modal from './components/modal';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [showModal,setShowModal] = useState(false)
  const [modalComponent,setModalComponent] = useState(null)
  return (
    <Router>
    <appContext.Provider
      value={{
          openModal: component=> {
            setModalComponent(component)
            setShowModal(true)
          },
          closeModal:() => setShowModal(false)
      }}
    >
      {showModal ? <Modal>{modalComponent}</Modal> : <></>}
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/patients' component={Patients} />
        <Route path='/doctors' component={Doctors} />
        <Route path='/appointments' component={Appointments} />
      </Switch>
    </appContext.Provider>
    </Router>
  );
}
export const appContext = createContext();
export default App;
