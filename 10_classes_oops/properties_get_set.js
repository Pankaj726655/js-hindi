function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, "password",{
        get: function(){
            return this.password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}

const user = new User("pp26421@gmail.com", "pankaj123")
console.log(user.email);
