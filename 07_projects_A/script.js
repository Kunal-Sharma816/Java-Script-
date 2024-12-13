const form = document.querySelector('form')

// This below use case alwayse give you empty value
// parseFloat(document.querySelector('#height').value

form.addEventListener('submit' , function (e)
{
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if(height === '' ||  height < 0 || isNaN(height))
    {
        results.innerHTML = 'please give valid  height';
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = 'please give valid weight';
    }
    else
    {
        const bmi = weight / (height * height);
        results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    }
})