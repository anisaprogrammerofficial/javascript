// javscript string methods


// paddstart

// let userName = "jhon DOe";

// console.log(userName.padStart(20,'x'));
// console.log(userName.padEnd(20,'x'));


// let dummyText = "lorem ipsum";

// let finalDummy = dummyText.repeat(100);

// console.log(finalDummy);


// replace

// let str = "I am here to learn JavaScript , it's a amzing language to learn for Web Devlopement. JavaScript is Love";


// regualr expression 

// /javascript/ig

// console.log(str.replace(/javascript/ig, 'Python'));


// find char length in given string

// let str = "I am here to learn";

// let koinade = str.length;

// console.log(koinade);

// to find exact char length in given sgtring without space count 

// let strlength = str.replaceAll(" ","")
// console.log(strlength.length)


// to find exact words length in a given string 

// let strnew = str.split(" ")
// console.log(strnew.length)


// string search methos

// you have a one stting now you have to find the exact index of given string

// let str = "mery pas Horses hain horses";

// console.log(str.indexOf(/horses/ig));
// console.log(str.lastIndexOf('vho'));

// both acepts second parameter as well

// console.log(str.indexOf('horses', 10));


// console.log(str.search(/horses/ig));


// match  method

// console.log(str.match(/horses/ig));
// let strValue = str.match(/hor/ig)

// strValue.forEach((value)=>{
//     console.log(value)
// })


// let str = "mery pas Horses hain horses , acha nice horses";
// let strValue = str.matchAll(/hor/ig)

// 

// for (const value of strValue) {
//     console.log(value);
    
// }


// let str = "i try to learn web dev";

// console.log(str.includes('learn'));


// startwith 
// let userName = 'ghazi';
// console.log(userName.startsWith(/g/i));


let price = 10;

let tax = 0.2;

// console.log(`${price * (1+tax)}`)

// let header = "Template Strings";

// let tags = ["template string", 'javascript', 'es6', 'Python'];
// let root = document.getElementById('root');

// let html = `<h2>${header}</h2><ul>`;

// for (const tag of tags) {
//   html += `<li>${tag}</li>`;
    
// }

// html += `</ul>`;

// root.innerHTML = html;


