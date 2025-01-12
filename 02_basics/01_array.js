//array

const myArray = [0,1,2,3,4,5]
// const myHeros = ["hema", "rekha"]

// const myArray2 = new Array(5,5,5,5,5)
// console.log(myArray[0]);

// myArray.push(6)
// myArray.unshift(-1) // add at 0th index and shift all
// myArray.shift() //remove only first index

// console.log(myArray);




// console.log(myArray.includes(6));
// console.log(myArray.indexOf(2));

// const newArr = myArray.join()   // convert exidting array in string
// console.log(myArray)
// console.log(typeof newArr);


// ****************  slice && splice  **************

// console.log("initial Array", myArray)

const myn1 = myArray.slice(1,3)     // it does not make effect on original array
console.log(myn1)
console.log("Slice : ", myArray)     


const myn2 = myArray.splice(1,3)    // it makes new array using the elements in range and changes the original array, it includes the last index also
console.log(myn2)
console.log("Splice : ", myArray) 
