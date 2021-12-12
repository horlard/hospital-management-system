import {combineReducers} from 'redux';
import Patients from './patientsReducer';
import Doctors from './doctorsReducer'
import Appointments from './appointmentsReducer'

const Reducers = combineReducers({
    Patients,
    Doctors,
    Appointments
})

export default Reducers;