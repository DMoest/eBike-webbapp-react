import React from 'react';
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// CSS
import './Auth.css';

// Img
import logo from '../../assets/img/ebike__logo-white.svg';
import { FaGithub } from "react-icons/fa";

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {

        // Todo: Implement oAuth login with Github...

        let loginResponse = true;

        console.log("Logging in...");

        loginResponse ? this.props.history.push({
            pathname: '/main',
        }) : this.props.history.push({
            pathname: '/auth',
            state: { sucess: false }
        });
    }
    
    register() {

        // Todo: Implement oAuth registration with Github...

        let registerResponse = true;

        console.log("Registering new user...");

        registerResponse ? this.props.history.push({
            pathname: '/main',
        }) : this.props.history.push({
            pathname: '/auth',
            state: { sucess: false }
        });
    }

    render() {
        return (
            <>
                <div className="home-hero__outer-wrapper">
                    <DocumentTitle title='Hem' ></DocumentTitle>
                    <div className="home__container">
                        <div className="home-hero__nav-wrapper">
                            <div className="hero__brand">
                                <img src={logo} className="hero__logo" alt="Ebike logo"/>Ebike
                            </div>
                            <div>
                                <Link to="/">Home</Link>
                            </div>
                        </div>
                        <div className="home-hero__content-outer-wrapper">
                            <div className="home-hero__content-inner-wrapper">
                                <h3>Please login or Register with Github using the buttons below.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="auth-content__outer-wrapper">
                    <div class="auth-section">
                        <button class="btn-full-width" onClick={this.login}>Login <FaGithub/></button>
                    </div>
                        
                    <div class="auth-section">
                        <button class="btn-full-width" onClick={this.register}>Register <FaGithub/></button>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Auth)
