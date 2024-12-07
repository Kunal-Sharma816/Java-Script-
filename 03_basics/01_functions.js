// function Addnumber(num1 , num2)
// {
//     console.log(num1+num2)
// }

// Addnumber(8  ,9 )
// const result = Addnumber(8 , 9) 
// console.log(result) // give undefined because u did't return the value

function Addnumber(num1 , num2)
{
    return num1 + num2
}

const result = Addnumber(8 , 9)
// console.log(result);


function calculateCartPrice(...num1)
{
    return num1
}

// console.log(calculateCartPrice(100 , 200 , 400 , 800))


const user = {
    username : 'Kunal',
    price : 899
}

function handleObject(anyobject)
{
    console.log(`User name is ${anyobject.username} and the price is ${anyobject.price}`)
}

handleObject(user)  







