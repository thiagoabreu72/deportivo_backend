import express from "express";
import cors from "cors";
import routeJogador from "./routes/jogador.route.js";
import routeJogos from "./routes/jogos.route.js";
import routeTime from "./routes/time.route.js";
import routeElenco from "./routes/elenco.route.js";
import routeArtilheiros from "./routes/artilheiros.route.js";
import routeAuth from "./routes/autorizacao.route.js";
import dotenv from "dotenv/config";

const app = express(); // cria um objeto do express
app.use(express.json()); // habilita para usar dados como json de parâmetros de entrada
app.use(cors());

// Abaixo são os direcionamentos de rotas
app.use("/jogador", routeJogador);
app.use("/time", routeTime);
app.use("/elenco", routeElenco);
app.use("/jogos", routeJogos);
app.use("/artilheiros", routeArtilheiros);
app.use("/auth", routeAuth);
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

// criação do servidor na porta 3003
// app.listen(process.env.PORT, () => {
//   console.log("Iniciada");
// });

app.listen(3000, () => {
  console.log("Iniciada");
});
