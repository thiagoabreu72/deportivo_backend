import express from 'express';

const routeTime = express.Router();

routeTime.get("/",(req, res)=>{
    res.send('Consultando Time');
});

routeTime.post("/",(req, res)=>{
    res.send('Inserindo Time');
});

routeTime.delete("/",(req, res)=>{
    res.send('Deletando Time');
});


export default routeTime;