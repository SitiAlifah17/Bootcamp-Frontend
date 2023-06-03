//function expression
// const cekUmur = function (lahir ){
//     const year = 2023;
//     const age = year - lahir;

//     return age;
// };


// console.log(cekUmur(2004));


// arrow function
//const cekUmur =  (lahir) => 2023 - lahir;
//console.log(cekUmur(2004));


//default parameter
const cekUmur = function (lahir = 2023 ){
    const year = 2023;
    const age = year - lahir;

    return age;
};


console.log(cekUmur());
