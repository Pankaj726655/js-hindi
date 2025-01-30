const User = {
    _email: "pp@gmail.com",
    _password: "Pankaj123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const user = Object.create(User)
console.log(user.email);


//  _ work a private keyword but in ES20 it is replaced by #