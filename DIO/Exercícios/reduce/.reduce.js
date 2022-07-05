// Reduce
// Some todos os números de um array
//
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initialValue = 0;
const sumWithInitial = nums.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
); console.log(sumWithInitial); //55
//
// OU
//
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}));
  // 55
//

//COMO A INSTRUTORA FEZ
function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([7, 1, 4, 3]));
//

// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
//COMO EU FIZ
let saldoAtual = 10000
let valorInicial = 0
let priceList = [{x: 985.00}, {x: 2000.00}, {x: 1100.00}, {x: 320.00}, {x: 675.00}].reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual.x
  }, valorInicial); //5080

let saldoFinal = saldoAtual - priceList

console.log(saldoFinal) //4920

//COMO A INSTRUTORA FEZ
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));