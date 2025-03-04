const soalPeluang = [
    { soal: '2/5 dari 20 siswa adalah?', pilihan: ['<math><mfrac><mn>1</mn><mn>2</mn></mfrac></math>',
                '<math><mtext>peluang</mtext><mfrac><mn>1</mn><mn>3</mn></mfrac></math>',
                '<math><mfrac><mn>1</mn><mn>6</mn></mfrac></math>',
                '<math><mfrac><mn>2</mn><mn>3</mn></mfrac></math>',
                '<math><mfrac><mn>5</mn><mn>6</mn></mfrac></math>'
            ],benar: [0, 3] },
    { soal: 'Peluang muncul angka genap saat melempar dadu?', pilihan: ["1/2", "1/3", "1/6", "2/3", "5/6"], benar: [0, 3] },
    { soal: 'Dalam 1 kotak berisi 3 bola merah dan 2 bola biru, peluang mengambil bola merah?', pilihan: ["3/5", "2/5", "1/5", "4/5", "5/5"], benar: [0] },
    { soal: 'Jika dua koin dilempar, peluang mendapatkan satu angka dan satu gambar?', pilihan: ["1/4", "1/2", "3/4", "2/3", "5/6"], benar: [1, 2] },
     { soal: 'Dalam sebuah kotak terdapat 5 kelerang berwarna merah dan 4 kelereng berwarna biru, jika diambil 1 kelereng dari kotak ini maka:', pilihan: ["<mtext>peluang warna merah adalah:</mtext>5/9", "<mtext>peluang warna biru   adalah:</mtext>4/9", "<mtext>peluang warna merah adalah:</mtext>3/4", "<mtext>peluang warna merah adalah:</mtext>2/3", "<mtext>peluang warna merah adalah:</mtext>5/6"], benar: [0, 1] },
    { soal: 'Peluang mendapatkan kartu hati dalam satu dek 52 kartu?', pilihan: ["13/52", "1/4", "3/4", "1/2", "5/6"], benar: [0, 1] }
];

const soalDeret = [
    { soal: 'Suku ke-4 dari barisan 3, 6, 9, ... adalah?', pilihan: ["9", "12", "15", "18", "21"], benar: [2] },
    { soal: 'Jumlah 5 suku pertama dari deret 2, 4, 6, 8, ...?', pilihan: ["10", "20", "30", "40", "50"], benar: [2] },
    { soal: 'Suku ke-6 dari barisan 5, 10, 15, ... adalah?', pilihan: ["20", "25", "30", "35", "40"], benar: [1] },
    { soal: 'Suku pertama dan beda 2 dari barisan aritmetika, suku ke-7?', pilihan: ["12", "14", "16", "18", "20"], benar: [3] },
    { soal: 'Jumlah 4 suku pertama dari deret 7, 14, 21, ...?', pilihan: ["14", "28", "42", "56", "70"], benar: [3] }
];

function getRandomSoal(soalArray, count) {
    let shuffled = [...soalArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function renderQuiz(containerId, soalArray, soalType) {
    const quizContainer = document.getElementById(containerId);
    quizContainer.innerHTML = "";
    let currentSoal = getRandomSoal(soalArray, 5);
    
    currentSoal.forEach((soal, index) => {
        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        let questionText = document.createElement("p");
        questionText.innerHTML = `(${index + 1}) ${soal.soal}`;
        questionDiv.appendChild(questionText);

        let optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        soal.pilihan.forEach((option, i) => {
            let label = document.createElement("label");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = i;
            checkbox.name = `${soalType}-${index}`;
            label.appendChild(checkbox);
            label.innerHTML += ` ${option}`;
            optionsDiv.appendChild(label);
            optionsDiv.appendChild(document.createElement("br"));
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });

    return currentSoal;
}

let currentSoalPeluang = renderQuiz("quiz-peluang", soalPeluang, "peluang");
let currentSoalDeret = renderQuiz("quiz-deret", soalDeret, "deret");

function cekNilai(soalArray, containerId, soalType) {
    let correctCount = 0;
    let questions = document.querySelectorAll(`#${containerId} .question`);

    questions.forEach((div, index) => {
        let checkboxes = div.querySelectorAll("input[type='checkbox']");
        let selectedAnswers = [...checkboxes].filter(cb => cb.checked).map(cb => parseInt(cb.value));
        let correctAnswers = soalArray[index].benar;

        if (selectedAnswers.length === correctAnswers.length && selectedAnswers.every(val => correctAnswers.includes(val))) {
            correctCount++;
        }
    });

    let score = correctCount * 10;
    document.getElementById(`score-${soalType}`).innerText = `Skor Anda: ${score}`;

    updateHighScore(soalType, score);

    setTimeout(() => {
        if (soalType === "peluang") {
            currentSoalPeluang = renderQuiz("quiz-peluang", soalPeluang, "peluang");
        } else {
            currentSoalDeret = renderQuiz("quiz-deret", soalDeret, "deret");
        }
    }, 2000);
}

function updateHighScore(soalType, score) {
    let highScoreKey = `highscore-${soalType}`;
    let highScore = localStorage.getItem(highScoreKey);

    if (!highScore || score > parseInt(highScore)) {
        localStorage.setItem(highScoreKey, score);
        highScore = score;
    }

    document.getElementById(`highscore-${soalType}`).innerText = `Skor Tertinggi: ${highScore}`;
}

function loadHighScores() {
    let highScorePeluang = localStorage.getItem("highscore-peluang") || 0;
    let highScoreDeret = localStorage.getItem("highscore-deret") || 0;

    document.getElementById("highscore-peluang").innerText = `Skor Tertinggi: ${highScorePeluang}`;
    document.getElementById("highscore-deret").innerText = `Skor Tertinggi: ${highScoreDeret}`;
}

function cekNilaiPeluang() {
    cekNilai(currentSoalPeluang, "quiz-peluang", "peluang");
}

function cekNilaiDeret() {
    cekNilai(currentSoalDeret, "quiz-deret", "deret");
}

loadHighScores();