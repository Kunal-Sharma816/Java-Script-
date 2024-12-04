// array 
const myArray = [0 , 1 , 2 , 3 ,4 ,5 ]

console.log(myArray.length);

// myArray.push(-1)
// myArray.push(10)
// myArray.push('Kunal')

// console.log(myArray);

// myArray.pop()

// myArray.unshift(11) // add 11 at 0th index
// myArray.unshift(100)
// myArray.shift() // remove the element from 0th index


// const newArr = myArray.join() // it convert it into string type

// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr); 


// concept of Slice and Splice
console.log("A " , myArray);
const myn1 = myArray.slice(1 , 3)
console.log(myn1)

console.log('B ' , myArray)

const myn2 = myArray.splice(1 ,3)
console.log('C ' , myArray)
console.log(myn2)





