<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @input="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-2xl h-48 object-cover w-full"
      />

      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4">sssssssssssssssssssss sssssssssssssss</p>
        <div class="flex items-center justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border border-red-600 hover:bg-red-600 hover:text-white transition-colors"
            >Youtube</a
          >
          <router-link
            to="/"
            class="px-3 py-2 rounded border border-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals();
    }
})
</script>

<style scoped></style>
