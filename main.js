let inp = document.querySelector('.inp')
let inner = document.querySelector('.inner')
let lbs = inp.value 
let kg =  lbs * 0.453592

const calculate = () => {
     inner.innerHTML= `Your weight in kg is: ${kg}`
}

calculate()