import { Body, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BaseService } from "./base.service";

export class BaseController<T, CreateDto, UpdateDto, ReadDto> {
  constructor(
    private readonly baseService: BaseService<T, CreateDto, UpdateDto, ReadDto>,
  ) {}

  @Post()
  async create(@Body() createDto: CreateDto): Promise<T> {
    return this.baseService.create(createDto);
  }

  @Get()
  async findAll(): Promise<ReadDto[]> {
    return this.baseService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<ReadDto> {
    return this.baseService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateDto: UpdateDto,
  ): Promise<T> {
    return this.baseService.update(id, updateDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<void> {
    return this.baseService.remove(id);
  }
}
