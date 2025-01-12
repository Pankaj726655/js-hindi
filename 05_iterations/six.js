// filters  ********************************************

// const myNums = [1,2,3,4,5,6,7]
// const newNums = myNums.filter( (num)=> num>4)
// console.log(newNums);

// const myNums = [1,2,3,4,5,6,7]
// const newNums = myNums.filter( (num)=> {
//     return num>4
// })
// console.log(newNums);


//   same as above by for each

// const myArr = []
// const myNums = [1,2,3,4,5,6,7]

// myNums.forEach((num)=>{
//     if(num>4){
//         myArr.push(num)
//     }
// })
// console.log(myArr);


const books = [
    { name: "To Kill a Mockingbird", genre: "Fiction", publishYear: 1960, editionYear: 2015 },
    { name: "1984", genre: "Dystopian", publishYear: 1949, editionYear: 2021 },
    { name: "The Great Gatsby", genre: "Classic", publishYear: 1925, editionYear: 2013 },
    { name: "The Catcher in the Rye", genre: "Fiction", publishYear: 1951, editionYear: 2019 },
    { name: "The Hobbit", genre: "Fantasy", publishYear: 1937, editionYear: 2020 },
    { name: "Fahrenheit 451", genre: "Dystopian", publishYear: 1953, editionYear: 2018 },
    { name: "The Lord of the Rings", genre: "Fantasy", publishYear: 1954, editionYear: 2022 },
    { name: "Pride and Prejudice", genre: "Romance", publishYear: 1813, editionYear: 2016 },
    { name: "The Alchemist", genre: "Adventure", publishYear: 1988, editionYear: 2020 },
    { name: "Brave New World", genre: "Dystopian", publishYear: 1932, editionYear: 2019 },
    { name: "Moby Dick", genre: "Adventure", publishYear: 1851, editionYear: 2015 },
    { name: "Crime and Punishment", genre: "Crime", publishYear: 1866, editionYear: 2017 },
    { name: "The Road", genre: "Post-apocalyptic", publishYear: 2006, editionYear: 2021 },
    { name: "Dracula", genre: "Horror", publishYear: 1897, editionYear: 2018 },
    { name: "Frankenstein", genre: "Horror", publishYear: 1818, editionYear: 2020 },
    { name: "The Picture of Dorian Gray", genre: "Gothic", publishYear: 1890, editionYear: 2019 },
    { name: "War and Peace", genre: "Historical Fiction", publishYear: 1869, editionYear: 2016 },
    { name: "Les Misérables", genre: "Historical Fiction", publishYear: 1862, editionYear: 2017 },
    { name: "The Kite Runner", genre: "Drama", publishYear: 2003, editionYear: 2021 },
    { name: "The Shining", genre: "Horror", publishYear: 1977, editionYear: 2020 }
  ];

const value = books.filter( (bk) => {return bk.publishYear>1800 && bk.genre === "Horror"})
console.log(value);

// const myArr = []
// const val1 = books.forEach((bk) => {
//     if (bk.genre === "Horror")
//         myArr.push(bk)
// })
// console.log(myArr);
