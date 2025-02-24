import { Controller } from "@nestjs/common";

import { BaseController } from "src/base/base.controller";
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
  constructor(private readonly userService: UsersService) {
    super(userService);
  }
}
