import { test, expect } from 'vitest';
import request from 'supertest';
import app from '../backend/app'; 

test('Utilisateur enregistré', async () => {
  const res = await request(app)
    .post('/register')
    .send({ username: 'testuser', password: 'testpassword' });

  expect(res.body.message).toBe('Utilisateur enregistré avec succès');
});

test('Connexion réussie', async () => {
  const res = await request(app)
    .post('/login')
    .send({ username: 'testuser', password: 'testpassword' });

  expect(res.body.message).toBe('Connexion réussie');
});

test('Task list', async () => {
    const loginRes = await request(app)
    .post('/login')
    .send({ username: 'testuser', password: 'testpassword' });

  const cookies = loginRes.headers['set-cookie'];

  const res = await request(app)
    .get('/tasks')
    .set('Cookie', cookies); 

  expect(Array.isArray(res.body)).toBe(true);
});
