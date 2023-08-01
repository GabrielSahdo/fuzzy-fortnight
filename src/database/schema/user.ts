import { text, sqliteTable } from 'drizzle-orm/sqlite-core';
import { InferModel } from 'drizzle-orm';

export const user = sqliteTable("user", {
    id: text("id").primaryKey(),
    fullName: text("full_name").notNull(),
});

export type DBUser = InferModel<typeof user>;