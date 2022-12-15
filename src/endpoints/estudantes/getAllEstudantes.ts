import { EstudantesDatabase } from "../../database/EstudantesDatabase";
import { Request, Response } from "express";

export const getAllEstudantes = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const estudanteDataBase = new EstudantesDatabase();
    const result = await estudanteDataBase.getAllEstudantes();

    res.status(200).send({ estudantes: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
