//Date

let mydate  =  new Date()

// console.log(mydate.toString())
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


let mycreatedDate =  new Date(2024 , 11 , 3)
// console.log(mycreatedDate.toDateString());


let mytimestamp  = Date.now()
// console.log(mytimestamp);
// console.log(mycreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)) // convert it into seconds


mydate.toLocaleString('default' , {
    weekday: "long",
})
