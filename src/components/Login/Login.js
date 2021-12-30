import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom';

// CSS
import './Login.css';

// Img
import logo from '../../assets/img/ebike__logo-white.svg';

function Login() {
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
                            <h1>Login</h1>
                            <Link to="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-content__outer-wrapper"></div>
        </>
    )
}

export default Login
