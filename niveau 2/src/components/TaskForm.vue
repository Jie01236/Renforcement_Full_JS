  <script setup>
  import { ref } from 'vue';
  import { useTaskStore } from '../stores/taskStore'
  
  const name = ref('');
  const description = ref('');
  const taskStore = useTaskStore();
  
  const submitTask = () => {
  taskStore.addTask({ name: name.value, description: description.value })
    .then(() => {
      alert('Tâche soumise avec succès');
    })
    .catch(() => {
      alert('Échec de la soumission de la tâche');
    });
};

  </script>

<template>
  <div class="container mt-5">
    <form @submit.prevent="submitTask">
      <div class="mb-3">
      <label for="task-date" class="form-label">Date:</label>
      <input v-model="name" id="task-date" class="form-control" required/>
    </div>
    <div class="mb-3">
      <label for="task-desc" class="form-label">Description de Tâche:</label>
      <input v-model="description" id="task-desc" class="form-control" required />
    </div>
      <button type="submit" class="btn btn-primary" data-testid="submit-button">Soumettre</button>
    </form>
    <router-link to="/">
      <button class="btn btn-secondary mt-3" data-testid="back-button">Retour à page d'accueil</button>
    </router-link>
  </div>
</template>