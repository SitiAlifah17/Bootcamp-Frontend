// buat object {}, key:value
const user = {
    nama:"Alifah",
    umur: 19,
    jurusan: "Sistem informasi",
};

console.log(user.nama); // atau bisa pake []
console.log(user["jurusan"]);

// looping data object
for (const kunci in user) {
    console.log( `key : ${kunci} value : ${user[kunci]}` );
}