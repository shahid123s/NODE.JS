// this is the callback function
function greet(name){
    console.log(`Hello ${name}`);
};

//this is the higer order function 
function greetShahid(greetFunc){
    const name = "Shahid";
    greetFunc(name);
};

// invoke the function 
greetShahid(greet);
