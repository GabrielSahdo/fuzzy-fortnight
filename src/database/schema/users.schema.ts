import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

export const users = sqliteTable("user", {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    surname: text("surname").notNull(),
    email: text("email").notNull(),
});

export const insertUserSchema = createInsertSchema(users);
export type insertUserSchema = typeof insertUserSchema.static;
export const selectUserSchema = createSelectSchema(users);
export type selectUserSchema = typeof selectUserSchema.static;