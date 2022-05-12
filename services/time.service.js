import timeRepository from "../repositories/time.repository.js";
import gerais from "./gerais.service.js";

async function insertTime(time) {
  try {

    console.table(time)
    /*let binario = gerais.codificarImagem(jogador.foto);
    jogador.foto = binario;*/

    return await timeRepository.insertTime(time);
  } catch (error) {
    throw error;
  }
}

/*async function getJogador(nome) {
  try {
    return await jogadorRepository.getJogador(nome);
  } catch (error) {
    throw error;
  }
}*/

async function getTimes() {
  try {
    return await timeRepository.getTimes();
  } catch (error) {
    throw error;
  }
}

/*async function updateJogador(jogador) {
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
}*/

export default {
 insertTime,
 getTimes
};
