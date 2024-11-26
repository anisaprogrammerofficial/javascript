//  DOM Events

// const root  = document.querySelector('#root')

// const btn = document.getElementById('btn')


// adding event listner

// btn.addEventListener('click', function (){
//     console.log("Clciking")
// })


// const functionName = () =>{
//     console.log("Clicking")
// }

// btn.addEventListener('click', functionName)


// by defautl javascript pass event on call back function, 

// btn.addEventListener('click', (e)=>{
//     console.log(e.target)
// })

// Avoiding Common Pitfalls
// If you directly call the function with parentheses (e.g., calc('Custom Parameter')) while assigning the event listener, it will execute immediately instead of waiting for the event.

// const calc = (p,event) => console.log(p, event)

// btn.addEventListener('click', (e)=>{
//     calc('Here is text', e)
// })


// Alternative: Binding Parameters
// Another approach to passing parameters is to use .bind(). This creates a new function with pre-defined arguments.

// const caclc = (param, e) =>{
//     console.log(`Paramter  => ${param}`)
//     console.log(`Event =>  ${e.target.innerText="Text Changed"}`)
// }

// btn.addEventListener('click', caclc.bind(this, 'Jhon Doe'))


// form handling

// const userName = document.getElementById('userName')
// const userEmail = document.getElementById('email')
// const submit = document.getElementById('submit')
// const output = document.getElementById('error')
// const handleFormInput = (e) =>{
//     e.preventDefault()
//     if(userName.value== "" && userEmail.value == ""){
//         output.style.color = 'red'
//         output.style.fontWeight= '700'
//         output.innerText = "Fileds are Required Cn't be Empty";
//     }else{
//         output.style.color = "green"
//         output.style.fontWeight = "700"
//         output.innerText = userName.value + " " + userEmail.value
//     }


// }


// form data reading, 

const form = document.forms['contactForm']
const error = document.getElementById('error')
const succes = document.getElementById('succes')
const handleFormInput = (e) => {
    e.preventDefault()
    const userName = form['userName'].value
    const userEmail = form['email'].value

    // simply rading input values
    // console.log(userName.value)
    // console.log(userEmail.value)

    // input filed validation 

    if (userName === "" && userEmail === "") {
        error.style.display = 'grid'
        setTimeout(() => {
            error.style.opacity = 1;
            error.style.transform = "translate(-50%, -50%) scale(1)"
        }, 0);
        error.querySelector('p').textContent = `Fields can't be empty`
        document.body.style.background = '#ccc'
        succes.style.display = "none"
    } else {
        succes.style.display = 'grid'
        setTimeout(() => {
            succes.style.opacity = 1;
            succes.style.transform = "translate(-50%, -50%) scale(1)"
        }, 0);
        succes.querySelector('p').textContent = `${userName} ${userEmail}`
        document.body.style.background = '#ccc'
        error.style.display = 'none'
    }
}


submit.addEventListener('click', (e) => {
    handleFormInput(e)
})


// Handle close buttons
const closeBtn = document.getElementsByClassName('close')

Array.from(closeBtn).forEach((button) => {
    button.addEventListener('click', function () {
        this.parentElement.style.opacity = 0;
        this.parentElement.style.transform = "translate(-50%, -50%) scale(0.8)";
        setTimeout(() => {
            this.parentElement.style.display = "none"
        }, 500);
        document.body.style.background = ""
    })
})
