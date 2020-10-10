import React from 'react';
import './Layout.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  return (
    <div className="container">
      <h2>Sirena
            <small class="text-muted">Salon De Beauté</small>
      </h2>
      {children}
    </div>
  )
}
