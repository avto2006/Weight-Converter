let inp = document.querySelector('.inp')
let inner = document.querySelector('.inner')
let lbs = inp.value 


const calculate = () => {
    let lbs = parseFloat(inp.value) || 0
    let kg =  lbs * 0.453592
     inner.innerHTML= `Your weight in kg is: ${kg.toFixed(2)}`
}

inp.addEventListener('input', calculate)