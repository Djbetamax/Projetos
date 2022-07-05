// Atividade 2: Sets
// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

//FEITO PELA INSTRUTORA
function uniqueElements(array) {
  let unique = new Set(array);
  return [unique]
}

const nums = [30, 30, 40, 5, 223, 2049, 3034, 5]

console.log(uniqueElements(nums)); //30, 40, 5, 223, 2049, 3034
//FEITO POR MIM
// const correctNums = new Set(nums)

// console.log(correctNums) //30, 40, 5, 223, 2049, 3034
