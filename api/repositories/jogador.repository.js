import connect from "./db.js";

// Inserir jogador no banco de dados
async function insertJogador(jogador) {
  const conn = await connect();
  try {
    const retorno = await consultarExistencia(jogador.nome);
    console.log(retorno);

    if (retorno > 0) {
      return { retorno: "Jogador já cadastrado." };
    } else {
      const sql =
        "insert into jogador ( nome, apelido, foto, numero, posicao ) values ( $1, $2, $3, $4, $5) RETURNING *";
      const values = [
        jogador.nome,
        jogador.apelido,
        jogador.foto,
        jogador.numero,
        jogador.posicao,
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

// Obter jogadores
async function getJogadores() {
  const conn = await connect();
  try {
    const resposta = await conn.query("select * from jogador");
    return resposta.rows;
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

// Retornar jogador com o nome em específico
async function getJogador(jogador) {
  const conn = await connect();
  try {
    const selecao = jogador.nome.toUpperCase();
    let sql = `select * from jogador where upper(nome) like '\%${selecao}\%'`;
    const res = await conn.query(sql); //, [parametro]);
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
      "UPDATE jogador SET name = $1, foto = $2, numero = $3 where idJogador = $4 RETURNING *";
    const values = [jogador.nome, jogador.foto, jogador.numero];
    const resposta = await conn.query(sql, values);
    return resposta.rows[0];
  } catch (error) {
  } finally {
    conn.release();
  }
}

// Função para verificar se existe time com esse nome.
async function consultarExistencia(nomeJogador) {
  console.log(nomeJogador);
  const conn = await connect();
  try {
    const valor = await conn.query(
      "select count(1) contador from jogador where nome = $1",
      [nomeJogador]
    );
    console.log(valor.rows[0].contador);
    return valor.rows[0].contador;
  } catch (error) {
    console.log(error);
  }
}

export default {
  insertJogador,
  getJogador,
  getJogadores,
  deleteJogador,
  updateJogador,
};
