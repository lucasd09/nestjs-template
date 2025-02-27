export abstract class BaseService<T, CreateDto, UpdateDto, ReadDto> {
  abstract create(createDto: CreateDto): Promise<T>;
  abstract findAll(): Promise<ReadDto[]>;
  abstract findOne(id: number): Promise<ReadDto>;
  abstract update(id: number, updateDto: UpdateDto): Promise<T>;
  abstract remove(id: number): Promise<void>;
}
