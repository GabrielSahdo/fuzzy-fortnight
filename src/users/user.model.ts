import Elysia, { t } from "elysia";

const user = t.Object({
    id: t.Number(),
    name: t.String(),
    email: t.String(),
});

const userArray = t.Object({
    users: t.Array(user),
});

const userRequest = t.Object({
    name: t.String(),
    email: t.String(),
});

export type User = typeof user.static;
export type UserRequest = typeof userRequest.static;
export const userModels = (app: Elysia) => app
    .model("user", user)
    .model("userArray", userArray)
    .model("userRequest", userRequest)