export type TurmaDB = {
    id: string; 
    nome: string;
    modulo: number
}

export class Turma {
    constructor(
        private id: string, 
        private nome: string, 
        private modulo: number,
    ) {}
    public getId(): string {
        return this.id;
    }
    public getNome(): string {
        return this.nome;
    }
    public getModulo(): number {
        return this.modulo;
    }
}