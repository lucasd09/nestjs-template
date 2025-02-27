import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schemas from "../../drizzle/schemas";
import { CONNECTION_POOL } from "./database.module-definition";

@Module({
  providers: [
    {
      provide: CONNECTION_POOL,
      useFactory: (config: ConfigService) => {
        const pool = new Pool({
          connectionString: config.getOrThrow("DATABASE_URL"),
        });
        return drizzle(pool, { schema: schemas });
      },
      inject: [ConfigService],
    },
  ],
  exports: [CONNECTION_POOL],
})
export class DatabaseModule {}
