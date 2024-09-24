import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import TaskForm from '../src/components/TaskForm.vue';
import { createPinia } from 'pinia'; 
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

test('render Form', () => {
  const pinia = createPinia(); 
  const { getByLabelText } = render(TaskForm, {
    global: {
      plugins: [pinia, router],
    },
  });

  expect(getByLabelText('Date:')).toBeTruthy();
  expect(getByLabelText('Description de Tâche:')).toBeTruthy();
});

test('Soumettre Form', async () => {
  const pinia = createPinia(); 
  const { getByLabelText, getAllByTestId, emitted } = render(TaskForm, {
    global: {
      plugins: [pinia, router], 
    },
  });

  await fireEvent.update(getByLabelText('Date:'), '01/10/2024');
  await fireEvent.update(getByLabelText('Description de Tâche:'), 'Test Task');
  
  const submitButtons = getAllByTestId('submit-button');  
  await fireEvent.click(submitButtons[0]);
});
