// buat variabel binatang
const animals = ["nyamuk", "kucing", "anjing", "panda"];

// akses berdasarkan index, index dari 0
//console.log(animals[1], animals[2]);


//namipilin semua
//for (let i = 0; i < 4; i++){
    //console.log(`Hewan : ${animals[i]}`);
//}
//atau juga bisa kayak gini biar ga usah ngitung banyak data di array
// for (let i = 0; i < animals.length; i++){
//     console.log(`Hewan : ${animals[i]}`);
// }


// buat looping for of
for (const animal of animals){
    console.log(`Hewan : ${animal}`);
}