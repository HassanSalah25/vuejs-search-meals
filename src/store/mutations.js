export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
}

export function setMealByLetter(state, meals) {
    state.mealsByLetter = meals || []
}

export function setMealByIngredient(state, meals) {
    state.mealsByIngredient = meals || []
}

export function setIngredient(state, meals) {
    state.ingredients = meals || []
}