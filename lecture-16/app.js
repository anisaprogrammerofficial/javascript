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

let proccessBtn = document.getElementById('submit')

let charWithSpace = document.getElementById('charWithSpace');
let asciCode = document.getElementById('asciCode');
// event listener 

proccessBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let userMessage = userInput.value; 
    let totalCharwithSpace = userMessage.length;
    let asciValue = userMessage.charCodeAt(0);

    // output
    charWithSpace.innerText = totalCharwithSpace;
    asciCode.innerText = asciValue;
})