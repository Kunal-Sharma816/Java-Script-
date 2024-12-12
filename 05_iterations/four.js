// concept of for each loop

// 1. for arrays

const coding = ['Js' , 'cpp' ,'c' , 'python' , 'ruby' , 'php']


// callback function don't have name

//1. use+++++++++++++++++ normal function +++++++++++++++
// coding.forEach(  function (val){
//     console.log(val)
// }) 

//2. use ++++++ Arrow function +++++++++++
// coding.forEach(  (val)=>
// {
//     console.log(val)
// })


// 3. pass a function ad arguments in forEach

function printMe(val)
{
    console.log(val);
}

// coding.forEach(printMe)


coding.forEach((item , index , arr)=>
{
    // console.log(item , index , arr)
})


const myCoding = 
[
    {
        languagename : 'JavaScript',
        languagefilename : 'js'
    },

    {
        languagename : 'java',
        languagefilename : 'java'
    },

    {
        languagename : 'CPP',
        languagefilename : 'c++'
    },    
]


myCoding.forEach(  (item)=>
{
    console.log(item.languagefilename , " " ,item.languagename)
})



