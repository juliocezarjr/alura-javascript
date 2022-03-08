const listaAlunos = [ "Júlio", "Anna", "Sofia", "Carla", "Pedro"]
const listaProfessores = [ "Roberto", "Ricardo", "Márcio"]

const todos = [...listaAlunos, ...listaProfessores]

console.table(todos)

for ( let nome in todos) {
    console.log(todos[nome])
}
