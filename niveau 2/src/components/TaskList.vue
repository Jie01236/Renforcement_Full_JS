<script setup>
import Tasks from './Tasks.vue'
import { onMounted} from "vue"
import { useRoute, useRouter } from 'vue-router'
import { useTaskStore } from '../stores/taskStore'

const route = useRoute();  
const router = useRouter();
const taskStore = useTaskStore();

  onMounted(() => {
    taskStore.fetchTasks(); 
  });


  const deleteTask = (id) => {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })
    .then(response => {
      if (response.ok) {
        taskStore.tasks = taskStore.tasks.filter(task => task._id !== id);
        alert('Tâche supprimée avec succès');
      } else {
        alert('Échec de la suppression de la tâche');
      }
    });
};

const handleLogout = async () => {
      await taskStore.logout();
      router.push('/login');  
};

</script>

<template>

  <Tasks
  :tasks="taskStore.tasks"
  @delete-task="deleteTask" class="mt-5"/>

  <router-view />

  <div class="d-flex justify-content-center mt-5">
    <router-link v-if="route.path !== '/new'" to="/new">
      <button class="btn btn-primary">Créer une nouvelle tâche</button>
    </router-link>
  </div>

  <div class="d-flex justify-content-center">
    <button @click="handleLogout" class="btn btn-secondary mt-3">Déconnexion</button>
  </div>


</template>
