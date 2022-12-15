export type DovcenteDB = {
    id: string,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: number
 }
 
 export class Docente {
    constructor (
     private id: string,
     private nome: string,
     private email: string,
     private data_nasc: Date,
     private turma_id: number
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