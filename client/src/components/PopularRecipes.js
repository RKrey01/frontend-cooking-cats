import React, {useEffect, useState} from "react";
import RecipeItem from "./RecipeItem";
import './PopularRecipes.css';
import axios from "axios";

function PopularRecipes() {
    const [recipes, setRecipes] = useState([]);
    // this is the query that we're sending through the params to the backend to get the popular recipes
    const [query, setQuery] = useState('popular');

    const getPopularRecipes = async () => {
        // this url will take the query and process it and hit the actual api and fetch the data in the backend
        // data will be send in form of json to the frontend so we can use it in the application
        const response = await axios.get(
            'http://localhost:5000/recipes/' + query
        )
        console.log(response.data)
        setRecipes(response.data)
    }

    useEffect(() => {
        getPopularRecipes()
    }, [query])

    // this will map the recipes data to a list
    // with this list the wanted items can be displayed below in the return statement
    const popularRecipesList = recipes.map((recipe) =>
        <RecipeItem
            id={recipe.recipe.uri}
            src={recipe.recipe.image}
            text={recipe.recipe.label}
            label={recipe.recipe.mealType}
            path={recipe.recipe.url}
            totalTime={recipe.recipe.totalTime}
        />
    )

    return (
        <div className="recipes">
            <h1>Bekijk deze populaire recepten!</h1>
            <div className="recipes__container">
                <div className="recipes__wrapper">
                    <ul className="recipes__items">
                        {popularRecipesList[0]}
                        {popularRecipesList[1]}
                    </ul>
                    <ul className="recipes__items">
                        {popularRecipesList[2]}
                        {popularRecipesList[3]}
                        {popularRecipesList[4]}
                        {popularRecipesList[5]}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PopularRecipes;
