import { Estudante } from "../models/Estudante";
import { BaseDatabase } from "./BaseDatabase";

export class EstudantesDatabase extends BaseDatabase {
  TABLE_NAME: string = "Estudante";

  public async adicionarEstudante(estudante: Estudante) {
    await super.create(estudante).insert({
      hobby: estudante.getHobby()
  });
  }

  public async getAll() {
    return super.getAll();
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

  public async mudarEstudanteTurma(turma_id: string, id: string) {
    try {
      await BaseDatabase.connection("Estudante")
        .update({ turma_id: turma_id })
        .where({ id: id });
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }
}
