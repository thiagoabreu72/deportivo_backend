import express from 'express';

const routeJogador = express.Router();

routeJogador.get("/",(req, res)=>{
    res.send('Consultando Jogador');
});

routeJogador.post("/",(req, res)=>{
    res.send('Inserindo Jogador');
});

routeJogador.delete("/",(req, res)=>{
    res.send('Deletando Jogador');
});

export default routeJogador;