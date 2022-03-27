import express from "express";
import routeJogador from "./routes/jogador.route.js";
import routeJogos from "./routes/jogos.route.js";
import routeTime from "./routes/time.route.js";
import routeElenco from "./routes/elenco.route.js";

const app = express(); // cria um objeto do express
app.use(express.json()); // habilita para usar dados como json de parâmetros de entrada

// Abaixo são os direcionamentos de rotas
app.use("/jogador", routeJogador);
app.use("/time", routeTime);
app.use("/elenco", routeElenco);
app.use("/jogos", routeJogos);
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

// criação do servidor na porta 3003
app.listen(3003, () => {
  console.log("Iniciada");
});
