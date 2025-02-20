Dalam teori peluang, kaidah penjumlahan dan kaidah perkalian adalah aturan dasar untuk menghitung jumlah atau kemungkinan kejadian.

1. Kaidah Penjumlahan

Kaidah ini digunakan ketika kita ingin menghitung peluang dari dua atau lebih kejadian yang saling lepas (tidak bisa terjadi bersamaan). Rumusnya:
$$P(A \cup B) = P(A) + P(B)$$


Jika kejadian tidak saling lepas, kita harus mengurangi bagian yang dihitung dua kali:
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

Contoh 1:
Dari sekumpulan 100 siswa, 40 suka matematika dan 30 suka fisika. Jika 10 siswa suka keduanya, berapa peluang jika dipilih satu siswa secara acak, siswa tersebut suka matematika atau fisika?

$$P(M \cup F) = P(M) + P(F) - P(M \cap F)= \frac{40}{100} + \frac{30}{100} - \frac{10}{100} = \frac{60}{100} =0.6$$

Jadi, peluangnya adalah 0.6 atau 60%.


---

2. Kaidah Perkalian 

Kaidah ini digunakan untuk menghitung peluang dua kejadian terjadi bersamaan, tergantung apakah kejadian tersebut independen atau bersyarat.

Jika A dan B independen (tidak saling memengaruhi):

$$P(A \cap B) = P(A) \times P(B)$$

Jika B tergantung pada A:

$$P(A \cap B) = P(A) \times P(B|A)$$

Contoh 2:
Dalam satu kotak terdapat 5 bola merah dan 3 bola biru. Jika diambil 2 bola secara bersamaan (tanpa dikembalikan), berapa peluang keduanya merah?

Total bola = 5 + 3 = 8
Peluang mengambil bola merah pertama = 
Peluang mengambil bola merah kedua (karena satu merah sudah diambil) = 

$$P(R1 \cap R2) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} =\frac{5}{14} \approx 0.357$$

Jadi, peluang mendapatkan dua bola merah adalah 0.357 atau 35.7%.


---# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
# Ini adalah File Markdown
1. Langkah 1
  2. Langkah 2
  3. Langkah 3
Markdown adalah format teks ringan yang digunakan untuk menulis dokumen sederhana dengan sintaks yang mudah dibaca.
# Peluang

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3



Rumus peluang adalah:

$$ P(A) = \frac{n(A)}{n(S)} $$

Dan  $ P(B) = \frac{n(B)}{n(S)} $

## Daftar Kata:
- saling lepas
- saling bebas

---

**Teks Tebal**  
*Teks Miring*  
~~Teks Coret~~



Berikut adalah perangkat ajar untuk materi Peluang pada kelas XI SMK sesuai Kurikulum Merdeka, termasuk Capaian Pembelajaran (CP), Alur Tujuan Pembelajaran (ATP), dan asesmen.


---

Capaian Pembelajaran (CP) - Peluang (Kelas XI SMK)

Setelah mempelajari materi ini, peserta didik diharapkan mampu:

1. Memahami dan menerapkan konsep peluang dalam berbagai situasi, termasuk peluang kejadian saling lepas, saling bebas, bersyarat, dan kombinasi kejadian.


2. Menggunakan aturan peluang untuk menyelesaikan masalah dalam kehidupan nyata dan pengambilan keputusan.


3. Menganalisis keterkaitan antara berbagai jenis peluang dalam suatu konteks.




---

Alur Tujuan Pembelajaran (ATP) - Peluang (Kelas XI SMK)

1. Peserta didik memahami konsep dasar peluang sebagai ukuran ketidakpastian.


2. Peserta didik mengidentifikasi dan menentukan peluang kejadian saling lepas dan saling tidak lepas.


3. Peserta didik menghitung peluang kejadian saling bebas dan tidak bebas.


4. Peserta didik memahami konsep peluang bersyarat dan menerapkannya dalam berbagai masalah.


5. Peserta didik memadukan berbagai konsep peluang dalam satu permasalahan dan menyelesaikannya dengan tepat.




---

Asesmen - Soal dan Jawaban Peluang

Berikut adalah 10 soal dan jawabannya terkait peluang kejadian saling lepas, saling bebas, bersyarat, saling tidak lepas, dan kombinasinya.

Soal 1 (Saling Lepas)

Dua dadu dilempar. Tentukan peluang munculnya jumlah mata dadu 4 atau 7!

Jawaban:
Kejadian 4 = {(1,3), (2,2), (3,1)} → 3 kemungkinan
Kejadian 7 = {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)} → 6 kemungkinan
Karena kejadian ini saling lepas, maka:
P(A ∪ B) = P(A) + P(B) = (3/36) + (6/36) = 1/4


---

Soal 2 (Saling Tidak Lepas)

Sebuah kantong berisi 3 bola merah dan 4 bola biru. Jika diambil satu bola, lalu tanpa dikembalikan diambil bola kedua, tentukan peluang mendapat bola merah lalu biru!

