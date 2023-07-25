import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { userRouter } from "./users/user.router";
import { errorHandler } from "./middlewares/error.middleware";

export class Server {
    app?: Elysia<any>;
    port: number;

    constructor(port: number = 3000) {
        this.port = port;
    }

    start() {
        this.app = new Elysia()
            .use(errorHandler)
            .use(swagger())
            .use(userRouter)
            .listen(this.port);

        console.log(`🦊 Elysia is running at port ${this.app.server?.port}`);
    }
}