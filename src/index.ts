import { Elysia } from "elysia";

const app = new Elysia()
  .get("/ping", () => "pong")
  .listen(process.env.PORT ?? 3000);

console.log(`🦊 Elysia is running at port ${app.server?.port}`);
