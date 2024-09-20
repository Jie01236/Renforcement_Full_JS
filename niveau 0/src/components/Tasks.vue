<script setup>
import { ref } from 'vue'

defineProps({
  tasks: Array,
})

const count = ref(0)

const emit = defineEmits(['delete-task']);
</script>

<template>
  <div>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task._id" class="task-item">
        {{ task.name }} - {{ task.description }}
        <button @click="emit('delete-task', task._id)">Delete</button>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.task-list {
  padding-left: 0;
  list-style-type: none; 
}

.task-item {
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 10px 0;
  border-bottom: 1px solid #555;
}

.task-item button {
  margin-left: 10px;  
}

ul {
  padding-left: 0;
}
</style>
