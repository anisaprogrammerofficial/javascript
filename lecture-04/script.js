// constrcutor function 

// function welcome(name, lname, rollNumber){
//     return `${name} ${lname} ${rollNumber}`
// }

// welcome('Ghazi', "orhan", 2)
// const userWeclome = new welcome('Ghazi', "orhan", 2)
// console.log(userWeclome);
// console.log(welcome('Ghazi', "orhan", 2));

// How to define Functions , 

// simple function 

// function welcome(){
//     return 20;
// }

// fucntion as variable 

// const addtoCart = function (){
//     return 10;
// }

// arrow function 
// const isUserLoggedIn = ( ) =>{
//     return true;
// }


// console.log(welcome());
// console.log(addtoCart());
// console.log(isUserLoggedIn());

// const isUserLoggedIn =  (user, status, availiblity) =>  user + status + availiblity


// const isUserLoggedIn =  (user, status, availiblity) =>  {
//     return user + status + availiblity
// }
// console.log(isUserLoggedIn('Ghazi', 'married', true));

// One major difference between the function declaration and 
// function expression is that, with function declaration, 
// you can invoke the function even before defining it. 
// This is not possible with function expressions.




// welcome()

// function welcome(){
//     console.log('simple function, functiond declartion')
// }
// addtoCart()
// const addtoCart = function (){
//     console.log("Price is 10")
// }

// default value for functions parameter

// const  welcome = (name,message ="Hi") =>{
//     console.log(`${message} ${name}`);
    
// }

// welcome('Jhon')
// welcome('Doe', "Hallo")

// spread operator / Rest Parameters  - using to get/pass multiple parameters at once, 

// const welcome = (message, ...names) =>{
//     console.log( message, names);
// }

// welcome('Hi', ['Jhon', 'Waseem', "ghazi",'Okay', "moeen"]);


// how to pass function as parameter in fucntion

// const welcome = (name, age, fn, [friends], {season}) =>{
//     return `${name}, ${age}, ${fn()}, ${friends}, ${season}`;
// }

// const storedData = (welcome('Jhon', 29, ()=>10,['moeen', 'anisa', 'ghazi'], {name: 'autom', duration: 3 } ));

// console.log(storedData);


// object descructuring, and passing via function paramter 

// function userWelcome(userObject){
//     console.log(`${userObject.fname} ${userObject.lname} ${userObject.age}`);
// }


// const userObject = {
//     fname: 'Jhon',
//     lname: 'Doe',
//     age: 20,
// }

// userWelcome(userObject)


// const userWelcome = (user) =>{
//     console.log(`${user.name} ${user.age}`);
    
// }
// userWelcome({name: 'jhon', age: 20})

// object descrtuctring 

// const welcome = ({name, age}) =>{ // object descrutucting 
//     console.log(`${name} ${age}`);
// }
// const user = {
//     name: 'jhon', 
//     age: 12
// }
// console.log(user);

// welcome(user)


// array descrturucinng

// const fruits = ["banana", 'apple', 'orange'] //defining array

// console.log(fruits); //loging aray

// console.log(fruits[1]);  // accessing arrays 
// descrtutring arrays 
// const [winter, summer, autmn] = fruits

// console.log(winter);

// What are Immediately Invoked Function Expressions (IIFEs)?

