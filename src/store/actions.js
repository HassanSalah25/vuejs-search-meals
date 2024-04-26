import axiosClient from "../axiosClient";

export function searchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMeals',data.meals)
    })
}

export function searchMealsByLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setMealByLetter',data.meals)
    })
}

export function searchMealsByIngredient({commit}, ingredient){
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({data}) => {
        commit('setMealByIngredient',data.meals)
    })
}

export function searchIngredient({commit}, keyword){
    axiosClient.get(`list.php?i=list`)
    .then(({data}) => {
        commit('setIngredient',data.meals)
    })
}