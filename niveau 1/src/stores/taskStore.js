import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    user: null,
  }),
  actions: {
    fetchTasks() {
        fetch('http://localhost:3000/tasks', {
          credentials: 'include',
        })
          .then(response => response.json())
          .then(backendTasks => {
            if (Array.isArray(backendTasks)) {
              this.tasks = backendTasks;
            } else {
              console.error(backendTasks.message);
            }
          })
          .catch(error => {
            console.error("Erreur lors de la récupération des tâches :", error);
          });
      },
    async addTask(newTask) {
      const response = await fetch('http://localhost:3000/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      if (data.message === 'Tâche ajoutée avec succès') {
        this.tasks.push(newTask);
      } else {
        console.error('Échec de la soumission de la tâche');
      }
    },
    async login(username, password) {
        const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        this.user = username;
        return true;
      } else {
        this.user = null;
        return false;
      }
    },
    async logout() {
        const response = await fetch('http://localhost:3000/logout', {
          method: 'POST',
          credentials: 'include',
        });
        if (response.ok) {
          this.user = null;  
        } else {
          console.error('Erreur lors de la déconnexion.');
        }
      },
  }
})
