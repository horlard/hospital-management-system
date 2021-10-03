

const DoctorsReducer=(state=[],action) => {
    switch(action.type) {
        case 'ADD_DOCTOR' : 
            return [...state,action.payload]
        default : 
            return state;
    }
}

export default DoctorsReducer;