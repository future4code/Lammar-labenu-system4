import { Request, Response } from "express";
import { EstudantesDatabase } from "./../../database/EstudantesDatabase";

export default async function mudarEstudanteTurma(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { turma_id, id } = req.body;

    if (turma_id === "" || id === "") {
      throw new Error("Turma não pode ser vazia");
    }

    if (!turma_id || !id) {
      throw new Error("Dados inválidos");
    }

    const docenteDB = new EstudantesDatabase();
    await docenteDB.mudarEstudanteTurma(turma_id, id);

    res.status(200).end("Atualizado!");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
