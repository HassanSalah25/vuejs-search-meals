<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'MealsByLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
   
  </div>
    <Meals :meals="meals"/>
</template>

  <script setup>
  import { computed, onMounted, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import store from "../store";
  import Meals from "../components/Meals.vue";

  const route = useRoute();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const meals = computed(() => store.state.mealsByLetter);

  onMounted(() => {
    store.dispatch("searchMealsByLetter", route.params.letter);
  });

  watch(()=>{

    store.dispatch("searchMealsByLetter", route.params.letter);
  })
</script>

<style scoped></style>
