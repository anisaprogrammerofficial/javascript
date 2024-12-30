// let form = document.forms['tableForm'];

// let tableNumber = form[0]
// let tableBtn = form[1]

// tableBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     printTable()
    
// })


// const printTable = () =>{
//     const userInput = parseFloat(tableNumber.value);

//     // convert input into numbers or float
//     alert(typeof userInput)
//     const heading = `<h2>Here is the Result of Table</h2>`
//     const counter = 6;
//     let li = `<li> ${userInput} * ${counter} = ${userInput * counter} </li>`
//     let html = `${heading} <ul>`;
//     form.innerHTML += html
//     form.innerHTML += (li)   
//     html += `</ul>`;
    
// }



// JavaScript Arrays

// const cars = ["Saab", "Volvo", "BMW"];
// 
// const fruits = new Array('Banana', 'orange', 'kela');
// console.log(fruits);

// cars[0] = "Twita"
// console.log(cars);

// console.log(cars[1]);

// Converting an Array to a String

// toString

// let myNewCar = cars.toString()

// console.log(typeof cars);
// console.log(typeof myNewCar);


// let vahcile  = {
//     'name': 'Revo',
//     'model': 2025
    // firsName: 20
// }

// console.log(vahcile.model);

// console.log(cars[1]);


// document.body.innerText = cars;


// empty erry 


// let myArr = [];

// myArr[0] = Date.now()

// console.log(myArr);


// document.body.innerText = myArr;


// array methods

// let fruits = ['banana', 'orange', 'amrud']

// console.log(fruits.length);

// console.log(fruits);
// console.log(fruits.sort());

// accessing the last element of array
// console.log(fruits[fruits.length-1]);

// // loop through array elements
// let flengt = fruits.length
// for(let i = 0; i < flengt; i++){
//     console.log(fruits[i]);
    
// }

// let fruits = ['nana', 'apple', 'orange']


// fruits.forEach((item)=>{
//     console.log(item);
    
// })


// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:

// let arrayLength = fruits.push('santra');

// console.log(fruits);
// console.log(arrayLength);


// adding array item via length 

// fruits[fruits.length] = 'cherry';

// console.log(fruits);

// let arrLen = [fruits.length] -1 

// console.log(arrLen);


// Adding elements with high indexes can create undefined "holes" in an array:
// fruits[6] = 'new banana'

// console.log(fruits.length);
// fruits[6] = 'new banana';

// console.log(fruits);

// let person = [];

// person['fristName'] = 'jhon';
// person['lastName'] = 'doe';

// console.log(person.length); // 0 this is unexpected 
// console.log(person[0]); // undefined 


// let products =['jmary microphone', 'jmary speaker', 'bluethooth']
// let products ={jmaryNewStock: ['jmary microphone', 'jmary speaker', 'bluethooth'],};
// let products ='jmary';

// checking type 

// console.log(typeof products);


// console.log(Array.isArray(products))

// if(Array.isArray(products)){
//     products.forEach((item)=>{
//         console.log(item);
        
//     })
// // }
// if(products instanceof Array){
//     products.forEach((item)=>{
//         console.log(item);
        
//     })
// }
// // else if(typeof products === "object"){
// //     for (const key in products ) {
// //         console.log(products[key]);
        
// //     }
// // }
// else if(products instanceof Object){
//     for (const key in products ) {
//         console.log(products[key]);
        
//     }
// }
// else{
//     console.log(products);
    
// }


// Nested Arrays and Objects

// Values in objects can be arrays, and values in arrays can be objects:


const person = {
    name: "jhon", 
    age: 23,
    cars: [
        {
            name: 'mehran', 
            model: [230, 239,239]
        },
        ['mustang', 'mercidies']
    ],
    mode: [],
    color: 'black'
}


// console.log(person.cars[0].model[0]);

// for (const key in person.cars){
//     console.log(person.cars[key]);
    
// }




