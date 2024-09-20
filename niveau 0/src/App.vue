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
<div>
    <h1>Bienvenue à la gestion des tâches de Jie</h1>
    <router-view />
    
    <router-link v-if="route.path !== '/new'" to="/new">
      <button>Créer une nouvelle tâche</button>
    </router-link>

  </div>
</template>