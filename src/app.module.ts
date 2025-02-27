import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connectionString: config.getOrThrow("DATABASE_URL"),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
