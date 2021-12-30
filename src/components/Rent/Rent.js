import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom';

// CSS
import './Rent.css';

// Img
import logo from '../../assets/img/ebike__logo-white.svg';

function Rent() {
    return (
        <>
            <div className="home-hero__outer-wrapper">
                <DocumentTitle title='Hem' ></DocumentTitle>
                <div className="home__container">
                    <div className="home-hero__nav-wrapper">
                        <div className="hero__brand">
                            <img src={logo} className="hero__logo" alt="Ebike logo"/>Ebike
                        </div>
                    </div>
                    <div className="home-hero__content-outer-wrapper">
                        <div className="home-hero__content-inner-wrapper">
                            <h1>Rent Bike</h1>
                            <ul>
                                <li><Link to="/main"><button>Bike 1</button></Link></li>
                                <li><Link to="/main"><button>Bike 2</button></Link></li>
                                <li><Link to="/main"><button>Bike 3</button></Link></li>
                                <li><Link to="/main"><button>Bike 4</button></Link></li>
                                <li><Link to="/main"><button>Bike 5</button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-content__outer-wrapper"></div>
        </>
    )
}

export default Rent
