import { Server } from "./server";

const server = new Server(Number(process.env.PORT));

server.start();