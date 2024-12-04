// some more concepts about arrays

const marvel_heros = ['Ironman' ,'captainAmerica' , 'Vision']
const dc_heros = ['Superman' , 'Batman' , 'Flash']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // it creats problem because it push whole array in different array


// but if we use concate

// const newArr = marvel_heros.concat(dc_heros)
// console.log(newArr);


const newArr =  [...marvel_heros , ...dc_heros]
console.log(newArr);

let score1 = 200
let score2 = 300
let score3 = 900

console.log(Array.of(score1 , score2 , score3))

