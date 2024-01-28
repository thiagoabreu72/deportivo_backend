import connect from "./db.js";

// Inserir time no banco de dados
async function insertTime(time) {
  const conn = await connect();

  try {
    const retorno = await consultarExistencia(time.nome);

    if (retorno !== 0) {
      return { retorno: "time já cadastrado" };
    } else {
      const buscaId = await conn.query("select max(idtime) id from time");
      if (buscaId.rows[0].id == null) time.idtime = 1;
      else time.idtime = buscaId.rows[0].id + 1;

      const sql =
        "insert into time ( idtime, nome, emblema, statustime, abreviacao) values ( $1, $2, $3, $4, $5) RETURNING *";
      const values = [
        time.idtime,
        time.nome,
        time.emblema,
        time.statustime,
        time.abreviacao,
      ];

      // Efetua a transação no banco de dados
      const resposta = await conn.query(sql, values);
      return resposta.rows[0];
    }
  } catch (error) {
    throw error;
  } finally {
    // será executado na finalização
    // Fecha a conexão à cada execução
    conn.release();
  }
}

// Obter Times
async function getTimes() {
  const conn = await connect();
  try {
    const resposta = await conn.query("select * from time");
    return resposta.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

// Função para verificar se existe time com esse nome.
async function consultarExistencia(nomeTime) {
  const conn = await connect();
  try {
    console.log(nomeTime);
    const valor = await conn.query(
      "select * from time where nome = $1",
      nomeTime
    );
    return valor.rowCount;
  } catch (error) {}
}

export default {
  insertTime,
  getTimes,
};
