<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <div class="flex flex-col p-8">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Ingredient"
      />
    </div>
    <router-link
      :to="{
        name: 'MealsByIngredients',
        params: { ingredients: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="bbg-white rounded p-3 m-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const keyword = ref("");
const ingredients = computed(() => store.state.ingredients);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i) =>
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
});

onMounted(() => {
  store.dispatch("searchIngredient", route.params.searchIngredient);
});

// watch(() => {
//   store.dispatch("setMealByIngredient", route.params.ingredient);
// });
</script>

<style scoped></style>
