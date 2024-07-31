(function (message){
    const superHero = "Batman";
    console.log(message , superHero);

})('Hello');
(function (message){
    const superHero = "Superman";
    console.log(message , superHero);

})('Hai');


// in every iife function in node have 5 parameters exports , require , module , __filename, __dirname
//eg

//(function (){
//     const superHero = "Batman";
//     console.log(message , superHero);

// })(); this is normal in js in node it will change into give below .....! ithe pole aan oru module wrap cheythekkunnath

(function (exports , require , module, __filename , __dirname){
    const superHero = 'Batman';
    console.log(superHero)
}())