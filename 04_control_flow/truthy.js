// false values 
// false, 0, -0, BigInt 0n, "", null, undefined, Nan 

// true values 
// "0", 'false', " ", [], {}, function(){}

// const myArr = []
// if(myArr || myArr.length===0){
//     console.log("array is not empty");
// }
// else{
//     console.log("array is empty")
// }

//   ***************  Nullish Coali=escing Operator (??):null undefined

let val;
val = 5 ?? 10     // 5
val = null ?? 10  // 10
val = undefined ?? 15   // 15
val = null ?? 10 ?? 15  // 10


// ************** Ternary Operator

// consdition ? true : false 