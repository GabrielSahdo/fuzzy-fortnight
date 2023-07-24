import { t } from "elysia";

export const user = t.Object({
    id: t.Number(),
    name: t.String(),
    email: t.String(),
});

export const userRequest = t.Object({
    name: t.String(),
    email: t.String(),
});