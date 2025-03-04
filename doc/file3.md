Teori Peluang – Kelas 11 SMK

##1. Pengertian Peluang

Peluang (disimbolkan dengan huruf P atau p) adalah ukuran kemungkinan terjadinya suatu peristiwa dalam suatu percobaan. Peluang dinyatakan dengan bilangan antara p = 0 sampai dengan p = 1, di mana:

Peluang 0 berarti peristiwa tidak mungkin terjadi.

Peluang 1 berarti peristiwa pasti terjadi.


Secara matematis, peluang suatu peristiwa A ditulis sebagai:

$
P(A) = \frac{\text{Jumlah kejadian yang diinginkan}}{\text{Jumlah kejadian yang mungkin terjadi}}
$

##2. Ruang Sampel S dan Kejadian  A

Ruang sampel S adalah himpunan semua kemungkinan hasil dari suatu percobaan.

Kejadian A adalah himpunan bagian dari ruang sampel yang berisi satu atau lebih hasil yang diinginkan.

###Kasus 1.Kejadian tunggal

Contoh 1: permainan sebuah DADU
Jika kita melempar sebuah dadu, ruang sampelnya adalah:

S = {1, 2, 3, 4, 5, 6}

anggota himpunan S merupakan semua angka yang  mungkin terjadi.

Sekarang kalau ditetapkan kejadian A adalah muncul bilangan 1 maka anggota himpunan A adalah

A = {1}

anggota himpunan A adalah himpunan bagian dari  S .

Maka, peluang kejadian A adalah:

$P(A) = \frac{n(A)}{n(S)}$

karena jumlah anggota himpunan S ada 6 buah angka  atau dinyatakan dengan n(S)=6 dan jumlah himpunan A ada 1 buah angka  dinyatakan dengan n(A)=1. 
Maka peluang kejadian muncul angka 1 adalah

$P(A) = \frac{1}{6}$


##2.Peluang Komplementer

adalah peluang suatu kejadian tidak terjadi.

Jika P(A) adalah peluang kejadian A, maka peluang komplementernya adalah:

P(A') = 1 - P(A)

Dalam kasus dadu diatas kita bisa memghiuung peluang bukan angka 1 menggunakan sifat diatas.

Peluang bukan angka 1 ialah

P(A')=1-P(A)=1-1/6 =5/6




##3. Aturan dalam Peluang

a. Aturan Penjumlahan

Jika A dan B  adalah dua kejadian dalam ruang sampel yang sama, maka:

$P(A \cup B) = P(A) + P(B) - P(A \cap B)$

$P(A \cup B) = P(A) + P(B)$


Dalam kasus dadu diatas jika A kejadian  angka 1 dan B kejadian bilangan ganjil maka peluan muncul angka 1 atau ganjil adalah

A={1}

B={1,3,5}

karena angka 1 ada di himpunan A dan himpunan B maka 

$A \cap B$ ={1}

jadi peluang angka 1 atau ganjil adalah

$P(A \cup B) = P(A) + P(B) - P(A \cap B)$

$P(A \cup B)$ = 1/6 + 3/6 - 1/6=3/6
=1/2


###Kasus 4.Kejadian majemuk

4a.Pasangan dua dadu

misalkan dalam kotak ada 2 buah dadu. Kemudian diambil kedua dadu sekaligus, maka pasangan kedua dadu itu mulai dari (1,1) sampai (6,6) berikut ini berjumlah 36 pasangan.

Dadu pertama ada 6 cara dan dadu kedua ada 6 cara , jadi gunakan kaidah perkalian maka jumlah pasangan 6 x 6 = 36 pasangan atau 36 kombinasi, seperti dibawah ini.

S={
(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),
(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),
(3,1),(3,2),(3,3),(3,4),(3,5),(3,6),
(4,1),(4,2),(4,3),(4,4),(4,5),(4,6),
(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),
(6,1),(6,2),(6,3),(6,4),(6,5),(6,6)
}

jadi jumlah ruang sampelnya n(S)=36 

maka ada beberapa peluang yang dapat dicari,misalkan
a.Jika A himpunan  angka dobel tentukan peluamgnya.

A = 
{(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)}

ada 6 pasangan jadi n(A)=36

Dengan demikian peluangvterambil angka dobel adalah

$P(A) = \frac{6}{36}$

$P(A) = \frac{1}{6}$


cara lain 
peluang  dadu pertama angka 1 adalah 1/6 dan dadu kedua angka 1 adalah 1/6 jadi peluang (1,1) = 1/6 x 1/6 =1/36, selankutnya 
peluang (2,2) = 1/36
peluang (3,3) = 1/36
peluang (4,4) = 1/36
peluang (5,5) = 1/36
peluamg (6,6) = 1/36.

Jadi peluang angka dobel adalah penjumlahan masing masing = 6 x 1/36 = 6/36=1/6.

4b.Pasangan dua kelereng

Jika A dan B saling bebas, maka peluang keduanya terjadi adalah:

misalkan ada 6 kelereng bernomor 1 sampai 6. jika diambil 1 kelerang tanpa pengembalian maka peluang kelerwng kedua tidak bebas.
Misalkan berapa peluang angka pertama 1 dan angka kesua 2.

dalam hal ini ada ruang sampel

S = 1 2 3 4 5 6
n(S)=6
n(1)=1

jadi peliang angka 1 adalah 1/ 6 

untuk pengambilan kedua ruang sampel sudah berubah

S = 2 3 4 5 6

n(S)=5
n(2)=1

jadi peluang angka 2 adalah p(2)=1/5.

Dengan dwmikian peluan yang muncul 1 , 2 adalah 1/6 x 1/5 = 1/ 30

dengam menggunakan aturan dibawah ini 
$P(A \cap B) = P(A) \times P(B)$

$P(A \cap B) = P(A|B) \times P(B)$




##5. Permutasi dan Kombinasi dalam Peluang

Dalam beberapa kasus, kita perlu menghitung jumlah kemungkinan penyusunan objek menggunakan permutasi dan kombinasi.

Permutasi (urutan diperhitungkan):


$P(n, r) = \frac{n!}{(n - r)!}$

$C(n, r) = \frac{n!}{r!(n - r)!}$

6. Contoh Soal dan Penyelesaian

Soal: Sebuah kantong berisi 5 bola merah dan 3 bola biru. Jika diambil 1 bola secara acak, berapakah peluang terambilnya bola merah?

Penyelesaian:

Ruang sampel: 

Kejadian A (terambil bola merah): 

Peluang:


$P(A) = \frac{5}{8}$



**Istilah Penting:**
- **Eksperimen**: Proses pengamatan (contoh: melempar dadu)
- **Outcome**: Hasil dari eksperimen (contoh: angka 1, 2, 3, 4, 5, atau 6)
- **Ruang Sampel**: Kumpulan semua kemungkinan outcome (S = {1, 2, 3, 4, 5, 6})
- **Kejadian**: Subset dari ruang sampel (contoh: kejadian muncul angka genap = {2, 4, 6})
