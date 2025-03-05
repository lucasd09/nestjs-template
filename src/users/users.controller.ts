import { Controller, Get, Param } from "@nestjs/common";

import { BaseController } from "../base/base.controller";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { ReadUserDto } from "./dto/read-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController extends BaseController<
  User,
  CreateUserDto,
  UpdateUserDto,
  ReadUserDto
> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  @Get("findByEmail/:email")
  async findByEmail(@Param("email") email: string) {
    return this.usersService.findByEmail(email);
  }
}
