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
    <ul class="list-group">
      <li v-for="task in tasks" :key="task._id" class="list-group-item d-flex justify-content-between align-items-center">
        {{ task.name }} - {{ task.description }}
        <button @click="emit('delete-task', task._id)" class="btn btn-danger">Supprimer</button>
      </li>
    </ul>
  </div>
</template>