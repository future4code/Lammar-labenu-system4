import { Docente } from "../models/Docente";
import { BaseDatabase } from "./BaseDatabase";

export class DocentesDatabase extends BaseDatabase {
  TABLE_NAME: string = "Docente";

  public async adicionar(docente: Docente) {
    return await super.create(docente) 
  }

  public async getAll() {
    return super.getAll();
  }

  public async mudar(turma_id: string, id: string) {
    return await super.mudar(turma_id, id)
  }
}
