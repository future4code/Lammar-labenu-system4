export type EstudanteHobbyDB = {
    id: string;
    estudante_id: string;
    hobby_id: string;
}

export class EstudanteHobby {
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