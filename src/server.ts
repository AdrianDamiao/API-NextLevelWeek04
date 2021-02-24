import 'reflect-metadata'
import express, { request, response } from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

/**
 * Métodos HTTP Disponíveis
 *  GET => Busca
 * POST => Salvar Informacoes
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração Específica
 

//http://localhost:3333/users
app.get("/", (request, response) => {
    //return response.send("Hello World - NLW04");
    return response.json({message: "NLW04"}); //Json é o mais usual de ser retornado
});

//1° param => Rota(Recurso API) a rota / so pode ser usada se for em metodos diferentes
//2° para => request, response
app.post("/", (request, response) => { 
    //Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso"})
});

//Transpile nao vai checar erros de sintaxe, ignore vai ignorar o que acontece em node modules*/
app.listen(3333, () => console.log("Server is running!"));