idades = [30, 35, 28]
nomes = ["Ana", "Juliana", "Leonardo"]
faculdade = [false, true, true]

funcionarios = [nomes,idades,faculdade]

console.log(funcionarios[0][0])
console.log(funcionarios[1][0])

const cliente = {
    nome: "Jose",
    idade: 33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
}

cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
}]
cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
})