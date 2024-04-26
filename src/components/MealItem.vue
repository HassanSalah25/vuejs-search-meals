<template>
    <div
      
      class="bg-white shadow rounded-xl"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-2xl h-48 object-cover w-full"
      />

      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4">Lorem Lorem</p>
        <div class="flex items-center justify-between">
         <YoutubeButton :href="meal.strYoutube" >
        Youtube
        </YoutubeButton>
          <router-link
            :to="{name: 'mealDetails', params: {id: meal.idMeal}}"
            class="px-3 py-2 rounded border border-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
            >View</router-link
          >
        </div>
      </div>
    </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';

    const { meal } = defineProps({
        meal: {
            required: true,
            type: Object
        }
    })
</script>