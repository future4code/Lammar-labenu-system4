import { Request, Response } from "express";
import { EstudantesDatabase } from "../../database/EstudantesDatabase";

export default async function getNomeEstudante(req: Request, res: Response) {
  let statusCode = 400;
  try {
    const nome = req.query.nome as string;

    const nomeEstudanteDataBase = new EstudantesDatabase();
    const result = await nomeEstudanteDataBase.getNomeEstudante(nome);

    res.status(200).send(result);
  } catch (error: any) {
    res.status(statusCode).send({ message: error.message });
  }
}
