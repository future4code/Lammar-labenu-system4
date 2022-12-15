import { BaseDatabase } from "./BaseDatabase";

export class TurmaDatabase extends BaseDatabase {
    static getAllTurmas() {
        throw new Error("Method not implemented.");
    }
    public async getAllTurmas(){
        try {
            return await BaseDatabase.connection("Turma").select();
        } catch (error: any) {
            throw new Error("Erro inesperado");          
        }
    }
}