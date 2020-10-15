import React from 'react';
import userService from '../../utils/userService';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import Typography from '@material-ui/core/Typography';
import './Profile.css';

function Profile({ appointmentsFromParent = [], handleDeleteAppointment }) {
    return (
        <>
            <div className="profileBanner">
                <Typography
                    className="profileName"
                    variant="h5"
                    style={{ color: '#1c788f' }}
                >{userService.getUser().name ? `HELLO, ${userService.getUser().name.toUpperCase()}` : ''}</Typography>
            </div>
            <div>
                <Typography
                    style={{ color: '#1c788f' }}
                    className="upcoming"
                >UPCOMING APPOINTMENTS</Typography>
                {Array.isArray(appointmentsFromParent) && appointmentsFromParent.map(appointment =>
                    <AppointmentCard
                        key={appointment._id}
                        appointmentFromParent={appointment}
                        handleDeleteAppointment={handleDeleteAppointment}
                    />
                )}
            </div>
        </>
    )
}
export default Profile;