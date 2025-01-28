// ES6
// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("Pankaj", "pp26421@gmail.com", 878) 
// console.log(user1);


// Behind the scene
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user1 = new User("Pankaj", "pankaj.pandey@mvmobility.in", 87878)
console.log(user1);
console.log(user1.changUsername(), user1.encryptPassword());

