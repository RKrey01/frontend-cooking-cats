import React, {useState} from "react";
import axios from "axios";
import RecipeItem from "./RecipeItem";
import "./Personalized.css";

const Personalized = () => {
    const [userPreferences, setUserPreferences] = useState({});
    const [personalizedRecipes, setPersonalizedRecipes] = useState([]);
    let queryParams = ``;

    const cuisineTypes = [
        'African',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
        'Greek',
        'Indian',
        'Irish',
        'Italian',
        'Japanese',
        'Jewish',
        'Korean',
        'Latin American',
        'Mediterranean',
        'Mexican',
        'Middle Eastern',
        'Nordic',
        'Southern',
        'Spanish',
        'Thai',
        'Vietnamese',
    ];
    const healthLabels = [
        'alcohol-free',
        'celery-free',
        'crustacean-free',
        'dairy-free',
        'egg-free',
        'fish-free',
        'gluten-free',
        'kidney-friendly',
        'kosher',
        'low-potassium',
        'lupine-free',
        'mustard-free',
        'low-fat-abs',
        'No-oil-added',
        'low-sugar',
        'paleo',
        'peanut-free',
        'pecatarian',
        'pork-free',
        'red-meat-free',
        'sesame-free',
        'shellfish-free',
        'soy-free',
        'sugar-conscious',
        'tree-nut-free',
        'vegan',
        'vegetarian',
        'wheat-free'
    ];

    if (userPreferences.mealType) {
        queryParams += `&mealType=${userPreferences.mealType}`;
    }
    if (userPreferences.cuisineType) {
        queryParams += `&cuisineType=${userPreferences.cuisineType}`;
    }
    if (userPreferences.health) {
        queryParams += `&health=${userPreferences.health}`;
    }

    // function to handle the preferences of the user when clicked on the button
    const handleSubmit = (event) => {
        event.preventDefault();
        //     sending the user preferences to the server to analyze
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=a3d8ded0&app_key=31cd4375a8d59ea5813eac6a2e425a04${queryParams}`)
            .then((response) => {
                //     the recipes will be updated based on the analyze
                console.log(response.data);
                setPersonalizedRecipes(response.data.hits);
            })
            .catch((error) => console.log(error));
    };

    // this will set the preferences of the user
    const handleUserPreferencesChange = (event) => {
        const {name, value} = event.target;
        //     updates the user preferences
        setUserPreferences((prevUserPreferences) => ({
            ...prevUserPreferences,
            [name]: value
        }));
    };

    return (
        <div className="personalized">
            <h1 id="personalized-h1">Personaliseer recepten</h1>
            {/* used a form so there can be asked input from the user */}
            <form className="personalized-form" onSubmit={handleSubmit}>
                {/* label to let the user know what the filter is based on */}
                <label className="personalized-label">
                    Maaltijdtype:
                    {/* dropdown values where the user can choose from */}
                    <select
                        name="mealType"
                        value={userPreferences.mealType || ""}
                        onChange={handleUserPreferencesChange}
                        className="personalized-bar">
                        <option value="">-- Selecteer maaltijd type --</option>
                        <option value="Breakfast">Ontbijt</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Diner</option>
                        <option value="Snack">Snack</option>
                        <option value="Teatime">Thee</option>
                    </select>
                </label>
                <label className="personalized-label">
                    Keuken:
                    <select
                        name="cuisineType"
                        value={userPreferences.cuisineType || ""}
                        onChange={handleUserPreferencesChange}
                        className="personalized-bar">
                        <option value="">-- Selecteer een keuken --</option>
                        {cuisineTypes.map((cuisineType, index) => (
                            <option key={index} value={cuisineType}>
                                {cuisineType}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="personalized-label">
                    Gezondheid:
                    <select
                        name="health"
                        value={userPreferences.health || ""}
                        onChange={handleUserPreferencesChange}
                        className="personalized-bar">
                        <option value="">-- Selecteer een gezondheidslabel --</option>
                        {healthLabels.map((healthLabel, index) => (
                            <option key={index} value={healthLabel}>
                                {healthLabel}
                            </option>
                        ))}
                    </select>
                </label>
                <button className="personalized-button btn btn--outline btn--medium" type="submit">Bekijk recepten
                </button>
            </form>
            {/* validation if the user gave any valid input */}
            <div>{personalizedRecipes.length > 0 ? (
                <ul>
                    <div className="recipes-container">
                        {personalizedRecipes.map(recipe => (
                            <div key={recipe.recipe.uri} className="recipe-item">
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
                <p className="personalized-message">Geen gepersonaliseerde recepten beschikbaar</p>
            )}</div>
        </div>
    )
}

export default Personalized;