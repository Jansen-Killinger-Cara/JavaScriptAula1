const ListaDePecas = ['Peca de teste', 'Ar', Peca B']
console.log('Quantidade de caracteres')

if (ListaDePecas.length <= 10) {
    console.log('As peças podem ser cadastradas');
}
console.log('Quantidade de caracteres');
for (let index = 0; index < ListaDePecas.length; index ++) {
    const PecaAtual = ListaDePecas[index];
    if (PecaAtual.length <= 3) {
        console.log(PecaAtual + ': esta peça possui nome inferior a 3 caracteres!')

    } else {
        console.log(PecaAtual + ": esta peça poderá ser cadastrada")
    }
}
console.log('Peso da Peça')
const PesoDaPeca = 50;
if (PesoDaPeca >=100) {
    console.log('Peso suficiente.')
} else {
    console.log('Peso insuficiente')
}