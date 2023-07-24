import { Elysia, t } from "elysia";
import { user, userRequest } from "./user.model";
import { create, getAll, getById, update } from "./user.service";

export const userRouter = (app: Elysia) => app
    .group("/users", app => app
        .get("/:id", ({ params: { id } }) => getById(id), {
            response: user,
            params: t.Object({ id: t.Numeric() })
        })

        .get("/", () => getAll(), {
            response: t.Array(user)
        })

        .post("/", ({ body }) => create(body), {
            body: userRequest,
            response: user,
            detail: {
                summary: "Create a user",
                tags: ["User"],
            }
        })

        .put("/:id", ({ params: { id }, body }) => update(id, body), {
            body: userRequest,
            response: user,
            params: t.Object({ id: t.Numeric() }),
            detail: {
                summary: "Update a user",
                tags: ["User"],
            }
        })
    )