import React from 'react';
import DocumentTitle from 'react-document-title';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/img/ebike__logo-white.svg';
import PredictedCost from '../PredictedCost/PredictedCost';
// CSS
import './BikeActive.css';
import { returnBike } from '../Rent/rentSlice';

const BikeActive = () => {

    const root = useSelector((state) => state.root);
    const dispatch = useDispatch();

    const stopRental = () => {
        // Todo: Implement call to api to end the current rental period.
        dispatch(returnBike());
    }


        return (
            <>
                <div className="home-hero__outer-wrapper">
                    <DocumentTitle title='BikeActive' ></DocumentTitle>
                    <div className="home__container">
                        <div className="home-hero__nav-wrapper">
                            <div className="hero__brand">
                                <img src={logo} className="hero__logo" alt="Ebike logo"/>Ebike
                            </div>
                        </div>

                        <div className="home-hero__content-outer-wrapper">
                            <div className="home-hero__content-inner-wrapper">
                                <h3>Rental period started for bike: {root.rent.bike.id}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-content__outer-wrapper content-center">
                    <div class="warning">
                        <p>Please note that extra charges may apply if you park outside an approved parking area.</p>
                    </div>
                    <PredictedCost/>
                    <button class="btn-full-width red" onClick={stopRental}>Park bike</button>
                </div>
            </>
        );
    }


    export default withRouter(BikeActive);