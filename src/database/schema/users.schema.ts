import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable("user", {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    surname: text("surname").notNull(),
    email: text("email").notNull(),
});