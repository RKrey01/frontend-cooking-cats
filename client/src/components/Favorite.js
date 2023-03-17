import React, {useEffect, useState} from "react";
import "./Favorite.css";
import "./RecipeStyles.css";
import axios from "axios";
import RecipeItem from "./RecipeItem";
import "./PopularRecipes.css";
import {getFavorites} from "./LocalStorage";

function Favorite() {
    const [recipes, setRecipes] = useState([]);
    const [favoriteRecipes, setfavoriteRecipes] = useState([]);

    useEffect(() => {
        // get all the recipes from the API
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=r&app_id=a3d8ded0&app_key=31cd4375a8d59ea5813eac6a2e425a04`)
            .then((response) => {
                //     the recipes will be updated based on the analyze
                console.log(response.data);
                setRecipes(response.data.hits);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        // get the list of favorites from the localstorage
        const favorites = getFavorites();

        if (favorites.length === 0) {
            console.log("lijst van favorieten is leeg!")
        }
        if (recipes && recipes.length !== 0) {
            // get the recipes that contain the uri's from the favorites list
            const filteredList = recipes.filter((recipe) =>
                favorites.includes(recipe.recipe.uri)
            );
            setfavoriteRecipes(filteredList);
        }

    }, [recipes]);

    return (
        <div className="favorite-container">
            <h1 id="favorite-h1">Favorieten recepten</h1>
            {/* validation if there are any favorite recipes */}
            {favoriteRecipes.length > 0 ? (
                <ul>
                    <div className="recipes-container">
                        {favoriteRecipes.map((recipe) => (
                            <div className="recipe-item">
                                <RecipeItem
                                    id={recipe.recipe.uri}
                                    src={recipe.recipe.image}
                                    text={recipe.recipe.label}
                                    label={recipe.recipe.mealType}
                                    path={recipe.recipe.url}
                                    totalTime={recipe.recipe.totalTime}
                                />
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