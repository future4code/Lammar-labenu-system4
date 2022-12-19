import { TurmaDB } from '../models/Turma';
import { EstudanteDB } from '../models/Estudante';
import { DocenteDB } from '../models/Docente';
import { EspecialidadeDB } from '../models/Especialidade';
import { HobbyDB } from '../models/Hobby';

export const turma: TurmaDB[] = [
    {
        id: "001",
        nome: "Turma-lamarr",
        modulo: "6"
    },
    {
        id: "002",
        nome: "Turma-barros",
        modulo: "6"	
    }
];

export const estudante: EstudanteDB[] = [
    {
        id: "001",
        nome: "Estudante 1",
        email: "estudante@gmail.com",
        data_nasc: "02-10-2000",
        turma_id: 1,
    },
    {
        id: "002",
        nome: "Estudante 2",
        email: "estudante2@gmail.com",
        data_nasc: "02-10-2000",
        turma_id: 2,
    }
];

export const hobby: HobbyDB[] = [
    {
        id: "001",
        nome: "ler"
    },
    {
        id: "002",
        nome: "comer"
    }
];

export const estudante_hobby = [
    {
        id: "001",
        estudante_id: "001",
        hobby_id: "001"
    },
    {
        id: "002",
        estudante_id: "002",
        hobby_id: "002"
    }
];

export const docente: DocenteDB[] = [
    {
        id: "001",
        nome: "fayra",
        email: "fayra@gmail.com",
        data_nasc: "20-10-1998",
        turma_id: 1
    },
    {
        id: "002",
        nome: "junior",
        email: "junior@gmail.com",
        data_nasc: "20-10-1998",
        turma_id: 2
    }
];

export const especialidade: EspecialidadeDB[] = [
    {
        id: "001",
        nome: "typescript"
    },
    {
        id: "002",
        nome: "React"
    }
];

export const docente_especialidade = [
    {
        id: "001",
        docente_id: "001",
        especialidade_id: "001"
    },
    {
        id: "002",
        docente_id: "002",
        especialidade_id: "002"
    },
];
