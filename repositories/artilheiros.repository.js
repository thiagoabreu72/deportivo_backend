import connect from "./db.js";

// Inserir jogador no banco de dados
async function insertArtilheiro(jogador) {
  const conn = await connect();
  try {
    const sql =
      "insert into artilheiros ( idJogo, idTime, idJogador, qtdGols, craque ) values ( $1, $2, $3, $4, $5) RETURNING *";
    const values = [
      jogador.idjogo,
      jogador.idtime,
      jogador.idjogador,
      jogador.qtdgols,
      jogador.craque,
    ];

    // Efetua a transação no banco de dados
    const resposta = await conn.query(sql, values);
    return resposta.rows[0];
  } catch (error) {
    throw error;
  } finally {
    // será executado na finalização
    // Fecha a conexão à cada execução
    conn.release();
  }
}

// Obter jogadores
async function getArtilheiros() {
  const conn = await connect();
  try {
    const resposta = await conn.query("select * from artilheiros");
    return resposta.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

// Retornar jogador com o nome em específico
async function getArtilheiro(jogador) {
  const conn = await connect();
  try {
    const res = await conn.query(
      "select * from artilheiros where idJogador = $1",
      [jogador.id]
    ); //, [parametro]);
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

// Atualizar dados do jogador
async function updateArtilheiro(jogador) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE artilheiros SET qtdgols = $4, craque = $5 where idJogo = $1 and idTime = $2 and idJogador = $3  RETURNING *";

    const values = [
      jogador.idjogo,
      jogador.idtime,
      jogador.idjogador,
      jogador.qtdgols,
      jogador.craque,
    ];

    const retorno = await conn.query(sql, values);
    return retorno.rows[0];
  } catch (error) {
  } finally {
    conn.release();
  }
}

// Deletar jogador com o id selecionado
async function deleteArtilheiro(jogador) {
  const conn = await connect();
  try {
    console.log(jogador);
    const retorno = await conn.query(
      "delete from artilheiros where idJogo= $1 and idJogador = $2",
      [jogador.idjogo, jogador.idjogador]
    );
    return retorno.rowCount;
  } catch (error) {
  } finally {
    conn.release();
  }
}

export default {
  insertArtilheiro,
  getArtilheiro,
  getArtilheiros,
  deleteArtilheiro,
  updateArtilheiro,
};
