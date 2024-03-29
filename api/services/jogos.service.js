import jogosRepository from "../repositories/jogos.repository.js";

async function insertJogo(jogo) {
  try {
    console.table(jogo);
    return await jogosRepository.insertJogo(jogo);
  } catch (error) {
    throw error;
  }
}

async function getJogo(jogo) {
  try {
    return await jogosRepository.getJogo(jogo);
  } catch (error) {
    throw error;
  }
}

async function getJogos() {
  try {
    return await jogosRepository.getJogos();
  } catch (error) {
    throw error;
  }
}

async function updateJogo(jogador) {
  try {
    return await jogosRepository.updateJogo(jogador);
  } catch (error) {
    throw error;
  }
}

async function deleteJogo(jogo) {
  try {
    return await jogosRepository.deleteJogo(jogo);
  } catch (error) {
    throw error;
  }
}

async function getJogoArtilheiros(idjogo) {
  try {
    return await jogosRepository.getJogoArtilheiros(idjogo);
  } catch (error) {
    throw error;
  }
}

async function getEstatisticas() {
  try {
    let retorno = await jogosRepository.getEstatisticas();

    retorno[0].mediafeitos = Number.parseFloat(retorno[0].mediafeitos).toFixed(
      2
    );

    retorno[0].mediasofridos = Number.parseFloat(
      retorno[0].mediasofridos
    ).toFixed(2); 

    return retorno;
  } catch (error) {
    throw error;
  }
}

export default {
  insertJogo,
  getJogo,
  getJogos,
  updateJogo,
  deleteJogo,
  getJogoArtilheiros,
  getEstatisticas,
};
