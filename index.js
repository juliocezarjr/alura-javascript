const livros = require('./listaLivros')

let maisBarato = 0


for (let atual = 0; atual < livros.length; atual++) {
    if(livros[atual].preco < livros[maisBarato].preco) {
        livros[maisBarato].preco = livros[atual].preco
    }
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)

// console.log(livros[0].preco)
