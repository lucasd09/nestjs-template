export abstract class BaseService<T, CreateDto, UpdateDto, ReadDto> {
  abstract create(createDto: CreateDto): Promise<T>;
  abstract findAll(): Promise<ReadDto[]>;
  abstract findOne(id: string): Promise<ReadDto>;
  abstract update(id: string, updateDto: UpdateDto): Promise<T>;
  abstract remove(id: string): Promise<void>;
}
