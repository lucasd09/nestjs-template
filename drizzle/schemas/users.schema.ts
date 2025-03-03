import { pgTable, text } from "drizzle-orm/pg-core";
import { id } from "./_utils";

export const usersTable = pgTable("users", {
  id: id(),
  name: text().notNull(),
  email: text().notNull().unique(),
  password: text(),
});
