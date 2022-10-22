/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

// R01
class Aluno {
  public nome!: string;
  public idade!: number;
  public nota!: number;

  constructor(aluno: Aluno) {
    Object.assign(this, aluno);
  }
}

let alunos: Aluno[] = [];

// R02
alunos.push(
  new Aluno({
    nome: "Shodan",
    idade: 44,
    nota: 8,
  }),
  new Aluno({
    nome: "Diego",
    idade: 33,
    nota: 10,
  }),
  new Aluno({
    nome: "Strokes",
    idade: 24,
    nota: 2.4,
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);

  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05

  alunos.forEach((aluno) => {
    console.log("");
    console.log(`Aluno(a): ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Nota: ${aluno.nota}`);
    console.log("_________");
  });
});
