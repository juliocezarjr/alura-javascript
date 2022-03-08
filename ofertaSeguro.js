const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: '64634493349',
    email: 'juliocezarjr@gmail.com',
    fones: ['98982067755', '9803235624'],
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: 'filha',
            dataNasc: '20/03/2021'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

let novoJson = JSON.stringify(cliente)

console.log(novoJson)

let novoObjeto = JSON.parse(novoJson)

console.log(novoObjeto)

