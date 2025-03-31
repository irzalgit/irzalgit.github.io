// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCu4GQa-EOaPhpQP_y_QcsJxs05adQU2-M",
  authDomain: "math314-app.firebaseapp.com",
  databaseURL: "https://math314-app-default-rtdb.firebaseio.com/",
  projectId: "math314-app",
  storageBucket: "math314-app.appspot.com",
  messagingSenderId: "9019551034",
  appId: "1:9019551034:web:de0c5e2b8b20c18ca0b403"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let currentUsername = "";

function loginfire() {
  let username = document.getElementById("usernamefire").value.trim();
  let password = document.getElementById("passwordfire").value.trim();
  let status = document.getElementById("statusfire");

  if (username === "" || password === "") {
    status.innerText = "Username dan Password harus diisi!";
    status.style.color = "red";
    return;
  }

  database.ref("data_siswa").once("value")
    .then(snapshot => {
      let found = false;
      let userKey = "";
      let userData = null;

      snapshot.forEach(childSnapshot => {
        let data = childSnapshot.val();
        if (data.username === username && data.password === password) {
          found = true;
          userKey = childSnapshot.key;
          currentUsername = userKey; // Simpan username saat ini
          userData = data;
        }
      });

      if (found) {
        // Ambil semua nilai yang terkait dengan user ini
        let nilaiText = `Nama : ${username}\n`;
        Object.keys(userData).forEach(key => {
          if (key.startsWith("nilai_")) {
            nilaiText += `${key}: ${userData[key] || 0}\n`;
          }
        });

        status.innerText = nilaiText;
        status.style.color = "green";
        document.getElementById("examSection").classList.remove("hidden");
      } else {
        status.innerText = "Belum Terdaftar atau Password Salah!";
        status.style.color = "red";
      }
    })
    .catch(error => {
      console.error("Error saat mengambil data:", error);
      status.innerText = "Terjadi kesalahan, coba lagi!";
      status.style.color = "red";
    });
}

function bukaSoal() {
  let jenisSoal = document.getElementById("jenisSoal").value;
  let soalContainer = document.getElementById("soalContainer");
  let soalList = document.getElementById("soalList");

  let nilaiField = `nilai_${jenisSoal}`;
  database.ref(`data_siswa/${currentUsername}/${nilaiField}`).once("value")
    .then(nilaiSnapshot => {
      let nilai = nilaiSnapshot.val() || 0;
      let jumlahSoal = (nilai >= 50) ? 10 : 5;

      return database.ref(`soal/${jenisSoal}`).once("value")
        .then(soalSnapshot => {
          return { jumlahSoal, soalSnapshot };
        });
    })
    .then(({ jumlahSoal, soalSnapshot }) => {
      if (!soalSnapshot.exists()) {
        alert("Soal tidak ditemukan di Firebase!");
        return;
      }

      let soalArray = [];
      soalSnapshot.forEach(childSnapshot => {
        let soalData = childSnapshot.val();
        if (soalData.pertanyaan && Array.isArray(soalData.pilihan)) {
          soalArray.push(soalData);
        } else {
          console.error("Format soal salah:", soalData);
        }
      });

      if (soalArray.length < jumlahSoal) {
        alert(`Jumlah soal tidak cukup! Hanya ada ${soalArray.length} soal.`);
        return;
      }

      let soalTerpilih = soalArray.sort(() => 0.5 - Math.random()).slice(0, jumlahSoal);

      soalList.innerHTML = "";
      soalTerpilih.forEach((soal, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
          <p>${index + 1}. ${soal.pertanyaan}</p>
          ${soal.pilihan.map((opsi, i) => `
            <input type="checkbox" name="soal${index}" id="soal${index}_opsi${i}" value="${opsi.benar}">
            <label for="soal${index}_opsi${i}">${opsi.teks}</label><br>
          `).join("")}
        `;
        soalList.appendChild(div);
      });

      soalContainer.style.display = "block";
      if (window.MathJax) {
        MathJax.typeset();
      }
    })
    .catch(error => {
      console.error("Error mengambil soal:", error);
      alert("Terjadi kesalahan saat mengambil soal!");
    });
}

function cekNilai() {
  let soalList = document.getElementById("soalList").children;
  let skor = 0;

  for (let i = 0; i < soalList.length; i++) {
    let checkboxes = soalList[i].querySelectorAll("input[type='checkbox']");
    let benar = 0, salah = 0;

    checkboxes.forEach(box => {
      if (box.checked && box.value === "true") benar++;
      if (box.checked && box.value === "false") salah++;
    });

    if (benar > 0 && salah === 0) skor++;
  }

  let totalSkor = skor * 10;
  document.getElementById("hasilSkor").innerText = "Skor: " + totalSkor;

  bukaSoal();
}

function kirimSkor() {
  let jenisSoal = document.getElementById("jenisSoal").value;
  let nilaiField = `nilai_${jenisSoal}`;
  let skorText = document.getElementById("hasilSkor").innerText;
  let skor = skorText.split(": ")[1];

  if (!skor) {
    alert("Cek nilai skor dulu!");
    return;
  }

  database.ref(`data_siswa/${currentUsername}/${nilaiField}`).set(skor)
    .then(() => {
      alert(`Nilai berhasil dikirim ke ${nilaiField}!`);

      // Ambil ulang data pengguna untuk update tampilan
      return database.ref(`data_siswa/${currentUsername}`).once("value");
    })
    .then(snapshot => {
      let userData = snapshot.val();
      if (!userData) return;

      // Perbarui tampilan status dengan nilai terbaru
      let status = document.getElementById("statusfire");
      let nilaiText = `Nama: ${userData.username}\n`;
      Object.keys(userData).forEach(key => {
        if (key.startsWith("nilai_")) {
          nilaiText += `${key}: ${userData[key] || 0}\n`;
        }
      });

      status.innerText = nilaiText;
      status.style.color = "green";
    })
    .catch(error => {
      console.error("Error menyimpan nilai atau memperbarui tampilan:", error);
    });
}

document.getElementById("btnBukaSoal").addEventListener("click", bukaSoal);
document.getElementById("btnKirimSkor").addEventListener("click", kirimSkor);