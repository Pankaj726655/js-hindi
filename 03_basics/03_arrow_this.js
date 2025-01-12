//  function one(){
//     let username = "Pankaj"
//     console.log(this.username);
//  }
//  one()



const one = function(){
    let username = "Pankaj"
    console.log(this.username);  
}
one()


//Arrow function ---------------------------
const ones = () =>{
    let username = "Pankaj"
    console.log(this.username);
    console.log(this)
}
ones()


//   => explicoit return : return keyword required in curly brackets
const addTwo = (num1, num2)=>{
    return num1+num2
}
console.log(addTwo(4,5))


//  => implicite return : return keyword not required and use square bracket(optional)
const addTwoNumbers = (num1, num2)=> num1+num2
console.log(addTwoNumbers(4,5))


// = > Object return in arrow function implicite return
const objectReturnInArrowFunction = () => ({username : "Pankaj"})

