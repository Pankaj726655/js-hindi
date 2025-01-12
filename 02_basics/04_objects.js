/*
const abcUser = new Object();   // singleton object
const defUser = {}      // non-singletonobject

console.log(abcUser)
console.log(defUser)

*/

/*
const fbUser = new Object()
fbUser.id = 101
fbUser.name = "Pankaj"
fbUser.isLoggedIn = false
console.log(fbUser); // { id: 101, name: 'Pankaj', isLoggedIn: false }

*/

/*
const regularUser = {
    email : "pp26421@gmailc.om",
    fullname : {
        userfullname : {
            firstname : "Pankaj",
            lastname : "Pandey"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)
*/


// *****************  Merge Objects
/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// console.log(obj3);   //     { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);      //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//   ****************  Spred Operator (Most Commonly used)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

*/



// const users = [
//     {
//         id: 1,
//         email: "pp26421@gmail.com"
//     },
//     {
//         id: 1,
//         email: "pp26421@gmail.com"
//     },
//     {
//         id: 1,
//         email: "pp26421@gmail.com"
//     }
// ]
// users[1].email = "p@gmailc.com" // accessing
// console.log(users);
// console.log(Object.keys(users))
// console.log(Object.values(users))

//  ***********************************************************

// const fbUser = new Object()
// fbUser.id = 101
// fbUser.name = "Pankaj"
// fbUser.isLoggedIn = false

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));
// console.log(fbUser.hasOwnProperty("isLoggedIn"))
// console.log(fbUser.hasOwnProperty("isLoggedOn"))



//  ******************  destructuring of Object  ************

const course = {
    courseId : 101,
    courseName : "Java",
    instructor : "Nova",
    firstname : {
        name : "Pankaj"
    }
}

const{name: myname} = course.firstname
console.log(myname)

const{instructor: abc} = course
console.log(abc)

//  ^^^^^^^^^^^^^^^^^^^^^^^^  JSON   ^^^^^^^^^^^^^^^^