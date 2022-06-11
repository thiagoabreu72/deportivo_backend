import connect from "./db.js";

// Inserir jogador no banco de dados
async function insertJogo(jogo) {
  const conn = await connect();
  try {
    const sql =
      "insert into jogos ( idTimeCasa, idTimeFora, dataJogo, golsCasa, golsFora ) values ( $1, $2, $3, $4, $5) RETURNING *";
    const values = [
      jogo.idtimecasa,
      jogo.idtimefora,
      jogo.datajogo,
      jogo.golscasa,
      jogo.golsfora,
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
async function getJogos() {
  const conn = await connect();
  try {
    const query =
      "SELECT jogos.idjogo, jogos.idtimecasa, casa.nome timecasa, casa.abreviacao casaAbr, " +
      "     jogos.golscasa, jogos.idtimefora,fora.nome timefora, fora.abreviacao foraAbr, " +
      "     jogos.golsfora, To_char(jogos.datajogo, 'DD/MM/YYYY') as datajogo" +
      "  FROM   jogos, time casa, time fora" +
      "  WHERE  jogos.idtimecasa = casa.idtime " +
      "       AND jogos.idtimefora = fora.idtime";

    const resposta = await conn.query(query);
    return resposta.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

// Retornar jogador com o nome em específico
async function getJogo(jogo) {
  const conn = await connect();
  try {
    const res = await conn.query("select * from jogos where idjogo = $1", [
      jogo.id,
    ]); //, [parametro]);
    console.log(res.rows);
    return res.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

// Deletar jogador com o id selecionado
async function deleteJogo(jogo) {
  const conn = await connect();
  try {
    console.log(jogo);
    const retorno = await conn.query("delete from jogos where idJogo = $1", [
      jogo.id,
    ]);
    return retorno.rowCount;
  } catch (error) {
  } finally {
    conn.release();
  }
}

// Atualizar dados do jogador
async function updateJogo(jogo) {
  const conn = await connect();
  try {
    const sql =
      "UPDATE jogos SET idTimeCasa = $2, idTimeFora = $3, dataJogo = $4, golsCasa = $5, golsFora = $6 where idJogo = $1 RETURNING *";

    const values = [
      jogo.idjogo,
      jogo.idtimecasa,
      jogo.idtimefora,
      jogo.datajogo,
      jogo.golscasa,
      jogo.golsfora,
    ];

    const resposta = await conn.query(sql, values);
    return resposta.rows[0];
  } catch (error) {
  } finally {
    conn.release();
  }
}

// Busca os artilheiros por jogo
async function getJogoArtilheiros(idjogo) {
  const conn = await connect();
  try {
    const sql =
      "SELECT artilheiros.*, jogador.nome FROM artilheiros, jogador where artilheiros.idJogador = jogador.idJogador and idjogo = $1";
    const resposta = await conn.query(sql, [idjogo]);
    return resposta.rows;
  } catch (error) {
  } finally {
    conn.release();
  }
}

// Montas as estatísticas dos jogos
async function getEstatisticas() {
  const conn = await connect();
  try {
    const sql =
      "select count(1) qtdjogos, sum(golscasa) feitos, sum(golsfora) sofridos, " +
      "avg(golscasa) mediafeitos, AVG (golsfora)::NUMERIC(2) mediasofridos , " +
      "(select count(1) from (SELECT case  " +
      "when (golscasa > golsfora) then 'V'  " +
      "when (golscasa < golsfora) then 'D' " +
      "when (golscasa = golsfora) then 'E' " +
      "end as resultado FROM jogos) A where A.resultado = 'V')vitorias, " +
      "(select count(1) from (SELECT case  " +
      "when (golscasa > golsfora) then 'V' " +
      "when (golscasa < golsfora) then 'D' " +
      "when (golscasa = golsfora) then 'E' " +
      "end as resultado FROM jogos) A where A.resultado = 'D') derrotas, " +
      "(select count(1) from (SELECT case  " +
      "when (golscasa > golsfora) then 'V' " +
      "when (golscasa < golsfora) then 'D' " +
      "when (golscasa = golsfora) then 'E' " +
      "end as resultado FROM jogos) A where A.resultado = 'E') empates " +
      "from jogos";

    const resposta = await conn.query(sql);
    return resposta.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

export default {
  insertJogo,
  getJogo,
  getJogos,
  deleteJogo,
  updateJogo,
  getJogoArtilheiros,
  getEstatisticas,
};
