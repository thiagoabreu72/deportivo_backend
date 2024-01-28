import express from "express";
import jogosController from "../controllers/jogos.controller.js";

const routeJogos = express.Router();

routeJogos.post("/", jogosController.insertJogo);
routeJogos.get("/estatistica", jogosController.getEstatisticas);
routeJogos.get("/todos", jogosController.getJogos);
routeJogos.get("/artilheiros/:idjogo", jogosController.getJogoArtilheiros);
routeJogos.get("/:id", jogosController.getJogo);
routeJogos.delete("/:id", jogosController.deleteJogo);
routeJogos.put("/atualiza", jogosController.updateJogo);

export default routeJogos;
