// Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

// // Arrow function
// map((element) => { /* ... */ })
// map((element, i) => { /* ... */ })
// map((element, i, array) => { /* ... */ })

// // Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// // Inline callback function
// map(function(element) { /* ... */ })
// map(function(element, i) { /* ... */ })
// map(function(element, i, array){ /* ... */ })
// map(function(element, i, array) { /* ... */ }, thisArg)


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//CALLBACK
let mult2 = nums.map(function(num) {
  return num * 2
});

console.log(mult2) // [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]
//

//SEM THISARG
console.log(nums.map((num) => num * 2))
//

//THISARG - TENTAR ENTENDER DPS
const apple = {
	price: 2,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());
//
