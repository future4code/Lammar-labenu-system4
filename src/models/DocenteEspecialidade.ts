export type DocenteEspecialidadeDB = {
    id: string;
    docente_id: string;
    especialidade_id: string;
}

export class DocenteEspecialidade {
    constructor(
        private id: string,
        private docente_id: string,
        private especialidade_id: string
    ) {}
    public getId(): string {
        return this.id;
    }
    public getDocenteId(): string {
        return this.docente_id;
    }
    public getEspecialidadeId(): string {
        return this.especialidade_id;
    }
}