import Database from "bun:sqlite";
import { BunSQLiteDatabase, drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

export class DatabaseFactory {
    static create(config?: any) {
        const sqlite = new Database(':memory:');
        return drizzle(sqlite);
    }

    static migrate(db: BunSQLiteDatabase) {
        migrate(db, { migrationsFolder: './src/database/migrations' });
    }
}