let myName = "Pankaj     "

// console.log(myName.trueLength());

// ----->  If any property is injected to the object then it can be callable/ accesable by the String, Arrays and functions.  <-----
Object.prototype.pankaj = function(){
    console.log("prototype is injected directly in Object")
}

let myHeros = ["Hanuman", "Ram"]
userName = "Pankaj Pandey"
let func = function pepsi(){
    console.log("Function called");
}

// myHeros.pankaj()
// userName.pankaj()
// func.pankaj()
// console.log(func);

// ----->  If any property is injected to the Array/String/Function then it can't be callable/accesable by the Object.
// Its only callable by the same concept  <-----

Array.prototype.naresh = function(){
    console.log("Now this is naresh");
}
// Object.naresh()

// ---> Inheritance <---  Old Syntax  --->

const Engineer = {
    hasBtech: true
}
const TechSupport = {
    isAvailable: false
}

const TASupport = {
    isAvailable: true
}

const hasJob = {
    makeAssignments : "Java Asssignments",
    __Proto__: TechSupport,
    __Proto__: Engineer,
    func: function pepsi(){
        console.log(`This is pepsi ${Engineer.hasBtech}`);
    }
}

hasJob.func()


// ---> Inheritance <---  New Syntax  --->
Object.setPrototypeOf(TechSupport, Engineer)

// -----------------------------------

anotherUsername = "      pankaj                    "
String.prototype.trueLength = function(){
    console.log(`Truw length is ${this.trim().length}`);
}
anotherUsername.trueLength()