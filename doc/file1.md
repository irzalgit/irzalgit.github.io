# Materi Matematika - Peluang (Probabilitas)

## 1. Konsep Dasar Peluang
Peluang adalah ukuran kemungkinan suatu kejadian terjadi. Contoh dalam kehidupan sehari-hari:
- Peluang muncul gambar saat melempar koin
- Peluang mendapatkan angka 6 saat melempar dadu

**Istilah Penting:**
- **Eksperimen**: Proses pengamatan (contoh: melempar dadu)
- **Outcome**: Hasil dari eksperimen (contoh: angka 1, 2, 3, 4, 5, atau 6)
- **Ruang Sampel**: Kumpulan semua kemungkinan outcome (S = {1, 2, 3, 4, 5, 6})
- **Kejadian**: Subset dari ruang sampel (contoh: kejadian muncul angka genap = {2, 4, 6})

---

## 2. Rumus Dasar Peluang
Peluang kejadian A ditulis P(A):

```
       Jumlah outcome yang menguntungkan
P(A) = -----------------------------------
         Jumlah total outcome yang mungkin
```

Jumlah outcome yang menguntungkan

**Contoh:**  
Peluang muncul angka prima pada dadu:
- Outcome menguntungkan = {2, 3, 5} → 3 outcome
- Total outcome = 6
- P(prima) = 3/6 = 1/2 = 0.5

**Nilai Peluang:**
- 0 ≤ P(A) ≤ 1
- P(A) = 0 → kejadian mustahil
- P(A) = 1 → kejadian pasti

---

## 3. Jenis-Jenis Kejadian
### a. Kejadian Saling Bebas (Independent)
Kejadian yang tidak saling mempengaruhi.  
**Rumus:**  
P(A ∩ B) = P(A) × P(B)

**Contoh:**  
Peluang muncul gambar pada koin pertama **dan** kedua:
= 1/2 × 1/2 = 1/4

### b. Kejadian Tidak Bebas (Dependent)
Kejadian yang saling mempengaruhi.  
**Rumus:**  
P(A ∩ B) = P(A) × P(B|A)

**Contoh:**  
Kotak berisi 3 bola merah dan 2 biru. Peluang mengambil 2 bola merah berturut-turut **tanpa pengembalian**:
= (3/5) × (2/4) = 3/10

---

## 4. Peluang Gabungan Dua Kejadian
### a. Saling Lepas (Mutually Exclusive)
Kejadian yang tidak bisa terjadi bersamaan.  
**Rumus:**  
P(A ∪ B) = P(A) + P(B)

**Contoh:**  
Peluang muncul angka 2 **atau** 5 pada dadu:
= 1/6 + 1/6 = 2/6 = 1/3

### b. Tidak Saling Lepas
Kejadian yang bisa terjadi bersamaan.  
**Rumus:**  
P(A ∪ B) = P(A) + P(B) - P(A ∩ B))

**Contoh:**  
Peluang terambil kartu hati **atau** queen dari deck kartu:
= 13/52 + 4/52 - 1/52 = 16/52 = 4/13

---

## 5. Permutasi dan Kombinasi
### a. Permutasi
Urutan **penting** (AB ≠ BA)  
**Rumus:**  

```
nPr = n! / (n - r)!
```
**Contoh:**  
Banyak cara menyusun 3 buku dari 5 buku berbeda:
= 5P3 = 5! / (5-3)! = 60

### b. Kombinasi
Urutan **tidak penting** (AB = BA)  

*Rumus:**  
```
nCr = n! / [r!(n - r)!]
```

**Contoh:**  
Banyak cara memilih 3 orang dari 10 orang:
= 10C3 = 120

---

## 6. Aplikasi Peluang dalam Kehidupan
1. **Statistik**: Prediksi hasil pemilu
2. **Permainan**: Strategi dalam game
3. **Bisnis**: Analisis risiko investasi

---

## 7. Contoh Soal Latihan
1. Dilempar dua dadu. Berapa peluang jumlah mata dadu 7?
   - **Jawab**: 6/36 = 1/6

2. Dalam kotak terdapat 4 bola merah dan 6 biru. Jika diambil 2 bola tanpa pengembalian, berapa peluang keduanya merah?
   - **Jawab**: (4/10) × (3/9) = 12/90 = 2/15

3. Tentukan banyak cara menyusun kata "TOPI" jika huruf tidak boleh berulang!
   - **Jawab**: 4P4 = 4! = 24

---

