import { Estudante } from "../models/Estudante";
import { BaseDatabase } from "./BaseDatabase";

export class EstudantesDatabase extends BaseDatabase {
  static getAllEstudantes() {
    throw new Error("Method not implemented.");
  }

  public async adicionarEstudante(estudante: Estudante) {
    try {
      await BaseDatabase.connection("Estudante").insert({
        id: estudante.getId(),
        nome: estudante.getNome(),
        email: estudante.getEmail(),
        data_nasc: estudante.getDataNasc(),
        turma_id: estudante.getTurmaId(),
      });
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }

  public async getAllEstudantes() {
    try {
      return await BaseDatabase.connection("Estudante").select();
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }
}
