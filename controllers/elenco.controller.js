import elencoService from "../services/elenco.service.js";
import gerais from "../services/gerais.service.js";

async function insertElenco(req, res, next) {
  try {
    const retorno = await elencoService.insertElenco(req.body);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

/*async function getJogador(req, res, next) {
  try {
    //console.log(req.query)
    const retorno = await jogadorService.getJogador(req.query);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}*/

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
  getElenco
};
