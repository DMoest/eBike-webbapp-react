import React from 'react';
import DocumentTitle from 'react-document-title'

import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Auth/authSlice';


// CSS
import './Main.css';

// Img
import logo from '../../assets/img/ebike__logo-white.svg';

function Main(props) {
    const dispatch = useDispatch()
    const history = useHistory();
    const { cookies } = props;

    const handleLogout = () => {
        cookies.remove('XSRF-TOKEN');
        //dispatch(logout());
    };

    function handleRental() {
        console.log("Navigating ro rent!");
        history.push("/rent");
      }

    return (
        (<>
            <div className="home-hero__outer-wrapper">
                <DocumentTitle title='Hem' ></DocumentTitle>
                <div className="home__container">
                    <div className="home-hero__nav-wrapper">
                        <div className="hero__brand">
                            <img src={logo} className="hero__logo" alt="Ebike logo"/>Ebike
                        </div>
                        <div onClick={handleLogout}>Logout</div>
                    </div>
                    <div className="home-hero__content-outer-wrapper">
                        <div className="home-hero__content-inner-wrapper">
                            <h3>Welcome to the app! Tap the button below to start the process of renting a bike in your area</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content__outer-wrapper">
                <button class="btn-full-width-large" onClick={handleRental} />
            </div>
        </>)
    )
}

export default Main
