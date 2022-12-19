import { Usuario } from "./Usuario";

export type DocenteDB = {
   id: string;
   nome: string;
   email: string;
   data_nasc: string;
   turma_id?: string | null;
   especialidade_id?: string;
 }
 
 export class Docente extends Usuario{
   especialidade_id: string;
 
    public getId(): string {
     return this.id
    }
    public getNome(): string{
     return this.nome
    }
    public getEmail(): string{
     return this.email
    }
    public getDataNasc(): string{
     return this.data_nasc
    }
    public getTurmaId(): string{
     return this.turma_id
    }
 }