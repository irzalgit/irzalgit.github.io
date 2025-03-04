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

