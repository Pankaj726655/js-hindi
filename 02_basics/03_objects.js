// singleton
// Onject.create

// objecct literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Pankaj",
    "fullname": "pankaj pandey",
    [mySymbol]: "mysym",
    age: 18,
    class: "10th",
    email: "pp26421",
    loc: "Jaipur"
}

// console.log(JsUser.name)            //  way 1
// console.log(JsUser["fullname"])     //  way 2

// console.log(JsUser[mySymbol]) 
 