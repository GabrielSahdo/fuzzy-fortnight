import Database from "bun:sqlite";
import { BunSQLiteDatabase, drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import drizzleConfig from "../../drizzle.config";

export class DatabaseFactory {
    static create(config?: any) {
        const sqlite = new Database('sqlite.db');
        return drizzle(sqlite);
    }

    static migrate(db: BunSQLiteDatabase) {
        migrate(db, { migrationsFolder: drizzleConfig.out });
    }
}