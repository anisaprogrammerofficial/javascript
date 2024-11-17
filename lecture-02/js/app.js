// // function return statement

// // function welcome(name){
// //     console.log(name)
// //     return( `Welcome User ${name}`);  
// //     console.log('Hi i am after return'); 
// // }

// // const userGhazi = welcome('Ghazi');
// // console.log(userGhazi);

// // JavaScript Objects

// // How to Define a JavaScript Object ?

// // Using an Object Literal


// const Car = {
//     // properties of a car

//     name: 'Crola',
//     model: 2024,
//     color: 'black',
//     availibility: true,

//     // methods

//     drive: function (){
//         console.log(`Yes can drive`);
//     },

//     stop: function (){
//         console.log(`Stopped`);
        
//     },

// }




// // 

// // how to access properties and methods
// Car.drive();
// Car.stop();


// console.log(`${Car.color}, ${Car.model}`)

// console.log(Car.name);
// console.log(Car. model);
// console.log(Car.color);


// //object practice



// const mehran = Car
// mehran.name = "Mehran"
// mehran.model = 2025
// console.log(mehran);




// Using the new Keyword

// const vahicle = new Object({
//     name: 'Truck',
//     model: 2005, 
//     color: 'magenta',

//     play: function (){
//         console.log('Playing');
//     }
    
// })

// const car = vahicle
// car.name = 'Croloa', 
// car.model = 2025
// console.log(car);





// const vahcile = {
//     name: 'crola',
//     model: 2002,
// }

// adding new property into object

// vahcile.color = "black"
// console.log(vahcile);

// deleting any proeprty from object

// delete vahcile.name;


// nested object

// const vahcile = {
//         name: 'crola',
//         model: 2002,
//         specs : {
//             gear: 2,
//             age: 20
//         }    
// }

// console.log(vahcile.specs.gear);

const Person = {
    fname: 'Orhan',
    lname: 'Ghazi',
    age: 20,
    edu: 'graduation',
    fullName: function(){
        const upperCaseName = this.fname.toUpperCase() + " " + this.lname.toUpperCase();
        return upperCaseName;
    }
}

// // console.log(`Welcome Mr: ${Person.fname} ${Person.lname}`);
// console.log(Person.fullName());

// /adding new proprerty iinto object 

// Person.color = 'Yellow'
// console.log(Person);


// adding a new method into object

// Person.totalAge = function (){
//     this.age - 1996
// }

// console.log(Person.totalAge());


// adding new method 

// Person.totalAge = function (){
//     return this.age - 20;
// }

// console.log(Person);

console.log(Person.fullName());
