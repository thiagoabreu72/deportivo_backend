import fs from "fs";

function codificarImagem(imagem) {
  // Lê o arquivo binário
  const arquivo = fs.readFileSync(imagem, "binary");
  return arquivo;
}

function decodificarImagem(base, imagem) {
  console.log("na função");

  // a variável imagem deve ser o nome do arquivo seguido de extensão
  // ex.: 'imagens/thiago.png'
  let bitmap = new Buffer.from(base, "base64");
  fs.writeFileSync("imagem.jpg", base);

  /*console.log("na função convert");
  let arquivo = new Image();
  arquivo.src = "data:image/jpg;base64," + base;*/
  
}

export default {
  codificarImagem,
  decodificarImagem,
};
