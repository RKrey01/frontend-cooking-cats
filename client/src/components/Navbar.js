import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from "./Button";
import './Navbar.css';
import mainLogo from '../assets/kookende_katjes.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // this code prevents the sign up button to come back after refreshing while the browser is shrinked
    useEffect(() => {
        showButton();
    }, []);

    // when the screen resizes the showbutton will work for it
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Cooking cats
                        <img id="main-logo" src={mainLogo} alt="kokende katjes"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/recipes' className='nav-links' onClick={closeMobileMenu}>
                                Recepten
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/favorites' className='nav-links' onClick={closeMobileMenu}>
                                Favorieten
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/personalized' className='nav-links' onClick={closeMobileMenu}>
                                Personaliseer recepten
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Aanmelden
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' linkTo='/sign-up'>AANMELDEN</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;