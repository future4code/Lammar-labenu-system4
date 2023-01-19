import { Estudante } from "../models/Estudante";
import { BaseDatabase } from "./BaseDatabase";

export class EstudantesDatabase extends BaseDatabase {
  TABLE_NAME: string = "Estudante";
  
  public async adicionar(estudante: Estudante) {
    return await super.create(estudante);
  }

  public async getAll() {
    return super.getAll();
  }

  public async mudar(turma_id: string, id: string) {
    return await super.mudar(turma_id, id)
  }

  public async getNomeEstudante(nome: string) {
    try {
      return await BaseDatabase.connection("Estudante")
        .select()
        .where("nome", "like", `%${nome}`);
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }
}
