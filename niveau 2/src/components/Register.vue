<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  const register = () => {
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username.value, password: password.value }),
    })
    .then(response => response.json())  
    .then(data => {
      if (data.success) {  
        alert(data.message);
        router.push('/login');
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Erreur lors de l\'enregistrement:', error);
    });
  };
  </script>

<template>
    <div class="container mt-5">
      <h2 class="mb-4">Créer un compte</h2>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="username" class="form-label">Nom d'utilisateur:</label>
          <input v-model="username" class="form-control"required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe:</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">S'inscrire</button>
      </form>

      <router-link to="/login">
      <button class="btn btn-secondary mt-3">Retour à page de Login</button>
    </router-link>
    </div>
  </template>