const user = 
{
    username: 'Kunal',
    price : 23,

    welcome : function(){
        console.log(`${this.username} , welcome to website`) // 'this' keyword is used for current context
    }
}

// console.log(user.welcome())


// const chai = function()
// {
//     let username = 'hitesh'
//     console.log(this.username);
// }


const chai = ()=>
{
    let username = 'hitesh'
    console.log(this.username);
}

// chai()


//method-1
// const addTwo = (num1 , num2)=>
// {
//     return num1+ num2;
// }


// method-2 - implicite way of writing arrow function
const addTwo = (num1 , num2)=> num1+ num2


console.log(addTwo(3 , 4))