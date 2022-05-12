import express from "express";
import jogosController from "../controllers/jogos.controller.js";

const routeJogos = express.Router();

routeJogos.post("/", jogosController.insertJogo);
routeJogos.get("/todos", jogosController.getJogos);
routeJogos.get("/:id", jogosController.getJogo);
routeJogos.delete("/:id", jogosController.deleteJogo);
routeJogos.put("/atualiza", jogosController.updateJogo);

export default routeJogos;
