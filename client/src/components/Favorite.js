import React from "react";
import "./Favorite.css";
import "./RecipeStyles.css";
import RecipeItem from "./RecipeItem";
import "./PopularRecipes.css";
import {getFavorites, removeFromFavorites} from "./LocalStorage";
import {useNavigate} from "react-router-dom";

function Favorite() {
    const favorites = getFavorites();
    console.log(favorites)

    const navigate = useNavigate();

    const handleClick = (recipe) => {
        removeFromFavorites(recipe);
        console.log(recipe + " is verwijdert uit de lijst!")
        navigate('/favorites');
    }

    return (
        <div className="favorite-container">
            <h1 id="favorite-h1">Favorieten recepten</h1>
            {/* validation if there are any favorite recipes */}
            {favorites.length > 0 ? (
                <ul>
                    <div className="recipes-container">
                        {favorites.map((recipe) => (
                            <div key={recipe.id} className="recipe-item">
                                <RecipeItem
                                    showButton={false}
                                    id={recipe.id}
                                    src={recipe.src}
                                    text={recipe.text}
                                    label={recipe.label}
                                    path={recipe.path}
                                    totalTime={recipe.totalTime}
                                />
                                <div className="remove-button">
                                    {/* This button will remove the recipe from the favorites list*/}
                                    <button className="btn btn--medium btn--primary"
                                            onClick={() => handleClick(recipe.id)}>Verwijder
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </ul>
            ) : (
                <p className="favorite-message">Je hebt nog geen recepten aan je favorieten toegevoegd.</p>
            )}
        </div>
    );
}

export default Favorite;