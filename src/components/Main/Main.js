import React from 'react';
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Auth/authSlice';


// CSS
import './Main.css';

// Img
import logo from '../../assets/img/ebike__logo-white.svg';

function Main() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log("Logout");
        dispatch(logout());
    };

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
                <div class="btn-full-width-large">
                    <Link to="/rent"><h1>Rent bike</h1></Link>
                </div>
            </div>
        </>)
    )
}

export default Main
