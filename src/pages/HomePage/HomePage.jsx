import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';


export default function HomePage() {
    return (
        <>

            <Link to="/ServiceMenuPage">Services</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Appointments">Appointments</Link>
            <Link to="/SignUpPage">SignUp</Link>
            <Link to="/Login">Login</Link>

        </>

    );

}
