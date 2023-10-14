import { createStore } from "vuex";
import * as actions from "./actions.js"
import * as mutations from "./mutations.js"
import * as getters from "./getters.js"
const store = createStore({
    state: {
        searchedMeals: [],
        mealsByLetter: [],
        mealsByIngredient: [],
    },
    actions,
    mutations,
    getters
})

export default store