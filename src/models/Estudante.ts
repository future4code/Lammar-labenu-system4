import { Usuario } from "./Usuario";

export type EstudanteDB = {
  id: string;
  nome: string;
  email: string;
  data_nasc: string;
  turma_id?: string | null;
  hobby_id?: string | null;
}

export class Estudante extends Usuario {
  hobby_id: string;

  public getId(): string {
    return this.id;
  }
  public getNome(): string {
    return this.nome;
  }
  public getEmail(): string {
    return this.email;
  }
  public getDataNasc(): string {
    return this.data_nasc;
  }
  public getTurmaId(): string {
    return this.turma_id;
  }
  public getHobbyId(): string {
    return this.hobby_id;
  }
}
