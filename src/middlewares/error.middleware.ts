import { Elysia } from "elysia";

export const errorHandler = (app: Elysia) => app.onError(({ code, error, request, set }) => {
    const url = request.url;
    const message = error.message;
    let httpStatusCode;

    switch (code) {
        case "VALIDATION":
            httpStatusCode = 400;
            break;

        case "NOT_FOUND":
            httpStatusCode = 404;
            break;

        default:
            httpStatusCode = 500;
            break;
    }

    set.status = httpStatusCode;

    return {
        httpStatusCode,
        code,
        message,
        url,
    };
});