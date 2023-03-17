import React from "react";
import './Button.css';
import {Link} from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize,
                           linkTo
                       }) => {
    // This way the css is manipulated with logic
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to={linkTo} className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {/*we put children, so whatever we put in here it will make a button component in this instance*/}
                {children}
            </button>
        </Link>
    )
};

