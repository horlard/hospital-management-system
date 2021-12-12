

const AppointmentReducer = (state=[],action) => {
    switch(action.type) {
        case 'ADD_APPOINTMENT' : 
            return [...state,action.payload]
        default : 
            return state;
    }
}


export default AppointmentReducer;