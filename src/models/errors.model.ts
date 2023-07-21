import { t } from "elysia";

export const errorResponse = t.Object({
  message: t.String(),
});