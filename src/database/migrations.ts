import connection from "./connection";
import { docente, estudante, turma, especialidade, docente_especialidade, hobby, estudante_hobby } from "./data";

const createTables = async () => {
  await connection.raw(`
        CREATE TABLE IF NOT EXISTS Turma (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            modulo VARCHAR(255) default '0',
        );

        CREATE TABLE IF NOT EXISTS Estudante (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            data_nasc DATE NOT NULL,
            turma_id VARCHAR(255),
            FOREIGN KEY (turma_id) REFERENCES Turma(id)
        );

        CREATE TABLE IF NOT EXISTS Hobby (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL unique
        );

        CREATE TABLE IF NOT EXISTS Estudante_Hobby (
            id VARCHAR(255) PRIMARY KEY,
            estudante_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (estudante_id) REFERENCES Estudante(id),
            hobby_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
        );

        CREATE TABLE IF NOT EXISTS Docente (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            data_nasc DATE NOT NULL,
            turma_id VARCHAR(255),
            FOREIGN KEY (turma_id) REFERENCES Turma(id)
        );
            
        CREATE TABLE IF NOT EXISTS Especialidade (
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL unique
        );
            
        CREATE TABLE IF NOT EXISTS Docente_Especialidade (
            id VARCHAR(255) PRIMARY KEY,
            docente_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (docente_id) REFERENCES Docente(id),
            especialidade_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (especialidade_id) REFERENCES Especialidade(id)
        );

    `)
    .then(() => {
        console.log("Tabelas criadas com sucesso!");
        insertData();
    })
    .catch((err: any) => {
        console.log(err);
    });
};

const insertData = async () => {
    try {
        await connection("Turma")
        .insert(turma)
        .then(() => {
            console.log("Dados inseridos com sucesso!");
        })
        .catch((err: any) => {
            console.log(err);
        });

        await connection("Estudante")
        .insert(estudante)
        .then(() => {
            console.log("Dados inseridos com sucesso!");
        })
        .catch((err: any) => {
            console.log(err);
        });

        await connection("Docente")
        .insert(docente)
        .then(() => {
            console.log("Dados inseridos com sucesso!");
        })
        .catch((err: any) => {
            console.log(err);
        });

        await connection("Hobby")
        .insert(hobby)
        .then(() => {
            console.log("Dados inseridos com sucesso!");
        })
        .catch((err: any) => {
            console.log(err);
        });

        await connection("Estudante_Hobby")
        .insert(estudante_hobby)
        .then(() => {
            console.log("Dados inseridos com sucesso!");
        })
        .catch((err: any) => {
            console.log(err);
        });

        await connection("Especialidade")
        .insert(especialidade)
        .then(() => {
            console.log("Dados inseridos com sucesso!");
        })
        .catch((err: any) => {
            console.log(err);
        });

        await connection("Docente_Especialidade")
        .insert(docente_especialidade)
        .then(() => {
            console.log("Dados inseridos com sucesso!");
        })
        .catch((err: any) => {
            console.log(err);
        });
        
    } catch (error) {
        console.log(error.sqlMessage || error.message);
    } finally {
        console.log("Encerrando conexão...");
        return connection.destroy();
    }
};
