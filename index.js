import express from "express";
import routeJogador from "./routes/jogador.route.js";
import routeJogo from "./routes/jogo.route.js";
import routeTime from "./routes/time.route.js";
import routeTimeJogador from "./routes/time_jogador.route.js";

const app = express();
app.use("/jogador", routeJogador);
app.use("/time", routeTime);
app.use("/timejogador", routeTimeJogador);
app.use("/jogo", routeJogo);

app.listen(3003, () => {
  console.log("Iniciada");
});
