import Database from "bun:sqlite";
import { BunSQLiteDatabase, drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';


export class DatabaseFactory {
    connection: BunSQLiteDatabase;

    constructor() {
        const sqlite = new Database(':memory:');
        this.connection = drizzle(sqlite);
    }

    migrate() {
        migrate(this.connection, { migrationsFolder: './src/database/migrations' });
    }
}