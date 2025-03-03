export abstract class BaseService<TEntity, CreateDto, UpdateDto, ReadDto> {
  abstract create(createDto: CreateDto): Promise<TEntity>;
  abstract findAll(): Promise<ReadDto[]>;
  abstract findOne(id: number): Promise<ReadDto>;
  abstract update(id: number, updateDto: UpdateDto): Promise<TEntity>;
  abstract remove(id: number): Promise<void>;
}
