// dipslyaing javaScript objects 

// const vahcile = {
//     name: 'truck',
//     model: 2023,
//     condition: true,
//     stop: function (){
//         console.log('can stop');
//     },
//     play: function (){
//         console.log('can play');
//     }
// }

// const mehran = vahcile
// console.log(mehran);

// object .values to get values of object
// console.log(Object.values(mehran));
// to get keys of object
// console.log(Object.keys(mehran));
// to get all the entries from object and loop through it, 

// console.log(Object.entries(mehran));

// let mystr = JSON.stringify(mehran);
// console.log(typeof mystr);


// construction function

// function Person (fname, lname, age, eyeColor){
//     this.firstName = fname;
//     this.lastName = lname;
//     this.age = age;
//     this.eyeColor = eyeColor;
// }

// const Ghazi = new Person('Ghazi', "orhan", 29, 'black');
// const Yahya = new Person('Yahya', "Malik", 39, 'brown');
// console.log(Yahya);
// console.log(Ghazi);


function Vachile (name){
   this.vName = name;
   this.fullName = function(){
     return this.vName;
   }
}

// Vachile.prototype.manufactruer = 'Pakistan';
// let marsadiex = new Vachile('Maradiez');
// console.log(marsadiex.manufactruer);

// let mehran = new Vachile('mehran')
// const crola = new Vachile(0)
// mehran.manufactruer = 'Japan'

const mercadies = new Vachile('Mercadiez')

console.log(mercadies.fullName());





