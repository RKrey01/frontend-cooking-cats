import React from "react";
import {Button} from "./Button";
import './Intro.css';

function Intro() {

    return (
        <div className='intro-container'>
            {/* displays a video on the homepage */}
            <video src="/videos/cooking-cats-voorpagina.mp4" autoPlay loop muted/>
            <h1>Welkom bij Cooking Cats!</h1>
            <p>Ook op zoek naar kookinspiratie? Dan ben je op het juiste adres!</p>
            <div className="intro-btns">
                {/* added buttons so the user can easily switch to the other pages */}
                <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        linkTo='/personalized'>
                    Personaliseer recepten
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        linkTo='/recipes'>
                    Zoeken <i className='fas fa-search'/>
                </Button>
            </div>
        </div>
    );
}

export default Intro;
