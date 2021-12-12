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

export const addAppointments = formValues=> {
    return {
        type: 'ADD_APPOINTMENT',
        payload:formValues
    }
}

export const deletePatient = (id,i,getState)=> {
    const patient= [...(getState().Patients)]
    patient.splice(i,1)
    console.log(patient)
    return {
        type: 'DELETE_PATIENT',
        payload: {
            id,
            patient
        }
    }
}