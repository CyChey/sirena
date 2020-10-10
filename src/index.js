import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AppointmentPage from './pages/AppointmentPage/Appointment';
import LoginPage from './pages/LoginPage/Login'
import ProfilePage from './pages/ProfilePage/Profile'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import ServiceMenuPage from './pages/ServiceMenuPage/ServiceMenuPage';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/appointments">
          <AppointmentPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/Profile">
          <ProfilePage />
        </Route>
        <Route path="/SignUpPage">
          <SignUpPage />
        </Route>
        <Route path="/ServiceMenuPage">
          <ServiceMenuPage />
        </Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
  () => console.log('App has rendered'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
