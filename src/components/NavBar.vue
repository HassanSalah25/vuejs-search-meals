<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch ">
      <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5"> Home </router-link>
      <div class="flex items-cente gap-1 ">
        <router-link :to="{ name: 'MealsByName' }" class="inline-flex items-center px-2 h-full hover:bg-purple-200 transition-colors "> Search By Meals </router-link>
        <router-link :to="{ name: 'MealsByLetter' }" class="inline-flex items-center px-2 h-full hover:bg-purple-200 transition-colors "> Meals By letter </router-link>
        <router-link :to="{ name: 'Ingredients' }" class="inline-flex items-center px-2 h-full hover:bg-purple-200 transition-colors "> Meals By Ingredients </router-link>
      </div>
    </header>
</template>