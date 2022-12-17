import { Turma } from "../models/Turma";
import { BaseDatabase } from "./BaseDatabase";

export class TurmaDatabase extends BaseDatabase {
  TABLE_NAME: string = "Turma";

  public async adicionarTurma(turma: Turma) {
    await super.create(turma);
  }

  public async getAll() {
    return super.getAll();
  }

  public async mudarTurmaModulo(id: string, modulo: number) {
    try {
      await BaseDatabase.connection("Turma")
        .update({ modulo: modulo })
        .where({ id: id });
    } catch (error: any) {
      throw new Error("Erro inesperado, verificar requisição");
    }
  }
}
