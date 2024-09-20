<script setup>
import Tasks from './Tasks.vue'
import {ref} from "vue"

let tasks = ref([])

fetch('http://localhost:3000/tasks')
  .then(response => response.json())
  .then(backendTasks => {
    tasks.value = backendTasks
    console.log(backendTasks)
  })

  const deleteTask = (id) => {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        tasks.value = tasks.value.filter(task => task._id !== id);
        alert('Tâche supprimée avec succès');
      } else {
        alert('Échec de la suppression de la tâche');
      }
    });
};

</script>

<template>

  <Tasks
  :tasks="tasks"
  @delete-task="deleteTask" />

</template>