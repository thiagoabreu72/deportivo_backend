import express from 'express';
import elencoController from '../controllers/elenco.controller.js';

const routeElenco = express.Router();

routeElenco.post("/",elencoController.insertElenco);
routeElenco.get("/",elencoController.getElenco);

routeElenco.delete("/",(req, res)=>{
    res.send('Deletando Elenco');
});

export default routeElenco;