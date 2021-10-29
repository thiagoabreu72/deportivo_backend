import express from 'express';

const routeJogo = express.Router();

routeJogo.get("/",(req, res)=>{
    res.send('Consultando Jogo');
});

routeJogo.post("/",(req, res)=>{
    res.send('Inserindo Jogo');
});

routeJogo.delete("/",(req, res)=>{
    res.send('Deletando Jogo');
});

export default routeJogo;