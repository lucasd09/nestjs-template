import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { DatabaseModule } from "src/database/database.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  imports: [DatabaseModule],
})
export class UsersModule {}
