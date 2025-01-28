class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username} `);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}
const teacher = new Teacher("Pankaj Pandey", "Pankaj@yahoo.com", "123")
teacher.addCourse()

const user = new User("Rohan")
user.logMe()
console.log(user instanceof Teacher); // false
