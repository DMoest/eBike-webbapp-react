import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom';

// CSS
import './Register.css';

// Img
import logo from '../../assets/img/ebike__logo-white.svg';

function Register() {
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
                            <h1>Register</h1>
                            <Link to="/main"><button>Register with Github</button></Link>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-content__outer-wrapper"></div>
        </>
    )
}

export default Register
