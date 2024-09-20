<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'
  import { useTaskStore } from '../stores/taskStore'
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  const taskStore = useTaskStore();
  
  const login = () => {
  taskStore.login(username.value, password.value)
    .then(() => {
      if (taskStore.user) { 
        router.push('/'); 
      } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect'); 
      }
    })
    .catch(error => {
      console.error('Erreur lors de la connexion:', error);
    });
};
  </script>

<template>
    <div class="form-container">
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <label for="username">Nom d'utilisateur:</label>
        <input v-model="username" required />
  
        <label for="password">Mot de passe:</label>
        <input v-model="password" type="password" required />
  
        <button type="submit">Se connecter</button>
      </form>
      
      <router-link to="/register">
        <button type="submit">Créer un compte</button>
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