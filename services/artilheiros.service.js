import artilheirosRepository from "../repositories/artilheiros.repository.js";

async function insertArtilheiro(jogador) {
  try {
    console.table(jogador);
    return await artilheirosRepository.insertArtilheiro(jogador);
  } catch (error) {
    throw error;
  }
}

async function getArtilheiro(jogador) {
  try {
    return await artilheirosRepository.getArtilheiro(jogador);
  } catch (error) {
    throw error;
  }
}

async function getArtilheiros() {
  try {
    return await artilheirosRepository.getArtilheiros();
  } catch (error) {
    throw error;
  }
}

async function updateArtilheiro(jogador) {
  try {
    return await artilheirosRepository.updateArtilheiro(jogador);
  } catch (error) {
    throw error;
  }
}

async function deleteArtilheiro(jogador) {
  try {
    return await artilheirosRepository.deleteArtilheiro(jogador);
  } catch (error) {
    throw error;
  }
}

export default {
  insertArtilheiro,
  getArtilheiro,
  getArtilheiros,
  updateArtilheiro,
  deleteArtilheiro,
};