Jawaban:
P(M) = 3/7, setelah bola merah diambil tersisa 6 bola, sehingga P(B|M) = 4/6
P(M lalu B) = P(M) × P(B|M) = (3/7) × (4/6) = 2/7


---

Soal 3 (Saling Bebas)

Dua koin dilempar. Tentukan peluang muncul sisi angka pada koin pertama dan gambar pada koin kedua!

Jawaban:
Karena pelemparan koin tidak saling mempengaruhi, maka kejadian ini saling bebas:
P(A) = 1/2, P(B) = 1/2
P(A ∩ B) = (1/2) × (1/2) = 1/4


---

Soal 4 (Peluang Bersyarat)

Di sebuah kelas, 60% siswa suka matematika, dan 40% suka fisika. Jika 25% suka kedua mata pelajaran, berapa peluang seseorang yang suka matematika juga suka fisika?

Jawaban:
P(F|M) = P(M ∩ F) / P(M) = (0.25) / (0.60) = 5/12


---

Soal 5 (Gabungan Saling Bebas & Tidak Lepas)

Dua dadu dilempar. Berapa peluang muncul angka 3 di dadu pertama dan jumlah totalnya lebih dari 7?

Jawaban:

P(A) (dadu pertama = 3) = 1/6

P(B|A) (jumlah > 7, jika dadu pertama 3 → dadu kedua harus ≥5) = 2/6
P(A ∩ B) = P(A) × P(B|A) = (1/6) × (2/6) = 1/18



---

Soal 6 (Peluang Bersyarat - Kartu Remi)

Dari 52 kartu, jika sudah diambil kartu hati, berapa peluang kartu kedua juga hati?

Jawaban:
P(H1) = 13/52
P(H2|H1) = 12/51
P(H1 ∩ H2) = (13/52) × (12/51) = 1/17


---

Soal 7 (Peluang Kejadian Saling Lepas)

Dari 100 orang, 40 suka kopi, 30 suka teh, dan 10 suka keduanya. Berapa peluang orang yang dipilih hanya suka kopi atau hanya teh?

Jawaban:
P(K) = 40/100, P(T) = 30/100, P(K ∩ T) = 10/100
P(K ∪ T) = P(K) + P(T) - P(K ∩ T) = (40/100) + (30/100) - (10/100) = 60%


---

Soal 8 (Peluang Kombinasi Kejadian)

Sebuah tim memiliki 4 pemain senior dan 6 pemain junior. Berapa peluang memilih 3 pemain yang terdiri dari 2 senior dan 1 junior?

Jawaban:
Total cara memilih 3 pemain:
(4C2 × 6C1) / 10C3 = (6 × 6) / 120 = 3/10


---

Soal 9 (Saling Bebas dan Tidak Bebas)

Jika A = "Memilih angka genap dari 1-10", dan B = "Memilih angka kelipatan 5 dari 1-10", apakah A dan B saling bebas?

Jawaban:
P(A) = 5/10, P(B) = 2/10, P(A ∩ B) = 1/10
P(A) × P(B) = (5/10) × (2/10) = 1/10
Karena P(A ∩ B) = P(A) × P(B), maka saling bebas.


---

Soal 10 (Peluang Bersyarat - Pabrik Produksi)

Sebuah pabrik menghasilkan 80% produk bagus dan 20% rusak. Dari yang rusak, 50% bisa diperbaiki. Jika produk diambil acak, berapa peluang produk rusak yang bisa diperbaiki?

Jawaban:
P(D|R) = P(R ∩ D) / P(R) = (0.2 × 0.5) / 0.2 = 0.5 atau 50%


---

Itulah CP, ATP, dan asesmen untuk materi Peluang kelas XI SMK Kurikulum Merdeka. Semoga membantu!

Jika ada 2 kejadian yaitu A dan B maka :
- Dua kejadian saling lepas
<span style="font-size: 12px;">
$$P(A \cup B )=P(A)+P(B)-(A \cap B)$$
saling lepas 
     $$ A \cap B = 0 $$ 
     saling tidak lepaa
     $$ A \cap B =\not 0 $$
    </span>
    
 - Dua kejadian saling bebas
<span style="font-size: 12px;">
    $$P(A \cap B)=P(A).P(B) $$
    -bersyarat
    - $$ P(A \cap B)=P(B).P(A|B) $$
    - $$ P(A \cap B)=P(A).P(B|A) $$</span>






h2>Integral dalam MathJax</h2>
    
    <p>Integral tak tentu:</p>
    <p>
        \int f(x) \, dx
   </p>

    <p>Integral tentu:</p>
    <p>
        \int_{a}^{b} f(x) \, dx
   </p>

    <p>Integral ganda:</p>
    <p>
        \iint_D f(x,y) \, dA
   </p>

    <p>Integral rangkap tiga:</p>
    <p>
        \iiint_V f(x,y,z) \, dV
   </p>

    <p>Integral garis:</p>
    <p>
        \oint_C f(x,y) \, ds
   </p>

$\int_{a}^{b} f(x) \,dx$
