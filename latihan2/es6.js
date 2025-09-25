// buat object (banyak data, banyak tipe data)
const mahasiswa = {
    Nim: "A11.2023.12345",
    nama: "Rizki",
    umur: 20,
    status: true,

    matkul:[
        {
            matkulid: 4705 ,
            nama: "Pemrograman Web",
            sks: 3,
            tugas: 80,
            uts: 85,
            uas: 90
        },
        {
            matkulid: 4706 ,
            nama: "Basis Data",
            sks: 3,
            tugas: 75,
            uts: 80,
            uas: 85
        },
        

    ]
}

// buat array bisa (banyak data, satu tipe data)
 const listMahasiswa = ["Rizki", "Budi", "Siti"] //array string

// arry dengan 2 object
 const listMahasiswa2 = [
    {
        Nim: "A11.2023.12345",
        nama: "Rizki",
        umur: 20,

        Matakuliah: [
            {
                kode: 4705,
                nama: "Pemrograman Web",
                sks: 3,
                tugas: 80,
                uts: 85,
                uas: 90
            },
            {
                kode: 4706,
                nama: "Basis Data",
                sks: 3,
                tugas: 75,
                uts: 80,
                uas: 85
            }
        ]
    },
    {
        Nim: "A11.2023.12346",
        nama: "Budi",
        umur: 21,

        Matakuliah: [
            {
                kode: 4705,
                nama: "Pemrograman Web",
                sks: 3,
                tugas: 70,
                uts: 75,
                uas: 80
            },
            {
                kode: 4706,
                nama: "Basis Data",
                sks: 3,
                tugas: 65,
                uts: 70,
                uas: 75
            }

        ]
    }

    // }
    // {Nim: "A11.2023.12345", nama: "Rizki", umur: 20, status: true},
    // {Nim: "A11.2023.12346", nama: "Budi", umur: 21, status: true},
    // {Nim: "A11.2023.12347", nama: "Siti", umur: 19, status: false}    
 ]


//  1. ctrl shift p
//  2. pilih start on current file


console.log(mahasiswa);
// tampilkan array
console.table(mahasiswa)
console.table(listMahasiswa)
console.table(listMahasiswa2)

// tampilkan array index dan array index ke 1
console.log(listMahasiswa[0]);
console.log(listMahasiswa[1]);
console.log(listMahasiswa2[0]);
console.log(listMahasiswa2[1]);

// tampilkan key nama dari object mahasiswa
console.log(mahasiswa.nama);    
console.log(listMahasiswa2[0].nama);
console.log(listMahasiswa2[1].nama);

// destructuring object
const {Nim, nama, umur, status} = mahasiswa;
console.log(Nim);
console.log(nama);
console.log(umur);
console.log(status);

// destructuring array
const {datariski, databudi} = listMahasiswa2;
console.log(datariski);
console.log(databudi);

// 
// desstructuring array dari list matakuliah milik variabel mahasiswa
const {matkul} = mahasiswa;
console.log(matkul);
console.table(matkul);


// ES5 templatea literal
console.log("Halo nama saya " + nama + ", nim saya " + Nim + ", umur saya " + umur + " tahun.");

// ES6 template literal
console.log(`Halo nama saya ${nama}, nim saya ${Nim}, umur saya ${umur} tahun.`);

// ES5 function
function jumlahkanES5(a, b) {
    return a + b;
}
console.log(jumlahkanES5(2, 3));

// ES6 arrow function
const jumlahkanES6 = (a, b) => a + b;
console.log(jumlahkanES6(5, 7));

// ES5 function untuk menampilkan nama matakuliah
function tampilMatkulES5() {
    matkul.forEach(function(mk) {
        console.log(mk.nama);
    });
}
tampilMatkulES5();

// E56 method map,filter,reduce
// method map
const namaMatkul = matkul.map(mk => mk.nama);
console.log(namaMatkul);

// method filter
const sks3 = matkul.filter(mk => mk.sks === 3);
console.table(sks3);

// method reduce
const totalSks = matkul.reduce((total, mk) => total + mk.sks, 0);
console.log(totalSks);