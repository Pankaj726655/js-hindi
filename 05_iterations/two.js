// foreach on array
const coding  = ["cpp", "c", "java"]
// coding.forEach(function(val){
//     console.log(val);    
// });


// coding.forEach((item)=>{
//     console.log(item)
// })


// function printMe(item){
//     console.log(item);    
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);    
// })


// object in array
const myArr = [
    {
        java : "java",
        c : "c programming"
    },
    {
        rb : "ruby",
        sw : "swift"
    },
    {
        no : "no",
        yes : "yes"
    }
]

myArr.forEach((item)=>{
    console.log(item.sw);
    
})
