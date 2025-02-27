import { eq, InferSelectModel } from "drizzle-orm";
import { BaseDatabase, BaseTable } from "./types";
import { PgTable, PgUpdateSetSource } from "drizzle-orm/pg-core";

export class BaseRepository<
  TTable extends BaseTable,
  TEntity = InferSelectModel<TTable>,
  CreateDto extends PgUpdateSetSource<TTable> = PgUpdateSetSource<TTable>,
  UpdateDto extends PgUpdateSetSource<TTable> = PgUpdateSetSource<TTable>,
> {
  constructor(
    protected readonly db: BaseDatabase,
    protected readonly table: TTable,
  ) {}

  async create(data: CreateDto): Promise<TEntity> {
    const [created] = await this.db.insert(this.table).values(data).returning();

    return created as TEntity;
  }

  async findAll(): Promise<TEntity[]> {
    const results = await this.db.select().from(this.table as PgTable);

    return results as TEntity[];
  }

  async findOne(id: number): Promise<TEntity | null> {
    const [result] = await this.db
      .select()
      .from(this.table as PgTable)
      .where(eq(this.table.id, id))
      .limit(1);

    return (result as TEntity) || null;
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
