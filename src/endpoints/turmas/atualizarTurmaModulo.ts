import { Request, Response } from 'express'
import { TurmaDatabase } from '../../database/TurmaDatabase'


export default async function atualizarTurmaModulo(req: Request, res: Response): 
Promise<void>{
    try {

        const {id, modulo} = req.body

        if(id === "" || modulo === "") {
            throw new Error("Turma nem módulo podem ser vazios")
        }

        if(!id || !modulo) {
            throw new Error("Dados inválidos")
        }

        const turmaDB = new TurmaDatabase()
        await turmaDB.mudarTurmaModulo(id, modulo)

        
        res.status(200).end("Atualizado!")
    } catch (error: any) {
        res.status(500).send(error.message)
    }

}