import { Request, Response } from "express";
import { Docente } from "../../models/Docente";
import { DocentesDatabase } from "../../database/DocentesDatabase";

export default async function criarDocente(req: Request, res: Response) {
  let errorCode = 400;
    try {
    const { nome, email, data_nasc } = req.body;

    if(nome === "" || email === "" || data_nasc === "") {
        throw new Error("Algum campo está vazio");
    }

    if(!nome || !email || !data_nasc) {
        throw new Error("Dados inválidos");
    }

    if(!email.includes("@")) {
        throw new Error("Email inválido");
    }

    if(data_nasc.length !== 10) {
        throw new Error("Data inválida");
    }

    const docente = new Docente(
      Date.now().toString(),
      nome,
      email,
      data_nasc
    );

    const docenteDB = new DocentesDatabase();
    await docenteDB.adicionar(docente);

    res.status(201).send({
      message: "Professor criado com sucesso!",
      docente,
    });
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
}
