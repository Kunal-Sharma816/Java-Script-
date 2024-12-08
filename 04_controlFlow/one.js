// if-else concept

const userLoggedIn =  true
const userDebitcard = true


// if(userDebitcard && userLoggedIn)
// {
//     console.log("user can buy courses")
// }
// else
// {
//     console.log("user cannot buy courses")
// }

// concept of switch
//  switch(key)
//  {
//     case value:
//         break;
//     case value:
//         break;
//     default:
//         break;

//  }


let month = 3

// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("febrary")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;
//     case 5:
//         console.log("may")
//         break;
//     case 6:
//         console.log("june")
//         break;
//     case 7:
//         console.log("july")
//         break;
//     case 8:
//         console.log("august")
//         break;
//     case 9:
//         console.log("september")
//         break;
//     case 10:
//         console.log("october")
//         break;
//     case 11:
//         console.log("november")
//         break;
//     case 12:
//         console.log("december")
//         break;
//     default:
//         break;
// }


// concept of Truthy and Falsy

// const userEmail = 'k@gmail.com'           // give true
// const userEmail = ''                      // give false
// const userEmail = []                      // give true

// if(userEmail)
// {
//     console.log("Yes it is present")
// }
// else{
//     console.log("It is not present")
// }

// falsy = (false , 0 , -0 , BigInt , 0n , "" , null , undefined , Nan)

// truthy = (remaining , '0' , 'false' , ' ' , [] , {} , function(){})



// concept of -: Nullish Coalescing Operator(??): null  , undefined


let val;
// val  = 7 ?? 99
// val  = null ?? 10
// val = null ?? (()=>{console.log("hello")})()

val = undefined ?? 8
// console.log(val)


//++++++++++++++++++++++++++++++ Ternary operator ++++++++++++++++++++++++++++
// syntax -> conditon? true : false 

