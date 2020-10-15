import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ServiceListPage from '../ServiceListPage/ServiceListPage';
import * as appointmentService from '../../utils/appointmentService';
import SignupPage from '../SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import EditAppointmentPage from '../EditAppointmentPage/EditAppointmentPage';
import userService from '../../utils/userService';
import AppointmentPage from '../AppointmentPage/AppointmentPage';
import HomePage from '../HomePage/HomePage';
import Profile from '../ProfilePage/Profile';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';


class App extends Component {
  state = {
    services: [
      {
        _id: 1,
        type: 'Haircut Only',
        cost: '$35',
        time: '30 mins'
      },
      {
        _id: 2,
        type: 'Haircut W/ Style',
        cost: '$65',
        time: '45 mins'
      },
      {
        _id: 3,
        type: 'Bang Trim',
        cost: '$10',
        time: '10 mins'
      },
      {
        _id: 4,
        type: 'Eyebrow Wax',
        cost: '$10',
        time: '10 mins'
      },
      {
        _id: 5,
        type: 'Lip Wax',
        cost: '$10',
        time: '10 mins'
      },
      {
        _id: 6,
        type: 'Leg Wax',
        cost: '$30',
        time: '20 mins'
      },
    ],
    user: userService.getUser(),
    appointments: []
  }

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleAddAppointment = async newAppointmentData => {
    await appointmentService.createAppointment(newAppointmentData)
    this.setState({
      appointments: [...this.state.appointments, newAppointmentData]
    }, () => this.props.history.push('/profile')
    )
  }

  async getAllAppointments() {
    const allAppointments = await appointmentService.getAllAppointments()
    this.setState({
      appointments: allAppointments
    }, () => this.props.history.push('/profile'));
  }

  async componentDidMount() {
    this.getAllAppointments();
  }

  handleDeleteAppointment = async idOfAppointmentToDelete => {
    await appointmentService.deleteAppointmentAPI(idOfAppointmentToDelete);
    this.setState(
      state => ({
        appointmentService: state.appointments.filter(appointment => appointment._id !== idOfAppointmentToDelete)
      }),
      () => this.getAllAppointments()
    );
  }

  handleUpdateAppointment = async updatedAppointmentData => {
    await appointmentService.updateAppointmentAPI(updatedAppointmentData);
    this.getAllAppointments();
  }

  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <main>
          <Switch>
            <Route exact path='/home' render={({ history }) =>
              <HomePage />
            }
            />
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
            }
            />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />

            <Route exact path='/services' render={({ history }) =>
              <ServiceListPage servicesFromParent={this.state.services} />
            } />
            <Route exact path='/appointment' render={({ history }) =>
              userService.getUser() ?
                <AppointmentPage handleAddAppointment={this.handleAddAppointment} />
                :
                <Redirect to='/login' />
            } />
            <Route exact path='/profile' render={({ history }) =>
              userService.getUser() ?
                <Profile appointmentsFromParent={this.state.appointments} handleDeleteAppointment={this.handleDeleteAppointment} />
                :
                <Redirect to='/login' />
            } />
            <Route exact path='/edit' render={({ history, location }) =>
              userService.getUser() ?
                <EditAppointmentPage handleUpdateAppointment={this.handleUpdateAppointment} location={location} />
                :
                <Redirect to='/login' />
            } />
          </Switch>
          <div>
          </div>
        </main>
      </div>
    );
  }
}


export default App;