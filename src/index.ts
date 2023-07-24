import { Elysia, t } from "elysia";
import swagger from "@elysiajs/swagger";
import { userRouter } from "./users/user.router";

const app = new Elysia()
    .use(swagger())
    .use(userRouter)
    // .onError(({ code, error, set }) => {

    //     console.log("------------------");
    //     console.log({ code, error, set });

    //     return 'Sorry... :('
    // })
    .listen(process.env.PORT ?? 3000);

console.log(`🦊 Elysia is running at port ${app.server?.port}`);