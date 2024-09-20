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
    <h1>Bienvenue à votre gestion des tâches</h1>
    <router-view />
  </div>
</template>