import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  return (
    <div className="container">
      <h2>Sirena
            <small class="text-muted">Salon De Beauté</small>
      </h2>
      <Link to="/">Home</Link>
      <Link to="/ServiceMenuPage">Services</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Appointments">Appointments</Link>
      <Link to="/SignUpPage">SignUp</Link>
      <Link to="/Login">Login</Link>
      {children}
    </div>
  )
}