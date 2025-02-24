import { Injectable } from "@nestjs/common";
import { BaseService } from "src/base/base.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ReadUserDto } from "./dto/read-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto,
  ReadUserDto
> {
  create(data: CreateUserDto): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<ReadUserDto[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<ReadUserDto> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: UpdateUserDto): Promise<User> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
