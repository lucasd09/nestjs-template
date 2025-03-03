import { Inject, Injectable } from "@nestjs/common";
import { usersTable } from "drizzle/schemas";
import { BaseRepository } from "src/base/base.repository";
import { Database } from "../database/types";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { CONNECTION_POOL } from "../database/database.module-definition";

@Injectable()
export class UsersRepository extends BaseRepository<
  typeof usersTable,
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(@Inject(CONNECTION_POOL) protected readonly db: Database) {
    super(db, usersTable);
  }
}
