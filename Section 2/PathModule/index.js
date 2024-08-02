const path = require("node:path"); //you cant give space in the full collen node gives you an error but you can omit the node prefix


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
// if we use path.format we can convert the object to path string 
console.log(path.format(path.parse(__filename)));

// next is path.isAbsolute this look the path is Absolute or relative

console.log(path.isAbsolute(__filename)); //  these two are absolute not relative
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("./data.json")) // this is false because ./ is realative path its not an absolute path

//next method is the .join this joins the specific segment into a single string 
console.log(path.join("Folder1" , "Folder2" , "Index.html")); // output will be  like Folder1\Folder2\Index.html
//its show the path with os specification
console.log(path.join(__dirname , "index.html")); // Its shows like a proper path name 


// next method is resolve it change path to an absolute path
console.log(path.resolve("Folder1" , "Folder2" ,"Index.html")); //it will change to an absolute path
console.log(path.resolve("Folder1" , "Folder2" ,"Index.html")); //it will change to an absolute path
console.log(path.resolve("Folder1" , "Folder2" ,"Index.html")); //it will change to an absolute path
