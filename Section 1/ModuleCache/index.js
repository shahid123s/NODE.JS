// const superHero = require('./super-Hero'); // here super-hero module executed and stored in the cache 


// console.log(superHero.getName());

// superHero.setName("SuperMan")


// console.log(superHero.getName());



// const newSuperHero = require('./super-Hero');
// // when we use the second time it is taking from the cache 

// console.log(newSuperHero.getName()); // so the result in herewill be SuperMan insted of Batman



// This is because when the node.js require or imported a module that will store in the cache . In our case the return value is an object ,Since object is  pass by reference the second time when we call the module node.js think that this is already loaded why would i run again i just take that then we change the value that's why here when we console it it will shows the :"Superman": as result....


//What is we need seperate instance for seperate require .. then we go to the super-Hero module




// this code is for that after reading the module only you want to read this 

const superhero = require('./super-Hero'); // here super-hero module executed and stored in the cache 

const Batman = new superhero ("batman");
console.log(Batman.getName());

Batman.setName("Bruce Wayne")


console.log(Batman.getName());

const newSuperhero = new superhero("Superman");

console.log(newSuperhero.getName());


//when we console this every require is the individual instant not the copy by reference here also module is cached but the cached memory is the class itself 

