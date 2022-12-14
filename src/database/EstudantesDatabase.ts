import { BaseDatabase } from "./BaseDatabase";

export class EstudantesDatabase extends BaseDatabase {
  static getAllEstudantes() {
    throw new Error("Method not implemented.");
  }
  public async getAllEstudantes() {
    try {
      return await BaseDatabase.connection("Estudante").select();
    } catch (error: any) {
      throw new Error("Erro inesperado");
    }
  }
}
