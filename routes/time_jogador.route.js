import express from 'express';

const routeTimeJogador = express.Router();

routeTimeJogador.get("/",(req, res)=>{
    res.send('Consultando Time/Jogadores');
});

routeTimeJogador.post("/",(req, res)=>{
    res.send('Inserindo Time/Jogadores');
});

routeTimeJogador.delete("/",(req, res)=>{
    res.send('Deletando Time/Jogadores');
});

export default routeTimeJogador;