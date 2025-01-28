
function SetMob(mob){
    this.mob = mob
}

function pepsi(username, email, mob){
    this.username = username
    this.email = email
    SetMob.call(this, mob)
}

const abc = new pepsi("Pankaj", "pp", 78787)
console.log(abc);
