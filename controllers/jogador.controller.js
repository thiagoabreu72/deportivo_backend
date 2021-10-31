import jogadorService from "../services/jogador.service.js";

async function insertJogador(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

async function getJogador(req, res, next) {
  try {
    const retorno = await jogadorService.getJogador(req.param.nome);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function getJogadores(req, res, next) {
  try {
    const retorno = await jogadorService.getJogadores();
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function updateJogador(req, res, next) {
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
}

export default {
  insertJogador,
  getJogador,
  getJogadores,
  updateJogador,
  deleteJogador,
};
