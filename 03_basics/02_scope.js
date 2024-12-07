let a = 20
var b = 32

if(true)
{
    let a = 10 
    const b = 20
    var c = 10

    console.log("Innner: " , a)
    console.log("Inner: ", c)
}

console.log("Outer: " , a)
console.log("Outer: " , c)  // check the result u will get same value of c , but in reality it should not be  


// ++++++++++++ interesting ++++++++++++++


console.log(addone(3))
function addone(num)
{
    return num + 1
}


 
console.log(addtwo(3)) // it will give error because it is use as variable

const  addtwo = function(num)
{
    return num+2
}


