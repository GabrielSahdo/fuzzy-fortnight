import { Elysia, t } from "elysia";
import { create, getAll, getById, update } from "./user.service";
import { userModels } from "./user.model";

export const userRouter = (app: Elysia) => app
    .group("/users", app => app
        .use(userModels)
        .get("/", () => getAll(), {
            response: "userArray",
            detail: { summary: "Get all users", tags: ["User"] }
        })

        .get("/:id", ({ params: { id } }) => getById(id), {
            response: "user",
            params: t.Object({ id: t.Numeric() }),
            detail: { summary: "Get a user by id", tags: ["User"] }
        })

        .post("/", ({ body }) => create(body), {
            body: "userRequest",
            response: "user",
            detail: { summary: "Create a user", tags: ["User"] }
        })

        .put("/:id", ({ params: { id }, body }) => update(id, body), {
            body: "userRequest",
            response: "user",
            params: t.Object({ id: t.Numeric() }),
            detail: { summary: "Update a user", tags: ["User"] }
        })
    )