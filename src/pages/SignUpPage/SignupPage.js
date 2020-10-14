import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import SignupForm from '../../components/SignUpForm/SignupForm';
import Typography from '@material-ui/core/Typography';
import './SignupPage.css';

class SignupPage extends Component {

    state = { message: '' }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    render() {
        return (
            <div className='SignupPage'>
                <Helmet>
                    <style>{'body { background-color: #e3e2e1; }'}</style>
                </Helmet>
                <Typography className="loginTitle">Sign up to schedule an appointment</Typography>
                <SignupForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default SignupPage;