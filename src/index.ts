import { Server } from "./server";
import { DBUser, user } from "./database/schema/user";
import { DatabaseFactory } from "./database/database.factory";

const db =  new DatabaseFactory();

db.migrate();

const newUser: DBUser = {
    id: '1',
    fullName: 'John Doe',
}

const result = db.connection.insert(user).values(newUser).run();
const datas: DBUser[] = db.connection.select().from(user).all();
console.log(datas);

const server = new Server(Number(process.env.PORT));
server.start();



