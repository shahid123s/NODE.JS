const path = require ("node:path"); //you cant give space in the full collen node gives you an error


// the first method is .basename 
console.log(path.basename(__filename)); // index.js the last portion 
console.log(path.basename(__dirname)); // PathMoudule the last portion of directory name 

// the second method is .extname to return the extention
console.log(path.extname(__filename)); // .js  the extention 
console.log(path.extname(__dirname));  //   empty string because the folder doesnt have any extention 

// third method is the parse return an object contains root diroctory basename extension and name 
console.log(path.parse(__filename)); // we can also find individually by dot notation
console.log(path.parse(__filename).base) // index.js will be the output
console.log(path.parse(__dirname));
// if we use path.format we can convert hte object to path string 
console.log(path.format(path.parse(__filename)));

// 
