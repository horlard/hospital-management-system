
const PatientsReducer = (state=[],action) => {
    
    switch(action.type) {
        case 'ADD_PATIENT': 
            return [...state,action.payload]
        case 'DELETE_PATIENT': 
            return [...state,action.payload.patient]
        default :
            return state

    }
}

export default PatientsReducer;






