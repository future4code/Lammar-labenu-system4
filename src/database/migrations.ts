import connection from "./connection";
import { docente, estudante, turma, especialidade, docente_especialidade, hobby, estudante_hobby } from "./data";
import { TABLE_DOCENTE, TABLE_DOCENTE_ESPECIALIDADE, TABLE_ESPECIALIDADE, TABLE_ESTUDANTE, TABLE_ESTUDANTE_HOBBY, TABLE_HOBBY, TABLE_TURMA  } from "./tableNames";

const createTables = async () => {
  await connection.raw(`

  DROP TABLE IF EXISTS ${TABLE_DOCENTE},${TABLE_ESTUDANTE}, ${TABLE_DOCENTE_ESPECIALIDADE}, ${TABLE_ESPECIALIDADE}, ${TABLE_HOBBY}, ${TABLE_ESTUDANTE_HOBBY}, ${TABLE_TURMA};

        CREATE TABLE IF NOT EXISTS ${TABLE_TURMA}(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255),
            modulo VARCHAR(255) default '0'
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_ESTUDANTE}(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            data_nasc DATE NOT NULL,
            turma_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (turma_id) REFERENCES ${TABLE_TURMA}(id)
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_HOBBY}(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_ESTUDANTE_HOBBY}(
            id VARCHAR(255) PRIMARY KEY,
            estudante_id VARCHAR(255) NOT NULL,
            hobby_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (estudante_id) REFERENCES ${TABLE_ESTUDANTE}(id),
            FOREIGN KEY (hobby_id) REFERENCES ${TABLE_HOBBY}(id)
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_DOCENTE}(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            data_nasc DATE NOT NULL,
            turma_id VARCHAR(255),
            FOREIGN KEY (turma_id) REFERENCES ${TABLE_TURMA}(id)
        );
            
        CREATE TABLE IF NOT EXISTS ${TABLE_ESPECIALIDADE}(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_DOCENTE_ESPECIALIDADE}(
            id VARCHAR(255) PRIMARY KEY,
            docente_id VARCHAR(255) NOT NULL,
            especialidade_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (docente_id) REFERENCES ${TABLE_DOCENTE}(id),
            FOREIGN KEY (especialidade_id) REFERENCES ${TABLE_ESPECIALIDADE}(id)
        );

    `)
    .then(() => {
        console.log("Tabelas criadas com sucesso!");
        insertData();
    })
    .catch((error: any) => printError(error));
};

const insertData = async () => {
    try {
        await connection(TABLE_TURMA)
        .insert(turma)
        .then(() => {
            console.log(`${TABLE_TURMA} inserido com sucesso!`);
        })
        .catch((error: any) => printError(error));

        await connection(TABLE_ESTUDANTE)
        .insert(estudante)
        .then(() => {
            console.log(`${TABLE_ESTUDANTE} inserido com sucesso!`);
        })
        .catch((error: any) => printError(error));

        await connection(TABLE_DOCENTE)
        .insert(docente)
        .then(() => {
            console.log(`${TABLE_DOCENTE} inserido com sucesso!`);
        })
        .catch((error: any) => printError(error));

        await connection(TABLE_HOBBY)
        .insert(hobby)
        .then(() => {
            console.log(`${TABLE_HOBBY} inserido com sucesso!`);
        })
        .catch((error: any) => printError(error));

        await connection(TABLE_ESTUDANTE_HOBBY)
        .insert(estudante_hobby)
        .then(() => {
            console.log(`${TABLE_ESTUDANTE_HOBBY} inserido com sucesso!`);
        })
        .catch((error: any) => printError(error));

        await connection(TABLE_ESPECIALIDADE)
        .insert(especialidade)
        .then(() => {
            console.log(`${TABLE_ESPECIALIDADE} inserido com sucesso!`);
        })
        .catch((error: any) => printError(error));

        await connection(TABLE_DOCENTE_ESPECIALIDADE)
        .insert(docente_especialidade)
        .then(() => {
            console.log(`${TABLE_DOCENTE_ESPECIALIDADE} inserido com sucesso!`);
        })
        .catch((error: any) => printError(error));
        
    } catch (error: any) {
        console.log(error.sqlMessage || error.message);
    } finally {
        console.log("Encerrando conexão...");
        return connection.destroy();
    }
};

const printError = (err: any) => {
    console.log(err.sqlMessage || err.message);
};

createTables();