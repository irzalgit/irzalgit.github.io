
  var questions = [];


   

  function generateQuestionsA() {
    clearQuestions();
    var aValues = [2, 3];
    var bValues = [-2, -4, -5];
    var cValues = [5, 3, 2];
    var dValues = [10, 12, 16];
    var eValues = [4, 5,6];
     var fValues = [8, 12,10];
      var gValues = [24, 25,30];
    
    

    for (var i = 1; i <= 8; i++) {
      var a = aValues[Math.floor(Math.random() * aValues.length)];
      var b = bValues[Math.floor(Math.random() * bValues.length)];
      var c = cValues[Math.floor(Math.random() * cValues.length)];
      var d = dValues[Math.floor(Math.random() * dValues.length)];
  var e = eValues[Math.floor(Math.random() * eValues.length)];
   var f = fValues[Math.floor(Math.random() * fValues.length)];
   var g = gValues[Math.floor(Math.random() * gValues.length)];
  
  
  
  
  
  
      var question = {};
      var equation, correctAnswer;

      if (i === 1) {
        equation = "x = " + a + " + (" + b + ")";
        correctAnswer = a + b;
      } else if (i === 2) {
        equation = "x = " + c + " - (" + d + ")";
        correctAnswer = c - d;
      } else if (i === 3) {
        equation = "x = -(" + a + ") + " + c;
        correctAnswer = -a + c;
      } else if (i === 4) {
        equation = "x = -(" + d + ") - (" + b + ")";
        correctAnswer = -d - b;
      }else if (i === 5) {
        equation = "Suku ke " + a + " dari barisan aritmatika adalah  " + f + ", jika suku ke "+e+" adalah "+g+", maka beda b=? adalah " ;
        correctAnswer = (g-f)/(e-a);
      }else if (i === 6) {
        equation = "Suku ke " + a + " dari barisan aritmatika adalah  " + f + ", jika suku ke "+e+" adalah "+g+", maka suku pertama a=? adalah " ;
        correctAnswer = f-(a-1)*(g-f)/(e-a);
      }else if (i === 7) {
        equation = "Suku ke " + a + " dari barisan aritmatika adalah  " + f + ", jika suku ke "+e+" adalah "+g+", maka suku ke 10  adalah " ;
        correctAnswer = f-(a-1)*(g-f)/(e-a)+9*(g-f)/(e-a);
      }else if (i === 8) {
        equation = "Suku ke " + a + " dari barisan aritmatika adalah  " + f + ", jika suku ke "+e+" adalah "+g+", maka jumlah 10 suku pertama  adalah " ;
        correctAnswer =5*(2*(f-(a-1)*(g-f)/(e-a))+9*(g-f)/(e-a));
      }




      var options = generateOptions(correctAnswer);

      question.equation = equation;
      question.options = options;
      question.correctAnswer = correctAnswer;

      questions.push(question);
    }

    displayQuestions();
    enableRadioButtons();
  }

  function generateOptions(correctAnswer) {
    var options = [correctAnswer];
    while (options.length < 4) {
      var randomOption = Math.floor(Math.random() * 50) - 25; // Generate random numbers near the correct answer
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }
    shuffleArray(options);
    return options;
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

function displayQuestions() {
    var container = document.getElementById("questions-container");
    container.innerHTML = "";
    questions.forEach(function(question, index) {
      var questionElement = document.createElement("div");
      questionElement.classList.add("question");
      questionElement.innerHTML = `
        <p>${question.equation}</p>
<form id="form${index}" style="padding:5px" >
          ${question.options.map((option, i) => `
            <input type="radio" name="answer${index}" value="${i}">
            <label>${option}</label><br>
          `).join('')}
        </form>
      `;
      container.appendChild(questionElement);
    });
  }

  function clearQuestions() {
    questions = [];
  }
//jalan
  function checkAnswers() {
    var correctCount = 0;
    questions.forEach(function(question, index) {
      var selectedAnswer = document.querySelector(`input[name="answer${index}"]:checked`);
      if (selectedAnswer) {
        var selectedOption = question.options[selectedAnswer.value];
        if (selectedOption === question.correctAnswer) {
          correctCount+=10;
        }
      }
    });
//document.getElementById('score0').innerText = `Skor ALJABAR: ${correctCount}`;
 
score0.innerHTML=correctCount;
;

if (correctCount==80){

   // Cek apakah variabel nilai sudah ada di dalam localStorage
            if(localStorage.getItem('nil0')) {
                // Jika sudah ada, tambahkan nilai dengan 40
                var nilai = parseInt(localStorage.getItem('nil0')) + 80;
                // Simpan nilai yang baru ke dalam localStorage
                localStorage.setItem('nil0', nilai);
            } else {
                // Jika variabel nilai belum ada, atur nilainya menjadi 0
                localStorage.setItem('nil0', 0);
            }
juduln0.innerHTML=nil0;
}


    disableRadioButtons();
  }

  function disableRadioButtons() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
      radioButton.disabled = true;
    });
  }

  function enableRadioButtons() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
      radioButton.disabled = false;
    });
  }

