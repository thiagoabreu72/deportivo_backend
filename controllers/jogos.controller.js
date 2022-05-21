import jogosService from "../services/jogos.service.js";

async function insertJogo(req, res, next) {
  try {
    const retorno = await jogosService.insertJogo(req.body);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function getJogo(req, res, next) {
  try {
    //console.log(req.params)
    const retorno = await jogosService.getJogo(req.params);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function getJogos(req, res, next) {
  try {
    const retorno = await jogosService.getJogos();
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function updateJogo(req, res, next) {
  try {
    const retorno = await jogosService.updateJogo(req.body);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function deleteJogo(req, res, next) {
  try {
    const retorno = await jogosService.deleteJogo(req.params);
    if (retorno) res.status(200);
    res.send(`${retorno} registro(s) excluído(s)`);
  } catch (error) {
    next(error);
  }
}

async function getJogoArtilheiros(req, res, next) {
  try {
    const retorno = await jogosService.getJogoArtilheiros(req.params.idjogo);
    res.send(retorno);
  } catch (error) {}
}

export default {
  insertJogo,
  getJogo,
  getJogos,
  updateJogo,
  deleteJogo,
  getJogoArtilheiros,
};
