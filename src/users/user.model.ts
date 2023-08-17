import Elysia, { t } from "elysia";
import { insertUserSchema, selectUserSchema } from "../database/schema/users.schema";

export const userModels = (app: Elysia) => app
    .model("user", selectUserSchema)
    .model("userArray", t.Object({ users: t.Array(selectUserSchema) }))
    .model("userRequest", insertUserSchema)