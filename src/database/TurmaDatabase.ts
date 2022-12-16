import { Turma } from "../models/Turma";
import { BaseDatabase } from "./BaseDatabase";


export class TurmaDatabase extends BaseDatabase {

    public async adicionarTurma(turma: Turma) {
        try {
            await BaseDatabase.connection("Turma").insert({
                id: turma.getId(),
                nome: turma.getNome(),
                modulo: turma.getModulo(),
            });
            
        } catch (error: any) {
            throw new Error("Erro Inesperado")
            
        }
    }

    public async getAllTurmas(){
        try {
            const result = await BaseDatabase.connection("Turma")
            .select()
            return result
          } catch (error: any) {
            throw new Error("Erro inesperado")
          }
        }

        public async mudarTurmaModulo(id: string, modulo:number) {
            try {
              await BaseDatabase.connection("Turma")
              .update({modulo: modulo})
              .where({id: id})
            } catch (error: any) {
              throw new Error("Erro inesperado, verificar requisição")
            }
          } 

}