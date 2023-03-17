import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import mainLogo from "../assets/kookende_katjes.png";

function Footer() {
    return (
        <div className="footer-container">
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Cooking cats
                            <img id="main-logo" src={mainLogo} alt="kokende katjes"/>
                        </Link>
                    </div>
                    <small className="website-rights">Cooking Cats © 2023</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube'/>
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'/>
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
