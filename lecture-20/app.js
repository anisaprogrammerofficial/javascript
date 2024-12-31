// Basic Array Methods
// Array length
let products = ['boya m1', 'hp 640 notebook 13 series', 'boost airbuds']

// document.body.innerText = products.length


// Array toString()

// products.forEach((value)=>{
//     document.body.innerText += value;
    
// })


// console.log(typeof products);
// console.log(products);

// let arrayToString = products.toString()

// console.log(typeof arrayToString);
// console.log(arrayToString);



// Array at() method prodvides you value of passed index  number in at(2)

// console.log(products[products.length-1]);

// lat item to find from array
console.log(products.at(-1));


// Array join()


let festiveSeaonsProducts = ['jersy', 'gloves','caps', 'sockes']

// let joinedProducts = products.join(festiveSeaonsProducts)

// console.log(joinedProducts);


// console.log(festiveSeaonsProducts.join(" 100$ "));


// Array pop()
// 
// it will remove one eleement from any array at the end
// let lastItem = festiveSeaonsProducts.pop()
// console.log(festiveSeaonsProducts);
// console.log(lastItem);

// Array push() 

// it will add item into array in last
// let newFestiveProduct = 'shall';
// festiveSeaonsProducts.push(newFestiveProduct)

// console.log(festiveSeaonsProducts);


// Array shift()

// let fristItem = festiveSeaonsProducts.shift();

// console.log(fristItem);
// console.log(festiveSeaonsProducts);



// Array unshift()

// let newFestiveProduct = 'shall';
// let addFirstItem = festiveSeaonsProducts.unshift(newFestiveProduct)


// console.log(newFestiveProduct);
// console.log(festiveSeaonsProducts);



// Array delete()


// Array concat()
// let combinedSeaonsProducts = festiveSeaonsProducts.concat(products, "i also want to be sold");

// console.log(combinedSeaonsProducts);
// console.log(combinedSeaonsProducts.concat("amazing Product"));


// Array copyWithin()

// let newArr = products.copyWithin(1,0,3);

// console.log(newArr);


// Array flat()

let festiveProducts  = [
    ['jersy', 'gloves'],
    ['loan', 'khadar'],
    [4000, 2300]

]

// console.log(festiveProducts);

// let flatProducts = festiveProducts.flat()
// console.log(flatProducts);
// console.log(festiveProducts);


// let flatmapArray = [1,2,3,5,3];

// let newFlatMapArray = flatmapArray.flatMap( (x) =>[x * 10])

// console.log(flatmapArray);
// console.log(newFlatMapArray);


// Array splice()
// The splice() method adds new items to an array.

// console.log(festiveProducts);
// let newFestive = festiveProducts.splice(0, 2, "kamees", 'Shalwar');
// console.log(festiveProducts);
// console.log(newFestive);
// console.log(newFestive.splice(0, 1));





// Array toSpliced()
// let newArray = festiveProducts.toSpliced(0, 1, "Shalwar", "kameez");

// console.log(newArray);
// console.log(festiveProducts);


// Array slice()

// The slice() method slices out a piece of an array.

// console.log(festiveProducts);
// console.log(festiveProducts.slice(0,1));



