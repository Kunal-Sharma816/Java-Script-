// const mycoding = ['Cpp' , 'Java' , 'Python' , 'JavaScript' , 'C' , 'Ruby']

// const values = mycoding.forEach( (item)=>
// {
//     console.log(item)
// } )

// console.log(values) // always return undefined


// const num = [1 , 2 , 3, 4 , 5,6 ,7 , 8 ,9 ,10]


// const newNum = num.filter( (n)=>{
//     return n>4
// }
// )

// console.log(newNum)


// use forEach instead of filter

// const newNum = []
// num.forEach( (item)=>
// {
//     if(item > 4)
//     {
//         newNum.push(item)
//     }
// } )

// console.log(newNum)



let Books = [
    { title: 'Book one', genre: 'History', year: 1992 },
    { title: 'Book two', genre: 'Non-fiction', year: 1995 },
    { title: 'Book three', genre: 'History', year: 1982 },
    { title: 'Book four', genre: 'Fiction', year: 1892 },
    { title: 'Book five', genre: 'Science', year: 1972 },
    { title: 'Book six', genre: 'History', year: 1990 }
];

let userbook = Books.filter((bk) =>{return  bk.year >= 1990});

// console.log(userbook);


// concept of reduce

const myNum = [1 ,2 , 3,4 ,5]

// method- 1

const Mytotal = myNum.reduce( (acc,currentVal) =>
{
    console.log(`acc : ${acc} , CurrentVal : ${currentVal}`)
    return acc + currentVal
} , 0)
console.log(Mytotal)
