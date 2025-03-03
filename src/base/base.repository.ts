import { eq, getTableColumns, InferSelectModel } from "drizzle-orm";
import { BaseDatabase, BaseTable } from "./types";
import { PgTable, PgUpdateSetSource } from "drizzle-orm/pg-core";

export class BaseRepository<
  TTable extends BaseTable,
  TEntity = InferSelectModel<TTable>,
  CreateDto extends PgUpdateSetSource<TTable> = PgUpdateSetSource<TTable>,
  UpdateDto extends PgUpdateSetSource<TTable> = PgUpdateSetSource<TTable>,
  ReadDto = InferSelectModel<TTable>,
> {
  constructor(
    protected readonly db: BaseDatabase,
    protected readonly table: TTable,
  ) {}

  async create(data: CreateDto): Promise<TEntity> {
    const [created] = await this.db.insert(this.table).values(data).returning();

    return created as TEntity;
  }

  async findAll(): Promise<ReadDto[]> {
    const results = await this.db.select().from(this.table as PgTable);

    return results as ReadDto[];
  }

  async findOne(id: number): Promise<ReadDto | null> {
    const [result] = await this.db
      .select()
      .from(this.table as PgTable)
      .where(eq(this.table.id, id))
      .limit(1);

    return (result as ReadDto) || null;
  }

  async findByColumn<TColumn extends keyof TEntity>(
    column: TColumn,
    value: TEntity[TColumn],
  ): Promise<ReadDto[]> {
    const columns = getTableColumns(this.table);

    const data = await this.db
      .select()
      .from(this.table as PgTable)
      .where(eq(columns[column as string], value));

    return data as ReadDto[];
  }

  async update(id: number, data: UpdateDto): Promise<TEntity> {
    const updated = await this.db
      .update(this.table)
      .set(data)
      .where(eq(this.table.id, id))
      .returning();

    return updated as TEntity;
  }

  async remove(id: number): Promise<void> {
    await this.db.delete(this.table).where(eq(this.table.id, id));
  }
}
