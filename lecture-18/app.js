// javascript numbers

// JavaScript has only one type of number. Numbers can be written with or without decimals.


// let value = 234;
// const PI = 3.14;

// console.log(typeof value, typeof PI);



// extra large or extra small numbers can be written with scientific (epxonent) notation

// let smallNumber = 123e-3;
// let largeNumber = 234e4;

// console.log(smallNumber, largeNumber);


// let floatinNum1 = 2.3;
// let floatinNum2 = 4.4;


// console.log(floatinNum1 + floatinNum2); sometime it will answer in correct

// correct way to addition of floating numbers 

// let answer = (floatinNum1 * 10 + floatinNum2 * 10) / 10;
// 
// console.log(answer);




// let num1 = 2;
// let num2 = 4;

// console.log(typeof (num1 + num2));


// console.log("Number Result is:" + num1 + num2);
// console.log(num1 + num2 + " Number Result is:");


// let num1 = Number(prompt('please enter num1'));
// let num2 = Number(prompt('please Enter second number'));

// if(!isNaN(num1) && !isNaN(num2)){
//     alert(num1 + num2)
// }else{
//     alert("Please Enter Valid Number")
// }

// console.log(typeof Infinity);



// bigdata 

// let bintNumber = BigInt(23022222222222222222222);

// console.log(Number.isSafeInteger(bintNumber));



// JavaScript Number Methods

// The toString() method returns a number as a string.


// let number = 20;

// let convertedNum = number.toString();

// console.log(typeof convertedNum);

// The toExponential() Method

// let number = 9.23892;
// let toExponentialNum = number.toExponential(2)
// console.log(toExponentialNum);


// The toFixed() Method


// let number = 20.98392;

// let fixedNumber = number.toFixed(2);

// console.log(fixedNumber);


// The toPrecision() Method

// let number = 9.8289342;

// let toPrecisionNumber = number.toPrecision(4);

// console.log(toPrecisionNumber);


// The valueOf() Method


// let num = 2.2839234;

// console.log(typeof  num.valueOf());
// console.log((23).valueOf());
// console.log((100 + 23).valueOf());


// Converting Variables to Numbers

// Number
// parseFloat
// parseInt 

// let userInput = parseInt(prompt("Enter Number"));
// let userInput = parseFloat(prompt("Enter Number"));
// let userInput = Number(prompt("Enter Number"));

// alert(typeof userInput)
// alert(userInput)

let today = new Date('2024-12-19');

console.log(today);



