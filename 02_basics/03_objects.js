// object

const mySym = Symbol("key1")
const Jsuser = {
    name: 'Kunal Sharma',
    "Occupation": "SDE",
    [mySym]: 'key',
    age: 21,
    location: 'Chandausi',
    email: 'kuanl@gmail.com',
    isLoggedIn: false,
    lastLogin: ['monday', 'wednesday']
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);

// console.log(Jsuser["Occupation"]); // only this method u can use to access the occupation

// console.log(Jsuser[mySym]);

Jsuser.email = 'Kunalsharma@gmail.com'
// Object.freeze(Jsuser)
// Jsuser.email = 'kunal@mic.com'

// console.log(Jsuser);


Jsuser.greeting = function()
{
    console.log("Hello JS user")
}

Jsuser.greetingtwo = function()
{
    console.log(`Hello JS user , ${this.name}`)
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo()); 