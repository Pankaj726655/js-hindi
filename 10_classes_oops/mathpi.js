const desc = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(desc);

// {
//     value: 3.141592653589793,
//     writable: false, //  default false
//     enumerable: false,
//     configurable: false
//   }
  

const dash = {
    name: "Pankaj",
    sirname: "Pandey",
    email: "pp26421",
    dashboard(){
        console.log("dashboard");
    }
}

console.log(Object.getOwnPropertyDescriptor(dash, "sirname"));

Object.defineProperty(dash, "name",{
    writable: false,
    enumerable: false,  // stop iterable
    confugurable: false
})
console.log(Object.getOwnPropertyDescriptor(dash, "name"));

for(let [key, value] of Object.entries(dash)){
    if(typeof value !== "function"){
        console.log(`${key} -> ${value}`);
    }
}