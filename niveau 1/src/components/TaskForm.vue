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
  <div class="form-container">
    <form @submit.prevent="submitTask">
      <label>Date:</label>
      <input v-model="name" required/>

      <label>Description de Tâche:</label>
      <input v-model="description" required />

      <button type="submit">Soumettre</button>
    </form>
    <router-link to="/">
      <button>Retour à page d'accueil</button>
    </router-link>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto; 
  padding: 20px;
}
label {
  display: block; 
  margin-bottom: 5px;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 15px; 
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  margin-bottom: 10px;
}

</style>