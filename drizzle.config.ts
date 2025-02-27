import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/schemas/*",
  out: "./drizzle/migrations",
  dbCredentials: { url: process.env.DATABASE_URL ?? "" },
});
