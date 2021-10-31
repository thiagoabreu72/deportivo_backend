import express from "express";
import jogadorController from "../controllers/jogador.controller.js";

const routeJogador = express.Router();

routeJogador.post("/", jogadorController.insertJogador);
routeJogador.get("/", jogadorController.getJogadores);
routeJogador.get("/:nome", jogadorController.getJogador);
routeJogador.delete("/:id", jogadorController.deleteJogador);

export default routeJogador;
