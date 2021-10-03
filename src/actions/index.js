export const addPatient=formValues=> {
    return {
        type: 'ADD_PATIENT',
        payload: formValues
    }
}

export const addDoctor= formValues=> {
    return {
        type: 'ADD_DOCTOR',
        payload: formValues
    }
}