/* 
    Promises states : 
        1.  pending - initial state, neither fulfilled nor rejected.
        2.  fulfilled - meaning that the operation was successfully completed.
        3.  rejected - the operation faild.
*/
// __________________________________________________________________________
// Create promise
const promiseOne = new Promise(function(resolve, reject){
    // Do async job
    // DB calls , cryptography, network calls
    setTimeout(function(){
        console.log("Async task 1")
        resolve()       // connect async() and then()
    }, 1000)
})

// Consume promise
promiseOne.then(function(){
    console.log("Async task 1 completed");
})


// __________________________________________________________________________
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 completed");
})

// __________________________________________________________________________
new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Pankaj", email:"pp26421"})
    }, 1000)
}).then(function(userData){
    console.log(userData);
})


// __________________________________________________________________________
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName : "Pankaj Pandey", email : "pp26421"})
        }
        else{
            reject("ERROR! Somthing went wrong")
        }
    },1000)
})
.then((user) =>{
    console.log(user);
    return user.userName
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Finally The promise is either resolved or rejected. ");
    
})

// __________________________________________________________________________
//  ASYNC AWAIT // Promise is an object so dont use ()
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName : "Java", email : "123"})
        }
        else{
            reject("ERROR5! Somthing went wrong")
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
}
consumePromiseFive()



// __________________________________________________________________________

async function getAllUsers(){
    try{
        const response = await fetch("http://jsonplaceholder.typicode.com/users")
        const jsonData = await response.json()
        console.log(jsonData);
        console.log("Response : ", response);
}catch(error){
    console.log(error);
}}
getAllUsers()


// __________________________________________________________________________

fetch("https://api.github.com/users/pankaj726655")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})


// __________________________________________________________________________
