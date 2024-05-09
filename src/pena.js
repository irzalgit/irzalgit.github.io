
 
  var questions = [];


   

  function generateQuestionsA() {
    clearQuestions();
    var aValues = [2, 3 ,4];
    var bValues = [-2, -4, -5];
    var cValues = [5, 3, 2];
    var dValues = [10, 12, 16];
    var eValues = [5,6,8,7];
     var fValues = [8, 12,10];
      var gValues = [24, 25,30];
      var hValues = [4,8,16,12];
    
    var kValues = [20,30,40,50];
    var lValues = [6,9,12,15,18];
 var mValues = [60,65,75,80,85];
 
var nValues = [-2,2,4,7];
 
    for (var i = 1; i <= 17; i++) {
      var a = aValues[Math.floor(Math.random() * aValues.length)];
      var b = bValues[Math.floor(Math.random() * bValues.length)];
      var c = cValues[Math.floor(Math.random() * cValues.length)];
      var d = dValues[Math.floor(Math.random() * dValues.length)];
  var e = eValues[Math.floor(Math.random() * eValues.length)];
   var f = fValues[Math.floor(Math.random() * fValues.length)];
   var g = gValues[Math.floor(Math.random() * gValues.length)];
  
    var h = hValues[Math.floor(Math.random() * hValues.length)];
  
  var k = kValues[Math.floor(Math.random() * kValues.length)];
   var l = lValues[Math.floor(Math.random() * lValues.length)];
  
  var m = mValues[Math.floor(Math.random() * mValues.length)];
  
    var n = nValues[Math.floor(Math.random() * nValues.length)];
  
  
      var question = {};
      var equation, correctAnswer;

      if (i === 1) {
        equation = "1.Hitung nilai x dari <br>x = " + a + " + (" + b + ")";
        correctAnswer = a + b;
      } else if (i === 2) {
        equation = "2.Hitung nilai x dari <br>x = " + c + " - (" + d + ")";
        correctAnswer = c - d;
      } else if (i === 3) {
        equation = "3.Hitung nilai x dari <br>x = -(" + a + ") + (" + c+")";
        correctAnswer = -a + c;
      } else if (i === 4) {
        equation = "4.Hitung nilai a dari <br>a =("+b+")(" + d + ") - ("+c+")(" + b + ")";
        correctAnswer = b*d - c*b;
      } else if (i === 5) {
        equation = "5.Hitung nilai a dari <br>a= -(" + d + ") - (" + b + ") x (" + b + ")    ";
        correctAnswer = -d - b*b;
      } else if (i === 6) {
        equation = "6.Hitung nilai a dari <br>a= -((" + d + ") - (" + b + ")) x (" + a + ")    ";
        correctAnswer = -(d - b)*a;
      }else if (i === 7) {
        equation = "7.Hitung nilai a dari <br>2a= -(-(" + d + ") - (" + b + ")) x (" + b + ")    ";
        correctAnswer = -(-d - b)*b/2;
       }else if (i === 8) {
        equation = "8.Hitung x jika x/"+l+"=2/3" ;
        correctAnswer = (2/3)*l;
       } else if (i === 9) {
        equation = "9.Hitung n jika 30 =2 +(n-1)("+n+")" ;
        correctAnswer = 1+(28/n);
        
      }else if (i === 10) {
        equation = "10.Perbandingan a:b:c=2:3:5. jika rata rata nya "+k+" maka nilai a  adalah " ;
        correctAnswer = 0.6*k;
        }else if (i === 11) {
        equation = "11. Lima tahun yang  lalu perbandingan umur ayah  dan ibu adalah 3 :2 , jika jumlah umur keduanya sekarang "+m+" , umur ayah adalah " ;
        correctAnswer =5+(3/5)*(m-10);
      }else if (i === 12) {
        equation = "12.Suku ke " + a + " dari barisan aritmatika adalah  " + f + ", jika suku ke "+e+" adalah "+g+", maka suku ke 10  adalah " ;
        correctAnswer = f-(a-1)*(g-f)/(e-a)+9*(g-f)/(e-a);
      }else if (i === 13) {
        equation = "13.Suku ke 1 dari barisan aritmatika adalah  " + f + ", jika b="+b+"  maka suku ke 10 adalah " ;
        correctAnswer =9*b +f;
      }else if (i === 14) {
        equation = "14.Suku ke 1 dari barisan geometri adalah  "+a+" , jika rasio r= 2, maka suku ke 5 adalah " ;
        correctAnswer =Math.pow(2,4)*(a);
      }else if (i === 15) {
        equation = "15.Mula mula tinggi pohon "+h+" cm jika setiap hari pertumbuhannya 50% maka hari ke 5 tinggimya  adalah " ;
        correctAnswer =Math.pow(1.5,4)*(h);
      }else if (i === 16) {
        equation = "16.Tentukan x dari <br>&#8730;2x="+b+"&#8730;2+"+e+"&#8730;2   " ;
        correctAnswer =Math.pow((b+e),2);
      }else if (i === 17) {
        equation = "17.&#8730(k+2) -x=0 jika nilai x = "+a+" maka k = ? " ;
        correctAnswer =Math.pow(a,2)-2;
      }
      
      
      
      
      
      
      
      
      
      
      

      var options = generateOptions(correctAnswer);

      question.equation = equation;
      question.options = options;
      question.correctAnswer = correctAnswer;

      questions.push(question);
    }

    displayQuestions();
    tombolcekon();
    enableRadioButtons();
    
  }

  function generateOptions(correctAnswer) {
    var options = [correctAnswer];
    while (options.length < 4) {
      var randomOption = Math.floor(Math.random() * 8)+options[0]; // Generate random numbers near the correct answer
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


if (correctCount>=150){
    var audio = new Audio('./vidio/suara1.mp3');
    audio.play();
  

   // Cek apakah variabel nilai sudah ada di dalam localStorage
            if(localStorage.getItem('nil0')) {
                // Jika sudah ada, tambahkan nilai dengan 40
                var nilai = parseInt(localStorage.getItem('nil0')) *0;
                // Simpan nilai yang baru ke dalam localStorage
                localStorage.setItem('nil0', 150);
            } else {
                // Jika variabel nilai belum ada, atur nilainya menjadi 0
                localStorage.setItem('nil0', 0);
            }
juduln0.innerHTML=nil0;
}

tombolcekoff();
    disableRadioButtons();
    
  }

  function disableRadioButtons() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
      radioButton.disabled = true;
      
      
      }
     
      
      
      );
  }

  function enableRadioButtons() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
      radioButton.disabled = false;
    });
  }

function tombolcekoff() {
  var tombol = document.getElementById("tombolcek");
  
  tombol.classList.add("hidden");
  
}
function tombolcekon() {
  var tombol = document.getElementById("tombolcek");
   if (tombol.classList.contains("hidden")) {
    
    tombol.classList.remove("hidden");
    
   }
}



function cekSkor() {
  var skor = document.getElementById("score0").value;
  if (skor == 100) {
    var audio = new Audio('./vidio/suara1.mp3');
    audio.play();
  }
}