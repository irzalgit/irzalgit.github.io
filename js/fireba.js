
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

        // Konfigurasi Firebase
     
        // Inisialisasi Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        // Kunci jawaban (array untuk mendukung banyak jawaban)
        const kunciJawaban = {
            q1: ["a"], 
            q2: ["a"], 
            q3: ["a"], 
            q4: ["b", "c"],  // Contoh soal dengan dua jawaban benar
            q5: ["d"]
        };

        // Fungsi untuk mengecek nilai
        window.cekNilai = function () {
            let skor = 0;

            for (let i = 1; i <= 5; i++) {
                const jawabanTerpilih = Array.from(document.querySelectorAll(`input[name="q${i}"]:checked`))
                                             .map(input => input.value);

                // Cek apakah jawaban pengguna cocok dengan kunci jawaban
                if (arraysEqual(jawabanTerpilih, kunciJawaban[`q${i}`])) {
                    skor += 10;
                }
            }

            document.getElementById("nilaiBaru").value = skor;
            document.getElementById("hasilSkor").innerText = `Skor Anda: ${skor}`;
            document.getElementById("sendButton").style.display = "block"; // Tampilkan tombol send
        };

        // Fungsi untuk membandingkan dua array (urutan tidak diperhitungkan)
        function arraysEqual(arr1, arr2) {
            return arr1.length === arr2.length && arr1.sort().join(",") === arr2.sort().join(",");
        }

        // Fungsi untuk memperbarui nilai siswa
        window.updateNilai = async function () {
            const idSiswa = document.getElementById("idSiswa").value;
            const nilaiBaru = document.getElementById("nilaiBaru").value;

            if (!idSiswa || !nilaiBaru) {
                alert("Masukkan ID Siswa dan hitung nilai terlebih dahulu!");
                return;
            }

            const siswaRef = ref(db, "data_siswa/" + idSiswa);

            try {
                const snapshot = await get(siswaRef);
                if (snapshot.exists()) {
                    await set(siswaRef, { 
                        nama: snapshot.val().nama, 
                        nilai: parseInt(nilaiBaru, 10) 
                    });
                    alert("Nilai berhasil diperbarui!");
                } else {
                    alert("ID Siswa tidak ditemukan!");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Gagal memperbarui nilai!");
            }
        };
    
    