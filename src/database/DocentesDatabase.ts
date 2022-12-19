import { Docente } from "../models/Docente";
import { BaseDatabase } from "./BaseDatabase";

export class DocenteDatabase extends BaseDatabase {
  TABLE_NAME: string = "Docente";

  public async adicionar(docente: Docente) {
    await super.create(docente) 
  }

  public async getAll() {
    return super.getAll();
  }

  public async mudarDocenteTurma(turma_id: string, id: string) {
    try {
      await BaseDatabase.connection("Docente")
        .update({ turma_id: turma_id })
        .where({ id: id });
    } catch (error: any) {
      throw new Error("Erro inesperado, verificar requisição");
    }
  }
}
