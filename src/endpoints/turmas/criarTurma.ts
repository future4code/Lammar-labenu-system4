import { Request, Response } from "express";
import { TurmaDatabase } from "../../database/TurmaDatabase";
import { Turma } from "../../models/Turma";


export default async function criarTurma(req: Request, res: Response) {
    let errorCode = 400;
    try {
        const { nome, modulo } = req.body;

        if(nome === "" || modulo === ""){
            throw new Error("Algum campo está vazio");
        }

        if(!nome || !modulo ){
            throw new Error("Dados inválidos");
        }

        if(modulo > 6) {
            throw new Error("Módulo Inválido");
        }

        const turma = new Turma(
            Date.now().toString(),
            nome,
            modulo
          );

        const turmaDB = new TurmaDatabase();
        await turmaDB.adicionarTurma(turma);

        res.status(201).send({
            message: "Turma criada com sucesso!",
            turma,
          });
        
    } catch (error: any) {
        res.status(errorCode).send(error.message);
      }
}