import { Global, Module } from "@nestjs/common";
import {
  ConfigurableDatabaseModule,
  CONNECTION_POOL,
  DATABASE_OPTIONS,
} from "./database.module-definition";
import { Pool } from "pg";
import { DatabaseOptions } from "./types";
import { DatabaseService } from "./database.service";

@Global()
@Module({
  exports: [DatabaseService],
  providers: [
    DatabaseService,
    {
      provide: CONNECTION_POOL,
      inject: [DATABASE_OPTIONS],
      useFactory: ({ connectionString }: DatabaseOptions) => {
        return new Pool({ connectionString });
      },
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}
