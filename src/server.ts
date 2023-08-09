import swagger from "@elysiajs/swagger";
import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import Elysia from "elysia";
import { errorHandler } from "./middlewares/error.middleware";
import { userRouter } from "./users/user.router";

export class Server {
    app?: Elysia<any>;
    port: number;

    constructor(port: number = 3000) {
        this.port = port;
    }

    start(database: BunSQLiteDatabase) {
        this.app = new Elysia()
            .use(errorHandler)
            .state('db', database)
            .use(swagger())
            .use(userRouter)
            .listen(this.port);

        console.log(`🦊 Elysia is running at port ${this.app.server?.port}`);
    }
}