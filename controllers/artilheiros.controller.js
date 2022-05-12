import artilheirosService from "../services/artilheiros.service.js";

async function insertArtilheiro(req, res, next) {
  try {
    const retorno = await artilheirosService.insertArtilheiro(req.body);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function getArtilheiro(req, res, next) {
  try {
    console.log(req.params);
    const retorno = await artilheirosService.getArtilheiro(req.params);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function getArtilheiros(req, res, next) {
  try {
    const retorno = await artilheirosService.getArtilheiros();
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function updateArtilheiro(req, res, next) {
  try {
    const retorno = await artilheirosService.updateArtilheiro(req.body);
    res.send(retorno);
  } catch (error) {
    next(error);
  }
}

async function deleteArtilheiro(req, res, next) {
  try {
    const retorno = await artilheirosService.deleteArtilheiro(req.body);
    if (retorno) res.status(200);
    res.send(`${retorno} registro(s) excluído(s)`);
  } catch (error) {
    next(error);
  }
}

export default {
  insertArtilheiro,
  getArtilheiro,
  getArtilheiros,
  updateArtilheiro,
  deleteArtilheiro,
};
