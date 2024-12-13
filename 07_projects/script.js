const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(  (button)=>{
    button.addEventListener('click' , function (e)
{ 
    let color  = e.target.id;
    if(e.target.id ===color)
    {
        body.style.backgroundColor = e.target.id;
    }
    })
} );