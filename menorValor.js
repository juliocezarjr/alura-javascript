const livros = require('./listaLivros');

function menorValor (arrProdutos, posicaoInicia) {
  
  let maisBarato = posicaoInicia;
  
  for (let atual = 0; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual
    }
  }
  return maisBarato
}

module.exports = menorValor