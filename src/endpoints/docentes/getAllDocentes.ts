import { Request, Response } from 'express'
import { DocenteDatabase } from '../../database/DocentesDatabase'

export default async function getDocentes(req: Request, res: Response): Promise<void> {
    try {

        const docenteDB = new DocenteDatabase()
        const docentes = await docenteDB.getAllDocentes()
        
        res.status(200).send(docentes)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}