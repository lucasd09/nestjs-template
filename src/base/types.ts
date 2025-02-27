import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { AnyPgColumn, AnyPgTable } from "drizzle-orm/pg-core";

export type BaseSchema = Record<string, unknown>;

export type BaseTable = AnyPgTable & {
  id: AnyPgColumn<{ data: number }>;
};

export type BaseDatabase = NodePgDatabase<BaseSchema>;
