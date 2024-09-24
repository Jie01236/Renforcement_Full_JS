import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue'; 
import TaskForm from '../components/TaskForm.vue'; 
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import { useTaskStore } from '../stores/taskStore';  // 确保路径正确

const routes = [
  { path: '/', component: TaskList },      
  { path: '/new', component: TaskForm },
  { path: '/login', component: Login },
  { path: '/register', component: Register },   
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const taskStore = useTaskStore(); 
  const isAuthenticated = taskStore.user !== null; 
  if ((to.path !== '/login' && to.path !== '/register') && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});


export default router;
