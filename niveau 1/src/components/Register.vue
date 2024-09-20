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
    <div class="form-container">
      <h2>Créer un compte</h2>
      <form @submit.prevent="register">
        <label for="username">Nom d'utilisateur:</label>
        <input v-model="username" required />
  
        <label for="password">Mot de passe:</label>
        <input v-model="password" type="password" required />
  
        <button type="submit">S'inscrire</button>
      </form>

      <router-link to="/login">
      <button>Retour à page de Login</button>
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
  