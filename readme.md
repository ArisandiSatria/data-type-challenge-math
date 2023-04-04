# MATH DATA TYPE CHALLENGE

Repositori ini berisi tentang source code jawaban dari materi data type pada repo [ini](https://github.com/impactbyte/code-challenges/tree/master/JavaScript%20Dasar/01-data-type/02-math-number)

---

## Soal

### Nomor 1

Buatlah sebuah function untuk generate random integer dar 2 buah input integer yaitu nilai minimum min dan maksimum max. Nilai random harus berada pada range tersebut.

- Jika nilai min dan max adalah null, maka function mengembalikan hasil 0
- Jika nilai max adalah null, jadikan nilai min menjadi 0 dan max mengambil nilai dari min

_Jawaban:_

_Saya membuat sebuah function bernama rand yang menerima parameter min dan max. Di dalamnya saya menambahkan beberapa kondisi._

_Yang pertama, jika nilai min dan max bernilai null, nilai min dan nilai max bukan angka, maka akan mengembalikan nilai 0_

_Yang kedua, jika nilai max bernilai null, maka nilai max sama dengan nilai min dan nilai min di set ke 0_

_Lalu fungsi akan mengembalikan nilai random yang didapat dari Math.random() dikalikan nilai max dikurangi nilai min ditambah 1 lalu hasilnya di bulatkan ke bawah dengan Math.floor. Setelah itu hasil tadi ditambahkan dengan nilai min._

### Nomor 2

Buatlah sebuah function yang menerima 2 input berupa:

- n yang menerima tipe data number. n adalah nilai desimal yang akan ditentukan batas desimalnya.
- d yang menerima tipe data number. d adalah besaran nilai berapa banyak angka dibelakang desimal dari n.

_Jawaban:_

_Saya membuat fungsi bernama chooseDecimals yang menerima 2 inputan dengan nama n dan d yang saya beri nilai default 0. Di dalamnya terdapat kondisi dimana jika nilai n dan d bukan bertipe number maka akan mengembalikan nilai 0. Kondisi yang kedua adalan jika nilai d kurang dari 0, maka nilai d di set menjadi 0_

_Fungsi akan mengembalikan nilai n yang diambil 2 angka dibelakang koma dengan toFixed()._

### Nomor 3

Buatlah sebuah function yang menerima 1 input untuk mengecek apakah inputan tersebut sebuah numerik atau bukan. Jika iya maka akan mengembalikan status TRUE dan jika bukan maka akan mengembalikan status FALSE.

_Jawaban:_

_Saya membuat fungsi bernama isItNumeric yang menerima argumen bernama number. Fungsi akan mengembalikan nilai number yang saya konversi ke tipe float dengan parseFloat() dan dicek apakah nilai adalah bertipe number dengan !isNaN()_

### Nomor 4

Buatlah sebuah function yang menerima 1 input dengan tipe data integer yang akan dibulatkan ke atas dalam kelipatan 5.

_Jawaban:_

_Disini saya membuat fungsi bernama roundToUpFive yang meneripa satu argumen bernama number dan di dalamnya memiliki beberapa kondisi._

_Kondisi pertama adalah jika number bukan merupakan angka, maka akan mengembalikan nilai 0._

_Yang kedua jika, number merupakan bilangan kelipatan 5, maka akan langsung mengembalikan nilai number._

_Ketiga jika number bernilai positif atau lebih dari sama dengan 0, maka akan mengembalikan nilai number yang dibagi 5 lalu dibulatkan ke atas dengan Math.ceil() dan dikalikan 5_

_Terakhir jika kondisi di atas tidak terpenuhi semua, maka akan mengembalikan nilai number yang dibagi 5 lalu dibulatkan ke bawah dengan Math.floor() dan dikalikan 5 lalu ditambah 5_
