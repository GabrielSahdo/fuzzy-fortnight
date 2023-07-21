import { Elysia, t } from "elysia";
import { user, userRequest } from "./models/users.model";
import { errorResponse } from "./models/errors.model";

const users: IUser[] = [];

interface IUser {
  id: number;
  name: string;
  email: string;
}

const setupModels = (app: Elysia) => app.model({
  user,
  userRequest,
  errorResponse
});

const app = new Elysia()
  .onError(({ code, error, set }) => {

    console.log("------------------");
    console.log({ code, error, set });

    return 'Sorry... :('
  })

  .use(setupModels)

  .get("/:id", ({ params: { id }, set }) => {
    const user = users.find(u => u.id === id);

    if (!user) {
      throw { error: Error('User Not Found'), code: 404 }
    }

    return user;
  }, {
    response: { 200: "user", 404: "errorResponse" },
    params: t.Object({ id: t.Numeric() })
  })

  .post("/", ({ body }) => {
    const user = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
    };

    users.push(user);

    return user;
  }, { body: "userRequest", response: "user" })
  .listen(3000);

console.log(`🦊 Elysia is running at port ${app.server?.port}`);