// Filter
// Filtra e retorne todos os números pares de um array.

//COMO EU FIZ
function getEven(num) {
  return num % 2 == 0
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nums.filter(getEven))

//COMO A INSTRUTORA FEZ
function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));