const dice20 = Math.floor(Math.random() * 6) + 1;

if (dice20 == Number); {
 console.log (`You rolled a ${dice20}!`);
} if (dice20 === 1) {
  console.log("That's a minimum value, try again!");
} else if (dice20 === 6) {
  console.log("That's a maximum number! Congratts!");
}

console.log(0/0)
console.log(0 + NaN)

const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// expected output: false