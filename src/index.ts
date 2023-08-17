import { DatabaseFactory } from "./database/database.factory";
import { Server } from "./server";

const db = DatabaseFactory.create();
DatabaseFactory.migrate(db);

const server = new Server(Number(process.env.PORT));
server.start(db);



