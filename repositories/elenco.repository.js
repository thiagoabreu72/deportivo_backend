import connect from "./db.js";

// Inserir time no banco de dados
async function insertElenco(time) {
  const conn = await connect();
  try {
    const sql =
      "insert into elenco ( idElenco, idTime, idJogador) values ( $1, $2, $3) RETURNING *";
    const values = [time.idElenco, time.idTime, time.idJogador];

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

// Obter Times
async function getElenco() {
  const conn = await connect();
  try {
    const resposta = await conn.query("select * from elenco");
    return resposta.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

// Retornar jogador com o nome em específico
/*async function getJogador(jogador) {
  const conn = await connect();
  try {
    let parametro = `where nome like '\%${jogador.nome}\%'`;
    const res = await conn.query("select * from jogador " + parametro); //, [parametro]);
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

// Deletar jogador com o id selecionado
async function deleteJogador(id) {
  const conn = await connect();
  try {
    await conn.query("delete from jogador where idJogador = $1", [id]);
  } catch (error) {
  } finally {
    conn.release();
  }
}

// Atualizar dados do jogador
async function updateJogador(jogador) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE clients SET name = $1, foto = $2, numero = $3 where idJogador = $4 RETURNING *";
    const values = [jogador.nome, jogador.foto, jogador.numero];
    const resposta = await conn.query(sql, values);
    return resposta.rows[0];
  } catch (error) {
  } finally {
    conn.release();
  }
}*/

export default {
  insertElenco,
  getElenco
};
