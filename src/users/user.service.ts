import { eq } from "drizzle-orm";
import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import { users } from "../database/schema/users.schema";
import { UserRequest } from "./user.model";

export const getById = (id: Number, db: BunSQLiteDatabase) => {
    const user = db
        .select()
        .from(users)
        .where(eq(users.id, id as any))
        .get();

    if (!user) throw new Error("User not found");

    return user;
}

export const getAll = (db: BunSQLiteDatabase) => {
    const dbUsers = db
        .select()
        .from(users)
        .all()

    return { users: dbUsers };
}

export const create = (userRequest: UserRequest, db: BunSQLiteDatabase) => {
    const userCreated = db.insert(users).values(userRequest).returning().get();

    return userCreated;
}

export const update = (id: Number, userRequest: UserRequest, db: BunSQLiteDatabase) => {
    const user = db
        .select()
        .from(users)
        .where(eq(users.id, id as any))
        .get();

    if (!user) throw new Error("User not found");

    const userUpdated = db
        .update(users)
        .set(userRequest)
        .where(eq(users.id, id as any))
        .returning()
        .get();

    return userUpdated;
}