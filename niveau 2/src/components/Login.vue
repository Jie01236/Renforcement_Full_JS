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
  <div class="container mt-5">
    <h2 class="mb-4">Connexion</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="username" class="form-label">Nom d'utilisateur:</label>
        <input v-model="username" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe:</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>

    <router-link to="/register">
      <button type="button" class="btn btn-secondary mt-3">Créer un compte</button>
    </router-link>
  </div>
</template>