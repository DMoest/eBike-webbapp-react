import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login, register } from './authSlice';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

// CSS
import './Auth.css';

// Img
import logo from '../../assets/img/ebike__logo-white.svg';
import { FaGithub } from "react-icons/fa";

// Context


const Auth = () => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory();

    const handleLogin = () => {
        dispatch(login());
        history.replace("/");
    };
    const handleRegister = () => {
        dispatch(register());
        history.replace("/");        
    }

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
                    <button class="btn-full-width" onClick={handleLogin}>Login <FaGithub/></button>
                </div>
                    
                <div class="auth-section">
                    <button class="btn-full-width" onClick={handleRegister}>Register <FaGithub/></button>
                </div>
            </div>
        </>
    )
}

export default Auth
