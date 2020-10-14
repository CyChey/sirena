import * as tokenService from './tokenService';

const BASE_URL = '/appointments/';

// index
export function getAllAppointments() {
    console.log('Getting appointments', tokenService.getTokenFromLocalStorage());
    const headers = {
        'Content-Type': 'application/json',
    }
    if (tokenService.getTokenFromLocalStorage()) {
        headers['Authorization'] = tokenService.getTokenFromLocalStorage();
    }
    return fetch(BASE_URL, {
        method: 'GET',
        headers,
    })
        .then(allAppointments => allAppointments.json())
        .catch(e => {
            window.history.replaceState(null, 'login', '/login')
        });
}

// create
export function createAppointment(appointmentToCreate) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(appointmentToCreate)
    }).then(newAppointment => newAppointment.json());
}
// delete
export function deleteAppointmentAPI(appointmentIdToDelete) {
    return fetch(`${BASE_URL}${appointmentIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    }).then(deletedAppointment => deletedAppointment.json());
}
//
export function updateAppointmentAPI(appointmentToUpdate) {
    return fetch(`${BASE_URL}${appointmentToUpdate._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(appointmentToUpdate)
    }).then(updatedAppointment => updatedAppointment.json());
}