import elencoService from "../services/elenco.service.js";
import gerais from "../services/gerais.service.js";

async function insertElenco(req, res, next) {
  try {
    let retorno;
    for (let jogador of req.body.idJogadores) {
      // console.log(retorno);
      console.log(jogador);
      let elenco = {
        idElenco: req.body.idElenco,
        idTime: req.body.idTime,
        idJogador: jogador,
      };
      retorno = await elencoService.insertElenco(elenco);
    }
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function getElenco(req, res, next) {
  try {
    const retorno = await elencoService.getElenco();
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

/*async function updateJogador(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

async function deleteJogador(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}*/

export default {
  insertElenco,
  getElenco,
};
