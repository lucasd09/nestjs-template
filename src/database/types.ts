import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schemas";

export type Database = NodePgDatabase<typeof schema>;
export type DatabaseOptions = { connectionString: string };
