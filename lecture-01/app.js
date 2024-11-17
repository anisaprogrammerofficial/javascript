// How to check your output in js - JavaScript Output


// document.write('Hi, I am from Speeclaw')

// console.log('Welcome to Js');
// const userName = 'Ghazi'
// alert("Hi"+ " " + userName)

// print statement

// JavaScript Variables

// variables are like containers to hold things, whatever you can keep in

// defining variables in js
// var (var is old method to declare variable, not recomedend to use now, have global scope)
// let (local scope variables, with let we can reasing value but we can't redeclare variable)
// const (define Constants , we can't redeclare and can't reassign vale)


// let productPrice = 20;
// let productPrice = 40;
//  productPrice = 40;
// console.log(productPrice);

// var prodcut = "Camon 30";
// var product = "Neo Camon 30"



// const paymentMethod = 'Stripe';

// paymentMethod= 'Paypal';

// console.log(paymentMethod)


// JavaScript Operators

// Javascript operators are used to perform different types of mathematical and logical computations.

// Examples:
// The Assignment Operator = assigns values

// The Addition Operator + adds values

// The Multiplication Operator * multiplies values

// The Comparison Operator > compares values


// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators


// let number = 21;

// number -= 1;

// console.log(number);

// to comare 

// let number = 20;
// console.log(number==20);

// to strict check either value and datatype is same
// console.log(number===20);
// to chekc wheater number isn't equal
// console.log(number!=20);
// to check wheater data type and number isn't equal
// console.log(number!==20);
// to check weather nubmer is greater than 
// console.log(number > 20)
// to check number is greather than or equal to
// console.log(number >= 20)

// to check number is less than
// console.log(number < 20)
// to check number is less than or equal to
// console.log(number <= 20)


// to check string 

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
// console.log(result);



// JavaScript Logical Operators

// &&	logical and
// ||	logical or
// !	logical not

// let userName = "malik";

// console.log(userName=='Malik Waseem' && userName=='malik waseem')
// to check weather one condition is true 
// console.log(userName=='Malik Waseem' || userName=='malik waseem')

// to check type of any variable

// const productTitle = "Windows 11 for 360";

// console.log(productTitle);
// console.log(typeof productTitle);


// JavaScript Bitwise Operators


// const ROLL_NUMBERS = 20;
// console.log(ROLL_NUMBERS & 20);


// JavaScript Arithmetic


// increment 

// post increment / decrement

// prefix incremend / decrement

// let number = 20;

// console.log(number++);
// console.log(number);


// console.log(++number);
// console.log(number);


// exponent / power 

// console.log(number**2)

// check remainder

// console.log(number % 2);


// JavaScript Assignment Operators



// let number = 20;

// number = number + 1;
// number++;
// number += 1;

// console.log(number);

// number = number / 2;
// number /= 2;
// console.log(number);

// number = number ** 2;
// number **= 2;
// console.log(number);



// JavaScript Data Types

// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object


// JavaScript Functions

function calc(num1, operator, num2){
    // conditional statements 
    let result;
    // if(operator=='+'){
    //     result = num1 + num2; 
    //     console.log(result);
    // }else if(operator=='-'){
    //     result = num1 - num2; 
    //     console.log(result);
    // }else if(operator=='*'){
    //     result = num1 * num2; 
    //     console.log(result);
    // }else{
    //     console.log("Sorry it's a wrong operator")
    // }

    // switch statement 

    switch(operator){
        case '+':
            result = num1 + num2; 
            console.log(result);
            break;
        case '-':
            result = num1 - num2; 
            console.log(result);
            break;
        case '*':
            result = num1 * num2; 
            console.log(result);
            break;
        case '/':
            result = num1 / num2;
            console.log(result)
            break;
        case '%':
            result = num1 % num2
            console.log(result)
            break;
        default: 
            console.log('Sorry Wrong Operator');
    }


}


// funciton invoking / calling

calc(20, "+", 20)