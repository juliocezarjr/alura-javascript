const Cliente = function (nome, idade, saldo, depositar) {
    this.nome = nome,
    this.idade = idade,
    this.saldo = saldo,
    this.depositar = function (valor) {
        this.saldo += valor
    }
}

let julio = new cliente ("julio", 40, 100, 10)

function ClientePoupanca (nome, idade, saldo, depositar, chamarNome){
    Cliente.call(this, nome,idade,saldo, depositar)
    this.saldoPoup = saldoPoup
}

julio.depositar(10)

console.log(julio.saldo)

julio.prototype.chamarNome = function (fala) {
    console.log(fala)
}

julio.chamarNome("oi")
