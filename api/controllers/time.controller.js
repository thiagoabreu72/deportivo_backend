import timeService from "../services/time.service.js";
import gerais from "../services/gerais.service.js";

async function insertTime(req, res, next) {
  try {
    const retorno = await timeService.insertTime(req.body);
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

async function getTimes(req, res, next) {
  try {
    const retorno = await timeService.getTimes();
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function deleteTime(req, res, next) {
  try {
    const retorno = await timeService.deleteTime(req.params.id);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

export default {
  insertTime,
  getTimes,
  deleteTime,
};
