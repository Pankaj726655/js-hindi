class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username} `);
    }
    // ------    static : The function is not accable by the instances      ------------
    static generateId(){
        return 1122
    }
}
class Pepsi extends User{
    constructor(username, email){
        super(username)
        this.username = username
    }
}

const user = new User("Rohan")
user.logMe() 
user.generateId() // error
