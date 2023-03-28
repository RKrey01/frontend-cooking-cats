import React from "react";
import {Link} from "react-router-dom";
import './PopularRecipes.css';
import {saveToFavorites} from "./LocalStorage";

function RecipeItem(props) {
    // set default value of showButton to true
    const {showButton = true} = props;

    // This will handle the click and add the recipe to a favorites list
    const handleClick = () => {
        saveToFavorites(props);
        console.log(props.text + " is toegevoegd aan de lijst!")
    }

    return (
        <>
            <li className="recipes__item">
                {/*the recipe item will be wrapped in a Link so there can be clicked on and go to another page*/}
                <Link className="recipes__item__link" to={props.path}>
                    <figure className="recipes__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Recipe Image" className="recipes__item__img"/>
                    </figure>
                    <div className="recipes__item__info">
                        <h5 className="recipes__item__text">{props.text}</h5>
                        <p className="recipes__item__text__time">Bereidingstijd in minuten: {props.totalTime}</p>
                    </div>
                </Link>
                {showButton && (
                    <div className="favorite-button">
                        {/*this button can add the recipe as favorite*/}
                        <button className="btn btn--medium btn--outline" onClick={handleClick}>Favoriet
                        </button>
                    </div>
                )}
            </li>
        </>
    )
}

export default RecipeItem;