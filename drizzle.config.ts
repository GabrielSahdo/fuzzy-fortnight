import type { Config } from 'drizzle-kit';

export default {
    schema: "./src/database/schema/*",
    out: "./src/database/migrations",
} satisfies Config;