const incrementBtn = document.getElementById('increment')
const decrementBtn  = document.getElementById('decrement')

const increment = () =>{
    let countElement = document.getElementById('number')
    let count = countElement.innerText;
    count++;
    countElement.innerText = count;
}

incrementBtn.addEventListener('click', increment)

const decrement = () =>{
    let counterElement = document.getElementById('number')
    let counter = counterElement.innerText;
    if(counter > 0){
        counter--;
        counterElement.innerText = counter;
    }
}

decrementBtn.addEventListener('click', decrement)