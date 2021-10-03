import {combineReducers} from 'redux';
import Patients from './patientsReducer';
import Doctors from './doctorsReducer'

const Reducers = combineReducers({
    Patients,
    Doctors
})

export default Reducers;