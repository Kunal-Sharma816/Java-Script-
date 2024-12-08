// for of loop

const arr = [1 , 2 ,3 , 4 , 5, 6]
for (const val of arr) {
    // console.log(val);
    
}

const greetings = 'Hello World!'
for(const greet of greetings)
{
    // console.log(greet)
}

// map
const map = new Map()
map.set('In' , 'India')   // 'In'-> keys , 'India' -> value   , map store data in key-value pairs
map.set('US' , 'USA')
map.set('Aus' , 'Australia')
map.set('In' , 'India') // does not store duplicate values


// console.log(map)
// console.log(map.get('In'))

//method - 1
for (const key of map) {
    // console.log(key[0])     // for printing the keys , 0- keys  , 1 - values
}


//method-2
for (const [key , val] of map) {  // now u are using [key , value] two different iterators for map 
    // console.log(key)
    // console.log(key , ":-" , val)
}




// use for-of loop for objects

const myObject = 
{
    'game1': 'GTA' , 
    'game2': 'Minecraft'
}

for (const [obj1 , obj2] of myObject) {
    console.log(obj1)
}

// we get error 'myObject is not iterable'
//+++++++++++++++++++++++++++++ NOTE +++++++++++++++++++
// Maps are iteratable and objects are not iteratable , but there some other ways to iterate the objects , see below


