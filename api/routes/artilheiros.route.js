import express from "express";
import artilheirosController from "../controllers/artilheiros.controller.js";

const routeArtilheiros = express.Router();

routeArtilheiros.post("/", artilheirosController.insertArtilheiro);
routeArtilheiros.get("/todos", artilheirosController.getArtilheiros);
routeArtilheiros.get("/:id", artilheirosController.getArtilheiro);
routeArtilheiros.put("/atualiza", artilheirosController.updateArtilheiro);
routeArtilheiros.delete("/", artilheirosController.deleteArtilheiro);

export default routeArtilheiros;
 