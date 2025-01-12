//  Immeiately Invoked Function Expressions (IIFE)
//      : (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

(function pepsi(){
    console.log("Try to auto execute")    
})();       // if two iife is used in a program than semicolon is required

(()=> {console.log("auto executed") })();


((username)=> {console.log(`auto executed ${username}`) })("Pankaj")