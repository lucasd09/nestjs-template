import { Body, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BaseService } from "./base.service";

export class BaseController<TEntity, CreateDto, UpdateDto, ReadDto> {
  constructor(
    private readonly baseService: BaseService<
      TEntity,
      CreateDto,
      UpdateDto,
      ReadDto
    >,
  ) {}

  @Post()
  async create(@Body() createDto: CreateDto): Promise<TEntity> {
    return this.baseService.create(createDto);
  }

  @Get()
  async findAll(): Promise<ReadDto[]> {
    return this.baseService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<ReadDto> {
    return this.baseService.findOne(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() updateDto: UpdateDto,
  ): Promise<TEntity> {
    return this.baseService.update(id, updateDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: number): Promise<void> {
    return this.baseService.remove(id);
  }
}
