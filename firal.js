  
    const firebaseConfig = {
      apiKey: "AIzaSyCu4GQa-EOaPhpQP_y_QcsJxs05adQU2-M",
      authDomain: "math314-app.firebaseapp.com",
      databaseURL: "https://math314-app-default-rtdb.firebaseio.com",
      projectId: "math314-app",
      storageBucket: "math314-app.appspot.com",
      messagingSenderId: "9019551034",
      appId: "1:9019551034:web:de0c5e2b8b20c18ca0b403",
      measurementId: "G-VWYDTY9LF6"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.database();

    let currentUID = null;
    let currentJenis = "";
    let currentSkor = 0;
    let nilaiVisible = false;
 
 
    
function register() {
  const username = regUsername.value.trim();
  const email = regEmail.value.trim();
  const password = regPassword.value.trim();

  if (!username || !email || !password) {
    output.innerText = "Lengkapi semua kolom!";
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      const uid = cred.user.uid;
      return db.ref('data_siswa/' + uid).set({
        username,
        email,
        password,
        approved: false, // Tambahkan ini
        tanggal: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
        nilai: { peluang: 0, lingkaran: 0, regresi: 0 },
        total_nilai: 0
      }).then(() => db.ref('usernames/' + username).set(uid));
    })
    .then(() => {
      output.innerText = "Registrasi berhasil!";
    })
    .catch(err => {
      output.innerText = "Error: " + err.message;
    });
}


function login() {
  const username = loginUsername.value.trim();
  const password = loginPassword.value.trim();

  if (!username || !password) {
    output.innerText = "Masukkan username dan password!";
    return;
  }

  db.ref('usernames/' + username).once('value')
    .then(snapshot => {
      const uid = snapshot.val();
      if (!uid) throw new Error("Username tidak ditemukan!");
      currentUID = uid;

      return db.ref('data_siswa/' + uid).once('value');
    })
    .then(data => {
      const userData = data.val();
      if (!userData || userData.password !== password) {
        throw new Error("Password salah!");
      }

      return auth.signInWithEmailAndPassword(userData.email, password)
        .then(() => {
          // Cek apakah user disetujui
          if (userData.approved === true) {
            output.innerText = `Login berhasil! Selamat datang, ${username}\nStatus: Disetujui`;
            document.getElementById("formContainer").style.display = "none";
             document.getElementById("soalContainer").style.display = "block";
            document.getElementById("leaderboardContainer").innerHTML = "";
         // Hanya jika disetujui
          } else {
            throw new Error("Akun Anda belum disetujui oleh admin.");
          }
        });
    })
    .catch(err => {
      output.innerText = "Login gagal: " + err.message;
    });
}

    function mulaiSoal() {
      const jenis = document.getElementById("jenisSoal").value;
      currentJenis = jenis;
      db.ref('/soal/' + jenis).once('value').then(snapshot => {
        const data = snapshot.val();
        const container = document.getElementById("tampilkanSoal");
        container.innerHTML = `<h3>Soal ${jenis.toUpperCase()}</h3>`;
        let index = 1;
        currentSkor = 0;

        for (let kunci in data) {
          const soal = data[kunci];
          container.innerHTML += `
            <div id="soal${index}">
              <p><strong>${soal.pertanyaan}</strong></p>
              ${soal.pilihan.map((pil, i) => `
                <label>
                  <input type="checkbox" data-benar="${pil.benar}" onchange="cekJawaban(this)">
                  ${pil.teks}
                </label><br>`).join('')}
            </div><hr>`;
          index++;
        }

        container.innerHTML += `
          <button onclick="tampilkanSkor()">Skor</button>
          <button onclick="simpanSkor()">Simpan</button>
          <p id="skorOutput"></p>
        `;
      });
    }

    function cekJawaban(checkbox) {
      if (checkbox.checked) {
        if (checkbox.getAttribute("data-benar") === "true") currentSkor++;
        else currentSkor--;
      } else {
        if (checkbox.getAttribute("data-benar") === "true") currentSkor--;
        else currentSkor++;
      }
    }

    function tampilkanSkor() {
      document.getElementById("skorOutput").innerText = `Skor sementara: ${currentSkor}`;
    }

    function simpanSkor() {
      if (!currentUID || !currentJenis) return;

      db.ref('data_siswa/' + currentUID).once('value').then(snapshot => {
        const data = snapshot.val();
        const nilaiSebelumnya = data.nilai || {};
        nilaiSebelumnya[currentJenis] = currentSkor;
        const total = Object.values(nilaiSebelumnya).reduce((a, b) => a + b, 0);

        return db.ref('data_siswa/' + currentUID).update({
          nilai: nilaiSebelumnya,
          total_nilai: total
        });
      }).then(() => {
        output.innerText = "Skor berhasil disimpan!";
      }).catch(err => {
        output.innerText = "Gagal menyimpan skor: " + err.message;
      });
    }

    function logout() {
      auth.signOut().then(() => {
        currentUID = null;
        currentJenis = "";
        currentSkor = 0;
        output.innerText = "Anda telah logout.";
        document.getElementById("soalContainer").style.display = "none";
        document.getElementById("formContainer").style.display = "block";
        document.getElementById("tampilkanSoal").innerHTML = "";
        document.getElementById("nilaiUser").style.display = "none";
        nilaiVisible = false;
        loginUsername.value = "";
        loginPassword.value = "";
        tampilkanLeaderboard();
      }).catch(err => {
        output.innerText = "Logout gagal: " + err.message;
      });
    }

    function toggleNilai() {
      const nilaiDiv = document.getElementById("nilaiUser");
      const btn = document.getElementById("nilaiToggleBtn");

      if (!currentUID) return;

      if (nilaiVisible) {
        nilaiDiv.style.display = "none";
        btn.innerText = "Tampilkan Nilai";
        nilaiVisible = false;
      } else {
        db.ref('data_siswa/' + currentUID).once('value').then(snapshot => {
          const data = snapshot.val();
          const nilai = data.nilai || {};
          nilaiDiv.innerHTML = `
            <h4>Nilai Anda:</h4>
            <ul>
              <li>Peluang: ${nilai.peluang || 0}</li>
              <li>Lingkaran: ${nilai.lingkaran || 0}</li>
              <li>Regresi: ${nilai.regresi || 0}</li>
              <li><strong>Total: ${data.total_nilai || 0}</strong></li>
            </ul>
          `;
          nilaiDiv.style.display = "block";
          btn.innerText = "Sembunyikan Nilai";
          nilaiVisible = true;
        });
      }
    }

    function tampilkanLeaderboard() {
      db.ref('data_siswa').orderByChild('total_nilai').limitToLast(10).once('value')
        .then(snapshot => {
          const data = [];
          snapshot.forEach(child => {
            data.push(child.val());
          });

          data.reverse();

          let html = "<h3>Peringkat (Top 10)</h3><ol>";
          data.forEach(user => {
            html += `<li>${user.username} - ${user.total_nilai}</li>`;
          });
          html += "</ol>";

          document.getElementById("leaderboardContainer").innerHTML = html;
        });
    }

  
    