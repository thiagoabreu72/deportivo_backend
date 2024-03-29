import express from "express";
import jogadorController from "../controllers/jogador.controller.js";

const routeJogador = express.Router();

routeJogador.post("/", jogadorController.insertJogador);
routeJogador.get("/todos", jogadorController.getJogadores);
routeJogador.get("/query", jogadorController.getJogador);
routeJogador.delete("/:id", jogadorController.deleteJogador);
routeJogador.put("/atualiza", jogadorController.updateJogador);

export default routeJogador;
