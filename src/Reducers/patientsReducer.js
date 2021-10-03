
const PatientsReducer = (state=[],action) => {
    switch(action.type) {
        case 'ADD_PATIENT': 
            return [...state,action.payload]
        default :
            return state

    }
}

export default PatientsReducer;






