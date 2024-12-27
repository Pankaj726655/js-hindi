// function myFunction(parameters){} //  Sysntax
// myFunction(arguments)   //  call


// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);    
// }
// addTwoNumbers(3,4)
// const result = addTwoNumbers(4,4)
// console.log(result)


// function addTwoNumbers(num1, num2){
//     return num1+num2
// }
// const result = addTwoNumbers(3,2)
// console.log("result :", result);


// function loginMessage(username = "Raju"){   //  Raju is Default value
//     if(username === undefined){
//         console.log("enter username")
//         return
//     }
//     return `${username} Welcome!`
// }
// console.log(loginMessage("Pankaj"));


//  When we have infinaite numbers of arguments : rest opertaor
/*
function calculateInfiniteNumbers(...num){
    return num
}
console.log(calculateInfiniteNumbers(200,300,100,500)); // it converts into array


function addMore(val1, val2, ...num){
    return val1
}
console.log(addMore(200,300,400,5400)) // val1 = 200, val2 = 300, rest all are assign to num
*/


