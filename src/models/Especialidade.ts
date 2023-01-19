export type EspecialidadeDB = {
    id: string;
    nome: string;
};

export class Especialidade {
    constructor(
        private id: string,
        private nome: string,
    ) {}
    public getId(): string {
        return this.id;
    }
    public getNome(): string {
        return this.nome;
    }
}