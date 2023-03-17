// this function will save a recipe to the favorite list of a user in the local storage
export function saveToFavorites(recipeUri) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(recipeUri)) {
        favorites.push(recipeUri);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// this function will retrieve the favorite recipes of the user
export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}
