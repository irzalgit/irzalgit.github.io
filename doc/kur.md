Dalam teori peluang, kaidah penjumlahan dan kaidah perkalian adalah aturan dasar untuk menghitung jumlah atau kemungkinan kejadian.

1. Kaidah Penjumlahan (Addition Rule)

Kaidah ini digunakan ketika kita ingin menghitung peluang dari dua atau lebih kejadian yang saling lepas (tidak bisa terjadi bersamaan). Rumusnya:
$$P(A \cup B) = P(A) + P(B)$$


Jika kejadian tidak saling lepas, kita harus mengurangi bagian yang dihitung dua kali:
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

Contoh 1:
Dari sekumpulan 100 siswa, 40 suka matematika dan 30 suka fisika. Jika 10 siswa suka keduanya, berapa peluang jika dipilih satu siswa secara acak, siswa tersebut suka matematika atau fisika?
$$
P(M \cup F) = P(M) + P(F) - P(M \cap F)

= \frac{40}{100} + \frac{30}{100} - \frac{10}{100} = \frac{60}{100} = 0.6
$$
Jadi, peluangnya adalah 0.6 atau 60%.


---

2. Kaidah Perkalian (Multiplication Rule)

Kaidah ini digunakan untuk menghitung peluang dua kejadian terjadi bersamaan, tergantung apakah kejadian tersebut independen atau bersyarat.

Jika A dan B independen (tidak saling memengaruhi):

$$
P(A \cap B) = P(A) \times P(B)
$$
Jika B tergantung pada A:
$$

P(A \cap B) = P(A) \times P(B|A)
$$
Contoh 2:
Dalam satu kotak terdapat 5 bola merah dan 3 bola biru. Jika diambil 2 bola secara bersamaan (tanpa dikembalikan), berapa peluang keduanya merah?

Total bola = 5 + 3 = 8
Peluang mengambil bola merah pertama = 
Peluang mengambil bola merah kedua (karena satu merah sudah diambil) = 
$$
P(R1 \cap R2) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14} \approx 0.357
$$
Jadi, peluang mendapatkan dua bola merah adalah 0.357 atau 35.7%.


---

Dua kaidah ini sangat penting dalam menyelesaikan berbagai masalah peluang, baik dalam kehidupan sehari-hari maupun dalam analisis data.

