// const form = document.forms['textForm'];

// const textInput = form[0];
// const btn = form[1];
// let totalChar = document.getElementById('charWithSpace');
// let wordsWithSpace = document.getElementById('wordsWithSpace');
// let wordsWithoutSpace = document.getElementById('wordsWithoutSpace');
// let charWithoutSpace = document.getElementById('charWithoutSpace');

// const hanldeString  = (string) =>{
//     totalChar.innerText= string.length;
//     let totalWords = string.split(' ').length;
//     wordsWithSpace.innerText = totalWords;
// }

// const handleInput =  (e) =>{
//     e.preventDefault();
//     let userInput = textInput.value;
//     // string methods
//     hanldeString(userInput);
//     console.log('clicing');
    

// }

// btn.addEventListener('click', (e)=>{
//     handleInput(e)

// })


// string methods

// JavaScript String Length


// let userName = "Ghazi Orhan";

// let totalLengthOfString = userName.length;

// console.log(totalLengthOfString)


// Extracting String Characters


// let string = prompt('Enter your string');
// search by index number  ,it will provide you character at given index number

// let stringAt = url.at(-1);

// console.log(stringAt)

// charAt()

// let charPosition = url.charAt(8);
// console.log(charPosition)



// char code 

// let characterPosition = url.charCodeAt(0);
// console.log(characterPosition)


// alert(string.charCodeAt())

let userInput = document.getElementById('inputMessage');

let upperCaseBtn = document.getElementById('UpperCase')
let lowerCaseBtn = document.getElementById('LowerCase')

let charWithSpace = document.getElementById('charWithSpace');
let asciCode = document.getElementById('asciCode');
let wordWithSpace = document.getElementById('wordsWithSpace')
// event listener 

let userMessage = "";

const calcChar = () =>{
    userMessage = userInput.value; 
    let totalCharwithSpace = userMessage.length;
     // output
     charWithSpace.innerText = totalCharwithSpace;
}

const checkAsciCode = () =>{
    let asciValue = userMessage.charCodeAt(0);   
    asciCode.innerText = asciValue;
}

const wordsCalc = () =>{
    console.log(userMessage.length)
    let splitMessage = userMessage.split(' ');
    wordWithSpace.innerText = splitMessage.length;
}

userInput.addEventListener('keyup', (e)=>{
    e.preventDefault();
    calcChar()
    checkAsciCode()
    wordsCalc()

})

const convertToUperCase = () =>{
    let Capital = userMessage.toUpperCase();
    userInput.value = Capital;
}
const convertToLowerCase = () =>{
    let lowerCase = userMessage.toLowerCase();
    userInput.value = lowerCase;
}
lowerCaseBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    convertToLowerCase();
})
upperCaseBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    convertToUperCase();
})

// theme switcher


const lightModeBtn = document.getElementById('light_mode')
const darkModeBtn = document.getElementById('dark_mode')
let container = document.getElementsByClassName('container')[0];
const themeSwitcherBtn = document.getElementById('themeSwitcher');

themeSwitcherBtn.addEventListener('click', ()=>{
    toggleBtn()
})

const toggleBtn = () =>{

    if(themeSwitcherBtn.innerText==='toggle_on'){
        themeSwitcherBtn.innerText = 'toggle_off'
        container.classList.add('lightmode')
        container.classList.remove('darkmode')
    
    }else{
        themeSwitcherBtn.innerText = 'toggle_on'
        container.classList.add('darkmode')
        container.classList.remove('lightmode')
    }
}

