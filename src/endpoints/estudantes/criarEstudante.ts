import { Estudante } from "../../models/Estudante";
import { Request, Response } from "express";
import { EstudantesDatabase } from "../../database/EstudantesDatabase";

export default async function criarEstudante(req: Request, res: Response) {
  let errorCode = 400;
  try {
    const { nome, email, data_nasc, turma_id, hobby } = req.body;

    if (
      nome === "" ||
      email === "" ||
      data_nasc === "" ||
      turma_id === "" ||
      hobby === ""
    ) {
      throw new Error("Algum campo está vazio");
    }

    if (!nome || !email || !data_nasc || !turma_id || !hobby) {
      throw new Error("Dados inválidos");
    }

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }

    const estudante = new Estudante(
      Date.now().toString(),
      nome,
      email,
      data_nasc,
      turma_id,
      hobby
    );

    const estudanteDB = new EstudantesDatabase();
    await estudanteDB.adicionarEstudante(estudante);

    res.status(201).send({ message: "Estudante criado", estudante });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
}
