<script setup>
import {ref} from "vue"
import { useRoute } from 'vue-router'

let tasks = ref([])

const route = useRoute()

fetch('http://localhost:3000/tasks')
  .then(response => response.json())
  .then(backendTasks => {
    tasks.value = backendTasks
    console.log(backendTasks)
  })

</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center text-primary display-4">Bienvenue à votre gestion des tâches</h1>
    <router-view />
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}
</style>
