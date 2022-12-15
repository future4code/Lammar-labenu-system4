import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { getAllEstudantes } from './endpoints/getAllEstudantes'
import { getAllTurmas } from './endpoints/getAllTurmas'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

//teste
app.get("/ping", ping)

app.get("/all/estudantes", getAllEstudantes)

app.get("/all/turmas", getAllTurmas)