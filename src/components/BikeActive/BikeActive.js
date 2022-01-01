import React from 'react';
import DocumentTitle from 'react-document-title';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/img/ebike__logo-white.svg';
import PredictedCost from '../PredictedCost/PredictedCost';
// CSS
import './BikeActive.css';

class BikeActive extends React.Component {
    constructor(props) {
        super(props);

        this.stopRental = this.stopRental.bind(this);
    }

    stopRental() {
        // Todo: Implement call to api to end the current rental period.

        this.props.history.push({
            pathname: '/main',
        });
    }

    render() {
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
                                <h3>Rental period started for bike: {this.props.location.state.serialNumber}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-content__outer-wrapper content-center">
                    <div class="warning">
                        <p>Please note that extra charges may apply if you park outside an approved parking area.</p>
                    </div>
                    <PredictedCost/>
                    <button class="btn-full-width red" onClick={this.stopRental}>Park bike</button>
                </div>
            </>
        );
    }
}

    export default withRouter(BikeActive);