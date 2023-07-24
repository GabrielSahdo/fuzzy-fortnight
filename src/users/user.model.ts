import Elysia, { t } from "elysia";

const user = t.Object({
    id: t.Number(),
    name: t.String(),
    email: t.String(),
});

const userArray = t.Array(user);

const userRequest = t.Object({
    name: t.String(),
    email: t.String(),
});

export const userModels = (app: Elysia) => app
    .model("user", user)
    .model("userArray", userArray)
    .model("userRequest", userRequest)