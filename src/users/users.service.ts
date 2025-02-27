import { Injectable, NotFoundException } from "@nestjs/common";
import { BaseService } from "src/base/base.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ReadUserDto } from "./dto/read-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto,
  ReadUserDto
> {
  constructor(private readonly repository: UsersRepository) {
    super();
  }

  async create(data: CreateUserDto): Promise<User> {
    const result = await this.repository.create(data);

    return result;
  }
  async findAll(): Promise<ReadUserDto[]> {
    const result = await this.repository.findAll();

    if (!result.length) {
      throw new NotFoundException();
    }

    return result;
  }
  async findOne(id: number): Promise<ReadUserDto> {
    const result = await this.repository.findOne(id);

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }
  async update(id: number, data: UpdateUserDto): Promise<User> {
    const result = await this.repository.update(id, data);

    return result;
  }
  async remove(id: number): Promise<void> {
    await this.repository.remove(id);
  }
}
