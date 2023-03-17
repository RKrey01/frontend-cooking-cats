import React, {useEffect, useState} from "react";
import axios from "axios";
import './Search.css';
import './Button.css';
import './RecipeStyles.css';
import RecipeItem from "./RecipeItem";

const Search = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    // this is the query that we're sending through the params to the backend
    const [query, setQuery] = useState('pizza');

    const getRecipes = async () => {
        // this url will take the query and process it and hit the actual api and fetch the data in the backend
        // data will be send in form of json to the frontend so we can use it in the application
        const response = await axios.get(
            'http://localhost:5000/recipes/' + query
        )
        console.log(response.data)
        setRecipes(response.data)
    }

    useEffect(() => {
        getRecipes()
    }, [query])

    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <div className="Search">
            <h1 id="search-h1">Recepten</h1>
            {/*This is the search bar where the user can give input*/}
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" placeholder="type hier" value={search}
                       onChange={e => setSearch(e.target.value)}/>
                <button className="search-button btn btn--outline btn--medium" type="submit">
                    Zoek <i className='fas fa-search'/>
                </button>
            </form>
            {/*This will validate if the user didn't give a invalid input such as ;*/}
            {recipes.length === 0 ? (
                <p className="search-message">Kan recepten niet vinden met de ingevulde waarde. Voer een nieuwe waarde
                    in.</p>
            ) : (
                // If the user gave a valid input, the recipes will be displayed
                <div className="recipes-container">
                    {/*the data from the recipes will be mapped here in the return statement, so each instance will be displayed on the page*/}
                    {recipes.map(recipe => (
                        <div key={recipe.recipe.uri} className="recipe-item">
                            <RecipeItem
                                src={recipe.recipe.image}
                                text={recipe.recipe.label}
                                label={recipe.recipe.mealType}
                                path={recipe.recipe.url}
                                totalTime={recipe.recipe.totalTime}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
