// Sigleton objects


const tinderUser = {}

tinderUser.name  = 'kuanl'
tinderUser.id = '1233@kfa'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : 'some@gmail.com',
    fullname : {
        userfullname : {
            firstName: 'kunal',
            lastName: 'Sharma' 
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastName) 


const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj4 = {5 : "e" , 6 : "F"}
// const obj3 = {obj1 , obj2}

/*
syntax 
const variable = Object.assign(target , source)
*/

// here target is {} and source is obj1 , obj2 , ......
// const obj3 = Object.assign({} , obj1 , obj2)
// const obj3 = Object.assign({} , obj1 , obj2 , obj4)  


// we are going to use spread operator
const obj3 = {...obj1 , ...obj2 , ...obj4}
console.log(obj3) 


// when you get data from database then it comes in the from of objects as array

const obj = [
    {
        name: 'Kunal',
        id: 902
    },

    {
        gender : 'Male',
        Qualification: 'Gratuated'
    },

    {

    }
]


// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))


const course = 
{
    name : 'Kunal',
    email: 'kunal@gmail.com',
    age: 21
}

// console.log(course.name);

const {name:n} = course

console.log(n)



// concept of API





