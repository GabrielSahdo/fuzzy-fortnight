import { Elysia } from 'elysia';

const a ="a";

const app = new Elysia().get('/ping', () => 'pong').listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