**Tips Belajar Peluang:**
1. Pahami konsep dasar terlebih dahulu
2. Latih dengan contoh kasus nyata
3. Gunakan diagram pohon untuk visualisasi
4. Perbanyak latihan soal kombinasi dan permutasi
Peluang juga dapat diungkapkan dalam bentuk desimal atau persentase. Misalnya, jika ada 3 bola merah dan 5 bola biru dalam sebuah kotak, peluang untuk mengeluarkan bola merah adalah 3/8.
Kaidah pencacahan dalam matematika adalah prinsip yang digunakan untuk menghitung jumlah objek dalam suatu himpunan dengan mengasosiasikan setiap objek dengan bilangan dalam himpunan tertentu. Salah satu contoh kaidah pencacahan adalah kaidah penjumlahan.

Contoh kaidah penjumlahan:
Misalkan Anda ingin mengetahui total jumlah uang di dompet Anda. Anda memiliki beberapa koin: 3 koin senilai 25 sen, 5 koin senilai 10 sen, dan 2 koin senilai 5 sen.

Anda dapat menggunakan kaidah penjumlahan untuk mengetahui jumlah total uang dengan menjumlahkan nilai masing-masing koin:

Jumlah total uang = (jumlah koin 25 sen) + (jumlah koin 10 sen) + (jumlah koin 5 sen)
= (3 × 25 sen) + (5 × 10 sen) + (2 × 5 sen)
= 75 sen + 50 sen + 10 sen
= 135 sen

Jadi, menggunakan kaidah penjumlahan, jumlah total uang di dompet Anda adalah 135 sen.
Kaidah pencacahan dalam matematika adalah metode untuk menghitung jumlah objek dalam suatu himpunan dengan mengasosiasikan setiap objek dengan bilangan dalam himpunan tertentu. Salah satu contoh yang paling umum dari kaidah pencacahan adalah kaidah perkalian.

Contoh kaidah perkalian:
Misalkan Anda ingin mengetahui berapa banyak peserta dalam sebuah kelas jika setiap baris terdiri dari 4 siswa dan ada 5 baris di kelas tersebut.

Anda dapat menggunakan kaidah perkalian untuk menghitung jumlah total siswa dengan mengalikan jumlah siswa dalam setiap baris dengan jumlah baris:

Jumlah total siswa = (jumlah siswa dalam setiap baris) × (jumlah baris)
= 4 × 5
= 20

Jadi, menggunakan kaidah perkalian, jumlah total siswa dalam kelas tersebut adalah 20.
Kaidah pencacahan adalah aturan untuk menghitung banyaknya susunan objek, antara lain:

Aturan pengisian tempat
Aturan penjumlahan
Aturan perkalian

-Faktorial
-Permutasi
-Kombinasi




Guna kaidah pencacahan adalah menentukan banyaknya objek/kejadian tertentu yang muncul.
Peluang suatu kejadian A ditentukan dengan rumus P(A)=n(A)/n(S) 
dimana
P(A)=peluang kejadian A
n(A)=banyak anggota dalam kejadian A
n(S)=banyak sampel

Aturan penjumlahan
Kaidah penjumlahan digunakan pada suatu prosedur yang dapat dikerjakan dengan beberapa cara, tetapi cara-cara ini
tidak dapat dikerjakan pada waktu bersamaan. Misalkan jika ada suatu prosedur/kegiatan  memiliki a cara atau b cara maka banyak cara adalah (a+b) .

Contoh:

Bapak Budi mempunyai 2 buah sepeda yakni sepeda A dan sepeda B.
Dan mempunyai juga <span x-text="b"></span> motor yakni Beat, Revo dan Vesva.

Pertanyaannya:

Jika bapak Budi ke pasar, ada berapa pilihan kendaraan yang digunakan.

Jawab:

Dari persoalan ini tidak mungkin bapak Budi sekaligus
menggunakan sepeda  dan motor,
jadi banyaknya cara pergi ke pasar  adalah 2+3 yakni 5 cara, yakni menggunakan
sepeda A atau Beat atau sepeda B atau Revo atau Vespa.

Berapa peluang melihat bapak Budi menggunakan sepeda kepasar?<br>
Penjumlahan peluang terjadi pada kejadian saling lepas.Misalkan
bila ada dua himpunan A dan B dengan anggota himpunannya a  dan b   dan
kedua himpunan saling lepas maka banyaknya cara mengambil 1 pilihan dari kedua himpunan
adalah menjumlahkan a + b.

Persamaan penjumlahan peluang pada dua kejadian A dan B yang saling lepas adalah
$$P\left ( A\cup  B\right )=P(A)+P(B)$$
Jadi peluang melihat bapak Budi menggunakan 

P(sepeda)=2/5
P(sepeda atau motor)=2/5 + 3/5 =1
P(sepeda A atau motor)=1/5 + 3/5 =4/5
P(sepeda A atau Beat)=1/5 + 1/5 =2/5
P(sepeda atau Beat)=2/5 + 1/5 =3/5

