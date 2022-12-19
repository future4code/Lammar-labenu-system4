export type DocenteDB = {
    id: string,
    nome: string,
    email: string,
    data_nasc: String,
    turma_id?: String | null,
 }
 
 export class Docente {
    constructor (
     private id: string,
     private nome: string,
     private email: string,
     private data_nasc: Date,
     private turma_id?: String | null,
    ){}
 
    public getId() {
     return this.id
    }
    public getNome(){
     return this.nome
    }
    public getEmail(){
     return this.email
    }
    public getDataNasc(){
     return this.data_nasc
    }
    public getTurmaId(){
     return this.turma_id
    }
 }