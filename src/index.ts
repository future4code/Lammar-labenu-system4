import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ping } from "./endpoints/ping";
import { getAllEstudantes } from "./endpoints/estudantes/getAllEstudantes";
import { getAllTurmas } from "./endpoints/turmas/getAllTurmas";
import getAllDocentes from "./endpoints/docentes/getAllDocentes";
import criarDocente from "./endpoints/docentes/criarDocente";
import atualizarDocenteTurma from "./endpoints/docentes/atualizarDocenteTurma";
import criarEstudante from "./endpoints/estudantes/criarEstudante";
import criarTurma from "./endpoints/turmas/criarTurma";
import atualizarTurmaModulo from "./endpoints/turmas/atualizarTurmaModulo";
import getNomeEstudante from "./endpoints/estudantes/getNomeEstudante";
import mudarEstudanteTurma from "./endpoints/estudantes/mudarEstudanteTurma";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

//teste
app.get("/ping", ping);

//Estudante
app.get("/estudante", getNomeEstudante);
app.get("/all/estudante", getAllEstudantes);
app.post("/criar/estudante", criarEstudante);
app.put("/estudante", mudarEstudanteTurma);

//Turma
app.get("/all/turmas", getAllTurmas);
app.post("/criar/turma", criarTurma);
app.put("/turmas", atualizarTurmaModulo);

//Docente
app.get("/all/docentes", getAllDocentes);
app.post("/criar/docente", criarDocente);
app.put("/docentes", atualizarDocenteTurma);
