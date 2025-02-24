import { Inject, Injectable } from "@nestjs/common";
import { Pool } from "pg";
import { CONNECTION_POOL } from "./database.module-definition";
import { drizzle } from "drizzle-orm/node-postgres";
import { Database } from "./types";
import * as schema from "../../drizzle/schemas";

@Injectable()
export class DatabaseService {
  public db: Database;
  constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {
    this.db = drizzle(this.pool, { schema });
  }
}
