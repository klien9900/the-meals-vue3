import axios from "axios";
function searchMeals({ commit }, keyword) {
    axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    ).then((res) => {
        commit('setSearchedMeals', res.data.meals)
    })
}

function searchByLetter({ commit }, letter) {
    axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    ).then((res) => {
        commit('setMealsByLetter', res.data.meals)
    })
}

function searchByIngredient({ commit }, ingredient) {
    axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    ).then((res) => {
        commit('setMealsByIngredient', res.data.meals)
    })
}
export { searchMeals, searchByLetter, searchByIngredient }