Aturan perkalian
Kaidah perkalian digunakan pada suatu prosedur yang dapat dikerjakan dengan beberapa cara, tetapi cara-cara ini
dikerjakan pada waktu bersamaan. Misalkan jika ada suatu prosedur/kegiatan  memiliki a cara dan b cara maka banyak cara adalah (a x b) .
<p>
Contoh:
</p>
Warung bapak Budi menyediakan 2 macam nasi yaitu nasi putih dan nasi uduk serta lauknya ada 3 macam yaitu ayam geprek,
ayam bakar dan ikan bakar.
Berapa banyaknya paket makanan warung bapak Budi ini.
<p>
Jawab:
</p>
Dari persoalan diatas setiap paket terdiri atas nasi dan lauk (bersama-sama),  masing-masing 2 pilihan nasi dan 3 pilihan lauk.
Maka menurut kaidah perkalian maka ba
<h1>Permutasi</h1>
<p>
Permutasi r dari n ditulis $ _nP_r$.
Rumus permutasi : $ _nP_r=\frac{n!}{(n-r)!}$
</p>
<label>

<h1>Kombinasi</h1><br>
Kombinasi r dari n ditulis $ _nC_r$ <br>
Rumus kombinasi : $ _nC_r=\frac{n!}{r!.(n-r)!}$<br>



Faktorial<br>
Berikut adalah 6 cara yang berbeda untuk mengatur 3 kelereng:<br>

1. Kelereng pertama, kedua, dan ketiga.<br>
2. Kelereng pertama, ketiga, dan kedua.<br>
3. Kelereng kedua, pertama, dan ketiga.<br>
4. Kelereng kedua, ketiga, dan pertama.<br>
5. Kelereng ketiga, pertama, dan kedua.<br>
6. Kelereng ketiga, kedua, dan pertama.<br>

Jadi, itulah 6 cara yang berbeda untuk mengatur 3 kelereng.<br>
Permutasi<br>
Dalam matematika, faktorial adalah operasi yang mengalikan semua bilangan bulat positif yang lebih kecil atau sama dengan bilangan itu sendiri.<br> Misalnya, jika Anda memiliki 3 kelereng, dan ingin mengetahui jumlah kemungkinan urutan mereka, Anda dapat menggunakan faktorial.<br> Jumlah cara yang berbeda untuk mengatur 3 kelereng adalah 3! = 3 × 2 × 1 = 6. <br>Jadi, ada 6 cara yang berbeda untuk mengatur 3 kelereng.<br>
Permutasi dalam matematika mengacu pada cara pengaturan objek atau elemen dalam suatu urutan tertentu. Misalnya, jika kita memiliki 3 kelereng yang berbeda warna, katakanlah merah, biru, dan hijau, maka beberapa permutasi yang mungkin adalah:<br>

1. Merah, Biru, Hijau<br>
2. Merah, Hijau, Biru<br>
3. Biru, Merah, Hijau<br>
4. Biru, Hijau, Merah<br>
5. Hijau, Merah, Biru<br>
6. Hijau, Biru, Merah<br>

Jadi, ada 6 permutasi yang berbeda untuk 3 kelereng tersebut.<br>
Kombinaai<br>
Dalam matematika, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan objek tanpa memperhatikan urutan atau susunan. Kombinasi sangat berguna dalam berbagai konteks, seperti statistik, probabilitas, dan pemrosesan data.
<br>
Secara formal, kombinasi \( C(n, k) \), diwakili dengan \( n \) atas \( k \), menunjukkan jumlah cara yang berbeda untuk memilih \( k \) objek dari total \( n \) objek, tanpa memperhatikan urutan. Rumus umum untuk kombinasi adalah:

\[ C(n, k) = \frac{n!}{k!(n-k)!} \]
<br>
Di mana \( n! \) (dibaca sebagai "n faktorial") adalah hasil perkalian dari semua bilangan bulat positif dari 1 hingga \( n \). Misalnya, \( 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 \).
<br>
Contoh penggunaan kombinasi:<br>
Misalkan Anda memiliki 5 buah apel dan Anda ingin memilih 2 dari apel-apel tersebut. Jumlah kombinasi yang berbeda untuk memilih 2 apel dari total 5 apel adalah \( C(5, 2) \):

\[ C(5, 2) = \frac{5!}{2!(5-2)!} = \frac{5 \times 4}{2 \times 1} = 10 \]
<br>
Jadi, ada 10 cara yang berbeda untuk memilih 2 apel dari 5 apel yang tersedia.
