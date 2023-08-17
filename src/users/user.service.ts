import { eq } from "drizzle-orm";
import { BunSQLiteDatabase } from "drizzle-orm/bun-sqlite";
import { insertUserSchema, users } from "../database/schema/users.schema";

export const getById = (id: number, db: BunSQLiteDatabase) => {
    const user = db.select()
        .from(users)
        .where(eq(users.id, id))
        .limit(1)
        .all()[0];

    if (!user) throw new Error("User not found");

    return user;
}

export const getAll = (db: BunSQLiteDatabase) => {
    const dbUsers = db.select()
        .from(users)
        .all()

    return { users: dbUsers };
}

export const create = (userRequest: insertUserSchema, db: BunSQLiteDatabase) => {
    return db.insert(users)
        .values(userRequest)
        .returning()
        .all()[0];
}

export const update = (id: Number, userRequest: insertUserSchema, db: BunSQLiteDatabase) => {
    const user = db.select()
        .from(users)
        .where(eq(users.id, id as any))
        .limit(1)
        .all()[0];

    if (!user) throw new Error("User not found");

    return db.update(users)
        .set(userRequest)
        .where(eq(users.id, id as any))
        .returning()
        .all()[0]
}