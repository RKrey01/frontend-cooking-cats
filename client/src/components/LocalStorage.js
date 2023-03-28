// this function will save a recipe to the favorite list of a user in the local storage
export function saveToFavorites(recipe) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(recipe)) {
        favorites.push(recipe);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// this function will retrieve the favorite recipes of the user
export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

// this function will remove a recipe from the favorites list of the user
export function removeFromFavorites(recipeUri) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter(favorite => favorite.id !== recipeUri);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}