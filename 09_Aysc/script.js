// generate random color

const randomColor = function()
{
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i<6;i++)
    {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(randomColor());


// gloabl Variable
let intervalId;


//method-1
const StartChangingColor = function(){
    if(!intervalId)
    {
        intervalId = setInterval(ChangeBGColor , 1000)
    }

    function ChangeBGColor(){
        document.body.style.background = randomColor();
    }   
}



// method-2
const StopChangingColor = function()
{
    clearInterval(intervalId);
    intervalId = null;
}


document.querySelector("#start").addEventListener('click' , StartChangingColor)

document.querySelector("#stop").addEventListener('click' , StopChangingColor)