import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

export abstract class BaseDatabase {
  protected static connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      multipleStatements: true,
    },
  });

  abstract TABLE_NAME: string;

  public async getAll() {
    const result = await BaseDatabase.connection(this.TABLE_NAME).select();
    return result;
  }

  public async create(item: any) {
    const result = await BaseDatabase.connection(this.TABLE_NAME).insert(item);
    return result;
  }

  public async mudar(turma_id: string, id: string) {  
    const result = await BaseDatabase.connection(this.TABLE_NAME).update({turma_id}).where({id})
    return result
  }
}