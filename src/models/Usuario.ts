export type UsuarioDB = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id?: String | null,
    }

export class Usuario {
    constructor (
     public id: string,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id?: string | null
    ){
        this.id = id;
        this.nome = nome;
    }

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