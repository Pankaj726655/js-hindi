/*
let score = null

console.log(typeof(score))
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
*/

// "33" =>33 easily convert
// "33abc" => NaN not a number
// true => 1: false => 0


let isLoggedIn = "pankaj"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true;  0 => false
// "" => false
// "pankaj" => =>true


// let someNumber = 33
// let stringSomeNumber = String(someNumber)
// console.log(typeof stringSomeNumber);

// ****************************** Operations **********************

/*
let value = 3
let negValue = -value
console.log(negValue) // -3

console.log(typeof(1 + 1))//  number
console.log(typeof("1" + "1"))// string
console.log(typeof("1" + 2))
console.log(typeof(1+2+"2"))
console.log(typeof (1+2+2+5))
console.log(typeof ("1"+2+2+5))


console.log(+true) // 1
console.log(+"") // 0


let a = 100
console.log(a++) // postfix 100
console.log(++a) // prefix  101
*/

// **************************Exercise************************

let x = 3;
let y = x++;
console.log(`x:${x}, y:${y}`); // 3, 3

y+=1;
console.log(y)

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`); //3,4
