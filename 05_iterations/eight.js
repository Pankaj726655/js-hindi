// ********* Reduce  ************* 

// const myArr = [8,5,4,8,9,6,3,2,1,10]
// const initialValue = 0
// const finalValue = myArr.reduce( (accumulator, currentValue) => (accumulator + currentValue), initialValue)
// console.log(finalValue);



const books = [
    { name: "To Kill a Mockingbird", price: 100 },
    { name: "1984", price: 200 },
    { name: "The Great Gatsby", price: 300 },
    { name: "The Catcher in the Rye", price: 400 },
    { name: "The Hobbit", price: 500 },
    { name: "Fahrenheit 451", price: 600 },
    { name: "The Lord of the Rings", price: 700 },
    { name: "Pride and Prejudice", price: 800 },
    { name: "The Alchemist", price: 900 },
    { name: "Brave New World", price: 1000 }
  ];
  

const initialValue = 0
const total = books.reduce(function(acc, books){
    return (acc + books.price)
},0)
console.log(total);
