
// //importing of 1st and 2nd pattern are same 

// import add from "./math.mjs";

// console.log(add(1 , 4));



// //3rd pattern importing will be like 

// import math from "./math.mjs";

// // two methods are there first is destructuring and normal method 

// // normal method
// console.log(math.add(1 , 2));
// console.log(math.subtract(1 , 2));

// // destructring method

// const {add, subtract} = math ;
// console.log (add(1 , 2));
// console.log (subtract(1 , 2));



// //  in 4th pattern we also can import two way 

// // first way 

// import  * as math from "./math.mjs"; //here math is a object that contains all the export from that module we can also destructure it and use also like above .....

// console.log(math.add(1,3))
// console.log(math.substract(2 , 3))

// //Second way

// import { add ,substract } from "./math.mjs"; //here this is named export here name must be same as the export 

// console.log(add(2 , 1));
// console.log(substract(2 , 1));

