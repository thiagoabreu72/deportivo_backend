import jogadorRepository from "../repositories/jogador.repository.js";
import gerais from "../services/gerais.service.js";

async function insertJogador(jogador) {
  try {

    console.table(jogador)
    /*let binario = gerais.codificarImagem(jogador.foto);
    jogador.foto = binario;*/

    return await jogadorRepository.insertJogador(jogador);
  } catch (error) {
    throw error;
  }
}

async function getJogador(nome) {
  try {
    return await jogadorRepository.getJogador(nome);
  } catch (error) {
    throw error;
  }
}

async function getJogadores() {
  try {
    return await jogadorRepository.getJogadores();
  } catch (error) {
    throw error;
  }
}

async function updateJogador(jogador) {
  try {
    return await jogadorRepository.updateJogador(jogador);
  } catch (error) {
    throw error;
  }
}

async function deleteJogador(id) {
  try {
    return await jogadorRepository.deleteJogador(id);
  } catch (error) {
    throw error;
  }
}

export default {
  insertJogador,
  getJogador,
  getJogadores,
  updateJogador,
  deleteJogador,
};
