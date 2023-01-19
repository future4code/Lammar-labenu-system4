import { TurmaDatabase } from "../../database/TurmaDatabase";
import { Request, Response } from "express";


export const getAllTurmas = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const turmaDatabase = new TurmaDatabase();
    const result = await turmaDatabase.getAll();
    

    res.status(200).send({ turmas: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};