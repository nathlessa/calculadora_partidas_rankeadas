let nivel

function placar(vitorias, derrotas) {
    let resultado = vitorias - derrotas
    return resultado
}

let resultadoDoPlacar = placar(21, 8)
console.log(resultadoDoPlacar)

if (resultadoDoPlacar < 10) {
    nivel = "Ferro"
} else if (resultadoDoPlacar >= 11 && resultadoDoPlacar <= 20) {
    nivel = "Bronze"
} else if (resultadoDoPlacar >= 21 && resultadoDoPlacar <= 50) {
    nivel = "Prata"
} else if (resultadoDoPlacar >= 51 && resultadoDoPlacar <= 80) {
    nivel = "Ouro"
} else if (resultadoDoPlacar >= 81 && resultadoDoPlacar <= 90) {
    nivel = "Diamante"
} else if (resultadoDoPlacar >= 91 && resultadoDoPlacar <= 100) {
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log(`O herói tem saldo de ${resultadoDoPlacar} e está no nível ${nivel}`)