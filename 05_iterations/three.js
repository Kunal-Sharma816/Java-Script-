// use of for-in loop

const myObject = 
{
    js: 'javascript',
    cpp: 'C++',
    rb : 'ruby' , 
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(key , ":-" , myObject[key])
}


const arr = [0 , 2 , 4 , 5 , 6]

for (const key in arr) {
    // console.log(key , "=" , arr[key])
}




// maps are not iteratable
// const map = new Map()
// map.set('In' , 'India')
// map.set('us', 'USA')
// map.set('Aus' , 'Australia')

// for (const key in map) {
//     console.log(key)
// }
