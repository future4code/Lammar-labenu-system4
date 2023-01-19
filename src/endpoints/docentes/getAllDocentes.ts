import { Request, Response } from 'express'
import { DocentesDatabase } from '../../database/DocentesDatabase'

export default async function getDocentes(req: Request, res: Response): Promise<void> {
    try {

        const docenteDB = new DocentesDatabase()
        const docentes = await docenteDB.getAll()
        
        res.status(200).send(docentes)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}