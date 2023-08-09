import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import { Elysia, t } from "elysia";
import { userModels } from "./user.model";
import { create, getAll, getById, update } from "./user.service";

export const userRouter = (app: Elysia) => app
    .group("/users", app => app
        .state("db", {} as BunSQLiteDatabase)
        .use(userModels)

        .get("/", ({ store: { db } }) => getAll(db), {
            response: "userArray",
            detail: { summary: "Get all users", tags: ["User"] }
        })

        .get("/:id", ({ params: { id }, store: { db } }) => getById(id, db), {
            response: "user",
            params: t.Object({ id: t.Numeric() }),
            detail: { summary: "Get a user by id", tags: ["User"] }
        })

        .post("/", ({ body, store: { db } }) => create(body, db), {
            body: "userRequest",
            response: "user",
            detail: { summary: "Create a user", tags: ["User"] }
        })

        .put("/:id", ({ params: { id }, body, store: { db } }) => update(id, body, db), {
            body: "userRequest",
            response: "user",
            params: t.Object({ id: t.Numeric() }),
            detail: { summary: "Update a user", tags: ["User"] }
        })
    )