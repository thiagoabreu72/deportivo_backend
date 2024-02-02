import elencoRepository from "../repositories/elenco.repository.js";
import gerais from "./gerais.service.js";
import timeService from "./time.service.js";

async function insertElenco(elenco) {
  try {
    console.table(elenco);
    /*let binario = gerais.codificarImagem(jogador.foto);
    jogador.foto = binario;*/

    return await elencoRepository.insertElenco(elenco);
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

async function getElenco() {
  try {
    return await elencoRepository.getElenco();
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
*/

// async function deleteJogador(id) {
//   try {
//     return await timeService.(id)
//   } catch (error) {
//     throw error;
//   }
// }

export default {
  insertElenco,
  getElenco,
};
