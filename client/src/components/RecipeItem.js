import React from "react";
import {Link} from "react-router-dom";
import {saveToFavorites} from "./LocalStorage";

function RecipeItem(props) {
    
    // This will handle the click and add the recipe to a favorites list based on the URI of the recipe
    const handleClick = () => {
        saveToFavorites(props.id);
        console.log(props.id + "is toegevoegd!")
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
                <div className="favorite-button">
                    {/*this button can add the recipe as favorite*/}
                    <button className="btn btn--medium btn--outline" onClick={handleClick}>Favoriet
                    </button>
                </div>
            </li>
        </>
    )
}

export default RecipeItem;
