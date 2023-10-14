function setSearchedMeals(state, meals) {
    state.searchedMeals = meals
}

function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals
}

function setMealsByIngredient(state, meals) {
    state.mealsByIngredient = meals
}

export { setSearchedMeals, setMealsByLetter, setMealsByIngredient }
