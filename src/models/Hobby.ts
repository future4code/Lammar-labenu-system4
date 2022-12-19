export type HobbyDB = {
    id: string;
    nome: string;
}

export class Hobby {
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
