
// Event Bubbling or Event Capturing?
// Event propagation is a way of defining the element order when an event occurs.


// Adding and Deleting Elements
// removeEventListener() method


// const root = document.getElementById('root')
// console.log(root);
// const input = document.getElementById('input')
// input.addEventListener('keypress', ()=>{
//     input.value = "Key Down"
//     root.innerHTML=('Event Added') 
//     console.log('Event Added') 
// })

// root.removeEventListener('keypress', ()=>{console.log("Event Removed")})



// Adding and Deleting Elements

// document.createElement(element)	Create an HTML element

// const root = document.createElement('h1');
// console.log(root)

// document.appendChild(element)	Add an HTML element
// document.body.appendChild(root)




// document.removeChild(element)	Remove an HTML element
// removing element
// document.body.removeChild(root)

// remove()



// selecting elemnt
// const btn = document.getElementById('btn');
// removing element
// document.body.removeChild(btn)


// document.replaceChild(new, old)	Replace an HTML element

// const btn = document.getElementById('btn')
// new element creating
// const pElement = document.createElement('p')
// adding text to pelement
// pElement.innerText = "I am the New one form js"
// adding attribute to new one, 
// pElement.setAttribute('class', 'newEleemnt')

// document.body.replaceChild(pElement, btn)

// document.write(text)	Write into the HTML output stream
// document.write('ajsdklfjalsdfjal sdf')



// class checking , class list , and other methods on class list, 


/ light and dark mode

// const darkMode = document.getElementById('themeSwitcher');
// const body = document.body;
// darkMode.addEventListener('click', ()=>{
//     if(body.className.includes('darkmode')){
//         body.setAttribute('class', 'lightmode')
        
//     }else{
//         body.setAttribute('class', 'darkmode')
//     }

// })


// const themeSwitcherBtn = document.getElementById('themeSwitcher')
// const body = document.body;


// themeSwitcherBtn.addEventListener('click', ()=>{
//     if(body.className.includes('darkmode')){
//         body.setAttribute('class', 'lightmode')
//     }else{
//         body.setAttribute('class', 'darkmode')
//     }
// })


// classname includes method

// const themeSwitcherBtn = document.getElementById('themeSwitcher')
// const body = document.body;

// themeSwitcherBtn.addEventListener('click', ()=>{
//     if(!body.className.includes('darkmode')){
//         body.setAttribute('class', 'darkmode')
//     }else{
//         body.setAttribute('class', 'lightmode')
//     }
// })

// class add and remove


// const themeSwitcherBtn = document.getElementById('themeSwitcher')
// const body = document.body;

// themeSwitcherBtn.addEventListener('click', ()=>{
//     if(body.classList.contains('darkmode')){
//         body.classList.add('lightmode')
//         body.classList.remove('darkmode')
//     }else{
//         body.classList.add('darkmode')
//         body.classList.remove('lightmode')
//     }
// })

// const themeSwitcherBtn = document.getElementById('themeSwitcher')
// const body = document.body;

// class replacing 

// themeSwitcherBtn.addEventListener('click', ()=>{
//     if(!body.classList.contains('darkmode')){
//         body.classList.add('lightmode')
//         body.classList.replace('lightmode', 'darkmode')
//     }else{
//         body.classList.replace('darkmode', 'lightmode')
//     }
// })



// using toolge method 


// const themeSwitcherBtn = document.getElementById('themeSwitcher')
// const body = document.body;

// themeSwitcherBtn.addEventListener('click', ()=>{
//     body.classList.toggle('darkmode')
//     body.classList.toggle('lightmode')
// })

// togle shortcut method

// const themeSwitcherBtn = document.getElementById('themeSwitcher')
// const body = document.body;

// themeSwitcherBtn.addEventListener('click', ()=>{
//     body.classList.toggle('darkmode')
// })



