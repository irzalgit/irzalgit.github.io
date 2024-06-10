
 

 function generateQuestionsA() {
    clearQuestions();
    var aValues = [2,3,4];
    var aaValues = [2,-2,3,-3,4,-4];
    var bValues = [-2, -4, -5];
    var cValues = [5,3,2,6,8];
    var dValues = [10, 12, 16];
    var eValues = [5,6,8,7];
    var fValues = [8,12,10];
    var gValues = [24,25,30];
    var hValues = [4,8,16,12];
    var kValues = [20,30,40,50];
    var lValues = [6,9,12,15,18];
    var mValues = [60,65,75,80,85];
    var nValues = [-2,2,4,7];
    var vValues = [-2,-3,-4];
    var wValues = [-1,-5,-3];
    var qValues = [1,4,9,16,25];
    var sValues = [0,30,45,60,90,120,150,135];
    var dsValues = [0.5,0.5,0.75,1.25,1.50];
    var pdsValues = [1/2,3/2];
     var rdsValues = [5,10];
      var ddValues = [1,2,3,4,5,6];
    var dddValues = [1,2,3,4,5,6];
    var tpValues = [1,2,3];
    var svValues = [10,100,1000];
    var xxValues = [2,3,4];
    var yyValues = [4,5,6];
    
    for (var i = 1; i <= 50; i++) {
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
   var v = vValues[Math.floor(Math.random() * vValues.length)];
    var w = wValues[Math.floor(Math.random() * wValues.length)];
    var s = sValues[Math.floor(Math.random() * sValues.length)];
    var q = qValues[Math.floor(Math.random() * qValues.length)];
    var ds = dsValues[Math.floor(Math.random() * dsValues.length)];
    var pds = pdsValues[Math.floor(Math.random() * pdsValues.length)];
     var rds = rdsValues[Math.floor(Math.random() * rdsValues.length)];
     var aa = aaValues[Math.floor(Math.random() * aaValues.length)];
      var dd = ddValues[Math.floor(Math.random() * ddValues.length)];
       var ddd = dddValues[Math.floor(Math.random() * dddValues.length)];
       
        var tp = tpValues[Math.floor(Math.random() * tpValues.length)];
        var sv = svValues[Math.floor(Math.random() * svValues.length)];
     var xx = xxValues[Math.floor(Math.random() * xxValues.length)];
      var yy = yyValues[Math.floor(Math.random() * yyValues.length)];
      var question= {};
      var equation, correctAnswer;
 
      if (i === 1) {
         svg= `<svg xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="50" x2="100" y2="50" stroke="black" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="black" />
                <circle cx="${50 + a * 10}" cy="${50 - b * 10}" r="3" fill="red" />
                <text x="${50 + a * 10}" y="${50 - b * 10 - 5}" font-size="12" text-anchor="middle">P(${3},${4})</text>
              </svg>`;
        equation = "1.Hitung nilai x dari <br>x = " + a + " + (" + b + ")  ";
        correctAnswer = a + b;
      } else if (i === 2) {
          
        svg[2].svg= createSVG(yy, xx);     
        equation = "2.Hitung nilai x dari <br>x = " + c + " - (" + d + ")";
        correctAnswer = c - d;
      } else if (i === 3) {
       svg= createSVG(4, 2);     
        equation = "3.Hitung nilai x dari <br>x = -(" + a + ") + (" + c+")";
        correctAnswer = -a + c;
      } else if (i === 4) {
          svg= createSVG(2, 2);     
        equation = "4.Hitung nilai a dari <br>a =("+b+")(" + d + ") - ("+c+")(" + b + ")";
        correctAnswer = b*d - c*b;
      } else if (i === 5) {
        equation = "5.Hitung nilai a dari a="+ds+"  +<math><mfrac><mi><mn>"+aa+"</mn></mi><mi><mn>"+rds+"</mn></mi></mfrac></math> +"+k+"%";
        correctAnswer = ds+(aa/rds)+k/100;
      } else if (i === 6) {
        equation = "6.Hitung nilai a dari <br>a= -((" + d + ") - (" + b + ")) x (" + a + ")    ";
        correctAnswer = -(d - b)*a;
      }else if (i === 7) {
        equation = "7.Hitung nilai a dari <br>2a= -(-(" + d + ") - (" + b + ")) x (" + b + ")    ";
        correctAnswer = -(-d - b)*b/2;
       }else if (i === 8) {
        equation = "8.Hitung x jika <math><mfrac><mi><mn>X</mn></mi><mi><mn>3</mn></mi></mfrac></math> =<math><mfrac><mi><mn>X</mn></mi><mi><mn>"+l+"</mn></mi></mfrac><mi>+</mi><mn>1</mn></math>" ;
        correctAnswer = (3/(1-(3/l))).toFixed(1);
       } else if (i === 9) {
        equation = "9.Hitung n jika 30 =2 +(n-1)("+n+")" ;
        correctAnswer = 1+(28/n);
      }else if (i === 10) {
        equation = "10.Perbandingan a:b:c=2:3:5. jika rata rata nya "+k+" maka nilai a  adalah " ;
        correctAnswer = 0.6*k;
      } else if (i === 18) {
        equation = "18.Perhatikan persamaan linier yakni   <math><mfrac><mi><mn>"+a+"</mn></mi><mi><mn>"+c+"</mn></mi></mfrac></math>x=<math><mfrac><mi><mn>"+b+"</mn></mi><mi><mn>"+h+"</mn></mi></mfrac></math> maka nilai "+h+"x adalah "   ;
        correctAnswer = (b*c)/(a);
    }else if (i === 11) {
        equation = "11. Lima tahun yang  lalu perbandingan umur ayah  dan ibu adalah 3 :2 , jika jumlah umur keduanya sekarang "+m+" , umur ayah adalah " ;
        correctAnswer =5+(3/5)*(m-10);
      }else if (i === 12) {
        equation = "12.Suku ke " + a + " dari barisan aritmatika adalah  " + f + ", jika suku ke "+e+" adalah "+g+", maka suku ke 10  adalah " ;
        correctAnswer =parseInt( f-(a-1)*(g-f)/(e-a)+9*(g-f)/(e-a));
      }else if (i === 13) {
        equation = "13.Suku ke 1 dari barisan aritmatika adalah  " + f + ", jika b="+b+"  maka suku ke 10 adalah " ;
        correctAnswer =9*b +f;
      }else if (i === 14) {
        equation = "14.Suku ke 1 dari barisan geometri adalah  "+a+" , jika rasio r= 2, maka suku ke 5 adalah " ;
        correctAnswer =Math.pow(2,4)*(a);
      }else if (i === 15) {
        equation = "15.Mula mula tinggi pohon "+h+" cm jika setiap hari pertumbuhannya 50% maka hari ke 5 tingginya  adalah " ;
        correctAnswer =Math.pow(1.5,4)*(h);
      }else if (i === 16) {
        equation = "16.Tentukan x dari <br> x&#8730;2="+b+"&#8730;2+"+e+"&#8730;2   " ;
        correctAnswer =b+e;
      }else if (i === 17) {
        equation = "17.&#8730(k+2) -x=0 jika nilai x = "+a+" maka k = ? " ;
        correctAnswer =Math.pow(a,2)-2;
      }else if (i === 19) {
        equation = "19.Tentukan x jika  log "+e+" + log "+a+"  = log x " ;
        correctAnswer =a*e;
      }else if (i === 20) {
        equation = "20. Tentukan nilai x dari x= 10 log (<math><mfrac><mi><mn>10 <sup>"+f+"</sup></mn></mi><mi><mn>10<sup>"+b+"</sup></mn></mi></mfrac></math>)" ;
        correctAnswer =(f-b)*10;
      }else if (i === 21) {
        equation = "21.Jika x&#178 - y&#178  = "+d+"  dan x - y = 2 maka x + y adalah  " ;
        correctAnswer =d/2;
      }else if (i === 22) {
        equation = "22.Diberikan persamaam  y = x&#178 -("+a+")x -3= 0 maka jumlah akar2 nya adalah" ;
        correctAnswer = a;
      }else if (i === 23) {
        equation = "23.Hasil perkalian akar dari: (x"+v+")(x"+w+")=0 adalah";
        correctAnswer =w*v;
      }else if (i === 24) {
        equation = "24. Berapa besar "+k+"% dari "+e*100+"  " ;
        correctAnswer = k*e;
      }else if (i === 25) {
        //  equation="25";
         equation = "25. Tentukan nilai a dari a= <math><mfrac><mi><mn>"+a+"<sup>2</sup></mn></mi><mi><mn>4</mn></mi></mfrac></math>+<math><mfrac><mi><mn>"+(a+tp)+"<sup>2</sup></mn></mi><mi><mn>4</mn></mi></mfrac></math> +"+a+"  ";
        correctAnswer = (a*a + Math.pow(a+tp,2) +4*a)/4;
      }else if (i === 26) {
        equation = "26.Tentukan x dari persamaan 8<sup>x</sup>=2<sup>2x-"+a+"</sup>";
        correctAnswer =-a;
      }else if (i === 27) {
        equation = "27 . Fungsi eksponen berikut:  y=("+a+")<sup>x+1</sup>  akan memotong sumbu y = ?";
        correctAnswer =a;
      }else if (i === 28) {
        equation = "28.Hitung nilai x dari "+c+"(x-2)=(x+2) " ;
        correctAnswer =(+(2*c+2)/(c-1)).toFixed(1);
      }else if (i === 29) {
        equation = "29. Hitung  <mn>16</mn><sup>0</sup>+<mn>"+q+"</mn><sup><math><mfrac><mi><mn>3</mn></mi><mi><mn>2</mn></mi></mfrac></math></sup>" ;
        correctAnswer =Math.pow(q,1.5)+1;
      }else if (i === 30) {
         equation = "30.Jika persamaan lingkaran adalah  x&#178 + y&#178  = "+q+"  , maka jari2 lingkarannya adalah  " ;
        correctAnswer = parseFloat(Math.sqrt(q));
      }else if (i === 31) {
        equation = "31.Hitung nilai a dari a= <math><mfrac><mi><mn>"+a+"</mn></mi><mi><mn>5</mn></mi></mfrac></math> - <math><mfrac><mi><mn>"+c+"</mn></mi><mi><mn>5</mn></mi></mfrac></math> - <math><mfrac><mi><mn>"+b+"</mn></mi><mi><mn>5</mn></mi></mfrac></math> x 2" ;
        correctAnswer =(a-c-2*b)/5;
      }else if (i === 32) {
        equation = "32.Berapa besar "+k+"% x  "+e*100+" + <math><mfrac><mi><mn>"+a+"</mn></mi><mi><mn>"+c+"</mn></mi></mfrac></math> x "+e*15+"  " ;
        correctAnswer =a*e*15/c +k*e;
      }else if (i === 33) {
        equation = "33.Didalam sebuah kotak ada "+a+" buah kelereng biru dan "+c+" buah kelereng merah. Berapa % peluang memperoleh kelereng merah adalah  " ;
        correctAnswer =parseInt((c*100)/(a+c));
      }else if (i === 34) {
        equation = "34.Bapak Budi memiliki  2 sepeda dan 3 motor. Jika bepergian ia memakai  salah satu topi dari 4 topi,  "+tp+"  diantaranya berwarna kuning. Berapa peluang bapak Budi pergi dengan  sepeda dan topi kuning ? (%)" ;
        correctAnswer= 200*tp/20;
      }else if (i === 35) {
        equation = "35.Jika dari survey "+a+" dari "+sv+"   orang menyukai warna merah maka peluang (%) berjumpa orang yang memakai baju merah adalah "  ;
        correctAnswer =a*100/sv;
      }else if (i === 36) {
     equation = "36.Didalam kotak terdapat "+e+" buah angka . Jika diambil sebanyak "+a+" angka maka jumlah angka yang terbentuk adalah  " ;
        correctAnswer =faktorial(e)/faktorial(e-a);
      }else if (i === 37) {
        equation = "37.Diberikan data x:  "+a+","+f+" ,"+c+" ,"+e+" ,"+d+"   maka x rata rata adalah " ;
        correctAnswer =((a+f+c+d+e)/5).toFixed(2);
      }else if (i === 38) {
        equation = "38.Diberikan data x yaitu   "+(e-2)+","+(e)+" ,"+(e-3)+" ,"+(e+a)+" ,"+(e+a+1)+" median x adalah  ";
        correctAnswer =e;
      }else if (i === 39) {
        equation = "39.Diberikan data x yaitu   "+a+","+(a-1)+" ,"+a+" ,"+a+" ,"+(a+1)+" maka modus x  adalah   " ;
        correctAnswer =a;
      }else if (i === 40) {
        equation = "40.Diberikan data x yaitu   "+a+","+f+" ,"+c+"  maka simpangan rata rata x adalah   " ;
        correctAnswer = parseInt((
     Math.abs(parseFloat(f-(a+f+c)/3))
    +Math.abs(parseFloat(a-(f+f+c)/3))
    +Math.abs(parseFloat(c-(a+f+c)/3)))/3);
      }else if (i === 41) {
        equation = "41.Dalan segitiga siku perbandingan sisi depan dengan sisi samping adalah 2 : 3. Dengan menggunakan sudut segitiga ini berapa tinggi pohon jika jarak pohon "+k+"   m.";
        correctAnswer =(2/3)*k;
      }else if (i === 42) {
        equation = "42.Diberikan data x yaitu   "+a+","+f+" ,"+c+"  maka simpangan rata rata x adalah   " ;
        correctAnswer =parseFloat(((a-((a+f+c)/3))+(f-((a+f+c)/3))+(c-((a+f+c)/3)))/3);
      }else if (i === 43) {
        equation = "43.Tentukan nilai a pada persamaan<br> a=("+a+")*("+b+"):("+c+")  " ;
        correctAnswer =((a*b)/c);
      }else if (i === 44) {
        equation = "44.Tentukan nilai a pada persamaan<br> a=("+a+")/("+b+")x("+c+")  " ; ;
        correctAnswer =a/b*c;
      }else if (i === 45) {
        equation = "45.a=("+a+")("+b+")("+c+")+("+d+")  " ;
        correctAnswer =a*b*c+d;
      }else if (i === 46) {
        equation = "46.a= <mn>("+a+")</mn><sup>2</sup>+("+b+")" ;
        correctAnswer =parseFloat(((a-((a+f+c)/3))+(f-((a+f+c)/3))+(c-((a+f+c)/3)))/3);
      }else if (i === 47) {
        equation = "47a= ("+b+" )*<mn>("+a+")</mn><sup>3</sup>+("+c+" )" ;
        correctAnswer =parseFloat(((a-((a+f+c)/3))+(f-((a+f+c)/3))+(c-((a+f+c)/3)))/3);
      }else if (i === 48) {
        equation = "48.a= ("+b+" )*<mn>{("+a+")+("+c+" )}</mn><sup>3</sup>+("+c+" )" ;
        correctAnswer =parseFloat(((a-((a+f+c)/3))+(f-((a+f+c)/3))+(c-((a+f+c)/3)))/3);
      }else if (i === 49) {
        equation = "49.a= ("+b+" )*<mn>{("+a+")+("+c+" )}</mn><sup>3</sup>+("+c+" )*("+c+")"  ;
        correctAnswer =parseFloat(((a-((a+f+c)/3))+(f-((a+f+c)/3))+(c-((a+f+c)/3)))/3);
      }else if (i === 50) {
      equation = "50.a= ("+b+" )*<mn>{("+a+")+("+c+" )}</mn><sup>3</sup>+("+(c-1)+" )*("+c+")"  ;
        correctAnswer =parseFloat(((a-((a+f+c)/3))+(f-((a+f+c)/3))+(c-((a+f+c)/3)))/3);
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
 //untuk menghasilkan angka -1  3
  function generateRandomNumber() {
            const numbers = [-2,-1,1,2,3];
            const randomIndex = Math.floor(Math.random() * numbers.length);
            const randomNumber = number0s[randomIndex];
            document.getElementById('random-number').textContent = randomNumber;
        }
     function generateOptions(correctAnswer) {
     const numbers = [-2,-1,1,2,3];
            const randomIndex = Math.floor(Math.random() * numbers.length);
            const randomNumber = numbers[randomIndex];
    
    var options = [correctAnswer];
    while (options.length < 4) {
      var randomOption = Math.floor(Math.random() * 4)+randomNumber+options[0]; // Generate random numbers near the correct answer
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }
    shuffleArray(options);
    return options;
  }

 
  function generateOptionsxx(correctAnswer) {
    const numbers = [-2,-1,1,2];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    var options = [correctAnswer];
    while (options.length < 4) {
      var randomOption =  options[0]; // Generate random numbers near the correct answer
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
//<svg style="background-color:grey"> ${svg}</svg>
function displayQuestions() {
    var container = document.getElementById("questions-container");
    container.innerHTML = "";
    questions.forEach(function(question, index) {
      var questionElement = document.createElement("div");
      questionElement.classList.add("question");
      questionElement.innerHTML = `
      <div style=" background-color:wheat " class="text-black bg-green-400 border-1 rounded-3xl box-border  border-black p-2  ">
<p >${question.equation}</p>
<form id="form${index}" style=" padding:5px" >
          ${question.options.map((option, i) => `
            <input type="radio" name="answer${index}" value="${i}">
            <label>${option}</label><br>
          `).join('')}
        </form>
     </div> `;
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


if (correctCount>=parseInt(localStorage.getItem('nilz')) ){localStorage.setItem("nilz",correctCount);}

    


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
  if (skor >= 100) {
    var audio = new Audio('./vidio/suara1.mp3');
    audio.play();
  }
}
  function hitungFaktorial() {
            let angka = document.getElementById("angka").value;
            angka = parseInt(angka);
            if (isNaN(angka) || angka < 0) {
                document.getElementById("hasil").innerHTML = "Silakan masukkan angka bulat non-negatif.";
                return;
            }
            document.getElementById("hasil").innerHTML = "Faktorial dari " + angka + " adalah " + faktorial(angka);
        }

        function faktorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            return n * faktorial(n - 1);
        }
    //hp
       

    //hp
    
     function createSVG(a, b) {
      return `<svg xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="50" x2="100" y2="50" stroke="black" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="black" />
                <circle cx="${50 + a * 10}" cy="${50 - b * 10}" r="3" fill="red" />
                <text x="${50 + a * 10}" y="${50 - b * 10 - 5}" font-size="12" text-anchor="middle">P(${a},${b})</text>
              </svg>`;
    }

    
    
function kirimalj(){
    let poin=0;
      const jno3100=document.querySelector("#jno3100");
      const jno3101=document.querySelector("#jno3101");
      const jno3102=document.querySelector("#jno3102");
      const jno3103=document.querySelector("#jno3103");
      const jno3104=document.querySelector("#jno3104");
      
      const rno3100=document.querySelector("#rno3100");
      const rno3101=document.querySelector("#rno3101");
      const rno3102=document.querySelector("#rno3102");
      const rno3103=document.querySelector("#rno3103");
      const rno3104=document.querySelector("#rno3104");
      
      
const nilai3100=document.querySelector("#nilai3100");



    if (jno3100.checked) {
        poin=poin+10;
        response="ok";}
        else {response="x";
        }
        rno3100.innerHTML=response;
        
        if (jno3101.checked) {
        poin=poin+10;
        response="ok";}
        else {response="x";
        };
        rno3101.innerHTML=response;
        
        if (jno3102.checked) {
        poin=poin+10;
        response="ok";}
        else {response="x";
        };
        rno3102.innerHTML=response;
        
        if (jno3103.checked) {
        poin=poin+10;
        response="ok";}
        else {response="x";
        };
        rno3103.innerHTML=response;
        
        if (jno3104.checked) {
        poin=poin+10;
        response="ok";}
        else {response="x";
        };
        rno3104.innerHTML=response;
   


nilai3100.innerHTML=poin;
    
}

    
    


function kirim1() {
  let poin = 0;
  
  const jno31 = document.querySelector("#jno31");
  const jno32 = document.querySelector("#jno32");
  const jno33 = document.querySelector("#jno33");
  const jno34 = document.querySelector("#jno34");
  const jno35 = document.querySelector("#jno35");
  const jno36 = document.querySelector("#jno36");
  const jno37 = document.querySelector("#jno37");
  const jno38 = document.querySelector("#jno38");
  const jno39 = document.querySelector("#jno39");
  const jno40 = document.querySelector("#jno40");
  const jno411 = document.querySelector("#jno411");
  const jno421 = document.querySelector("#jno421");
  const jno431 = document.querySelector("#jno431");
  const jno441 = document.querySelector("#jno441");
  const jno451 = document.querySelector("#jno451");
  const jno461 = document.querySelector("#jno461");
  const jno471 = document.querySelector("#jno471");
  const jno481 = document.querySelector("#jno481");
  const jno491 = document.querySelector("#jno491");
  



  const jno50 = document.querySelector("#jno50");
  const jno51 = document.querySelector("#jno51");
  const jno52 = document.querySelector("#jno52");
  const jno53 = document.querySelector("#jno53");
  const jno54 = document.querySelector("#jno54");
  const jno55 = document.querySelector("#jno55");
  const jno56 = document.querySelector("#jno56");
  const jno57 = document.querySelector("#jno57");
  const jno58 = document.querySelector("#jno58");
  const jno59 = document.querySelector("#jno59");
  const jno60 = document.querySelector("#jno60");
  
  const jno611 = document.querySelector("#jno611");
  const jno621 = document.querySelector("#jno621");
  const jno631 = document.querySelector("#jno631");
  const jno641 = document.querySelector("#jno641");
  const jno651 = document.querySelector("#jno651");
  const jno661 = document.querySelector("#jno661");
  const jno671 = document.querySelector("#jno671");
  const jno681 = document.querySelector("#jno681");
  const jno691 = document.querySelector("#jno691");
  const jno692 = document.querySelector("#jno692");
  const nilai1=document.querySelector('#nilai1');
  
 
  
  if (jno31.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno31.innerHTML = response;

  if (jno32.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno32.innerHTML = response;

  if (jno33.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno33.innerHTML = response;

  if (jno34.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno34.innerHTML = response;

  if (jno35.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno35.innerHTML = response;

  if (jno36.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno36.innerHTML = response;

  if (jno37.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno37.innerHTML = response;

  if (jno38.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno38.innerHTML = response;

  if (jno39.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno39.innerHTML = response;

  if (jno40.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno40.innerHTML = response;

  if (jno411.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno411.innerHTML = response;

  if (jno421.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno421.innerHTML = response;

  if (jno431.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno431.innerHTML = response;

  if (jno441.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno441.innerHTML = response;

  if (jno451.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno451.innerHTML = response;

  if (jno461.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno461.innerHTML = response;

  if (jno471.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno471.innerHTML = response;

  if (jno481.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno481.innerHTML = response;

  if (jno491.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno491.innerHTML = response;

  if (jno50.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno50.innerHTML = response; 


  if (jno51.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno51.innerHTML = response;

  if (jno52.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno52.innerHTML = response;

  if (jno53.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno53.innerHTML = response;

  if (jno54.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno54.innerHTML = response;

  if (jno55.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno55.innerHTML = response;

  
  if (jno56.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno56.innerHTML = response;

  if (jno57.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno57.innerHTML = response;

  if (jno58.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno58.innerHTML = response;

  if (jno59.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno59.innerHTML = response;

  if (jno60.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno60.innerHTML = response;

  if (jno611.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno611.innerHTML = response;

  if (jno621.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno621.innerHTML = response;
  if (jno631.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno631.innerHTML = response;
  if (jno641.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno641.innerHTML = response;
  if (jno651.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno651.innerHTML = response;
  if (jno661.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno661.innerHTML = response;
  if (jno671.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno671.innerHTML = response;
  if (jno681.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno681.innerHTML = response;
  if (jno691.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno691.innerHTML = response;

  if (jno692.checked) {
    response = "";
    poin = poin + 10;
  } else {
    response = "";
  }
  rno692.innerHTML = response;
  nilai1.innerHTML = poin;
 
  


localStorage.setItem("nil1",poin);
juduln1.innerHTML=localStorage.getItem("nil1");




  const optionsno31 = document.getElementsByName("no31");
  for (let i = 0; i < optionsno31.length; i++) {
      optionsno31[i].checked = false;
  }
  const optionsno32 = document.getElementsByName("no32");
  for (let i = 0; i < optionsno32.length; i++) {
      optionsno32[i].checked = false;
  }
  const optionsno33 = document.getElementsByName("no33");
  for (let i = 0; i < optionsno33.length; i++) {
      optionsno33[i].checked = false;
  }
  const optionsno34 = document.getElementsByName("no34");
  for (let i = 0; i < optionsno34.length; i++) {
      optionsno34[i].checked = false;
  }

  const optionsno35 = document.getElementsByName("no35");
  for (let i = 0; i < optionsno35.length; i++) {
      optionsno35[i].checked = false;
  }

  const optionsno36 = document.getElementsByName("no36");
  for (let i = 0; i < optionsno36.length; i++) {
      optionsno36[i].checked = false;
  }
  const optionsno37 = document.getElementsByName("no37");
  for (let i = 0; i < optionsno37.length; i++) {
      optionsno37[i].checked = false;
  }
  const optionsno38 = document.getElementsByName("no38");
  for (let i = 0; i < optionsno38.length; i++) {
      optionsno38[i].checked = false;
  }
  const optionsno39 = document.getElementsByName("no39");
  for (let i = 0; i < optionsno39.length; i++) {
      optionsno39[i].checked = false;
  }

  const optionsno40 = document.getElementsByName("no40");
  for (let i = 0; i < optionsno40.length; i++) {
      optionsno40[i].checked = false;
  }
    const optionsno51 = document.getElementsByName("no51");
  for (let i = 0; i < optionsno51.length; i++) {
      optionsno51[i].checked = false;
  }
  const optionsno52 = document.getElementsByName("no52");
  for (let i = 0; i < optionsno52.length; i++) {
      optionsno52[i].checked = false;
  }
  const optionsno53 = document.getElementsByName("no53");
  for (let i = 0; i < optionsno53.length; i++) {
      optionsno53[i].checked = false;
  }
  const optionsno54 = document.getElementsByName("no54");
  for (let i = 0; i < optionsno54.length; i++) {
      optionsno54[i].checked = false;
  }

  const optionsno55 = document.getElementsByName("no55");
  for (let i = 0; i < optionsno55.length; i++) {
      optionsno55[i].checked = false;
  }

  const optionsno611 = document.getElementsByName("no611");
  for (let i = 0; i < optionsno611.length; i++) {
      optionsno611[i].checked = false;
  }

  const optionsno621 = document.getElementsByName("no621");
  for (let i = 0; i < optionsno621.length; i++) {
      optionsno621[i].checked = false;
  }
  const optionsno631 = document.getElementsByName("no631");
  for (let i = 0; i < optionsno631.length; i++) {
      optionsno631[i].checked = false;
  }
  const optionsno641 = document.getElementsByName("no641");
  for (let i = 0; i < optionsno641.length; i++) {
      optionsno641[i].checked = false;
  }
  const optionsno651 = document.getElementsByName("no651");
  for (let i = 0; i < optionsno651.length; i++) {
      optionsno651[i].checked = false;
  }
}


function kirim2() {
  let poin2 = 0;
  const jno101 = document.querySelector("#jno101");
  const jno102 = document.querySelector("#jno102");
  const jno103 = document.querySelector("#jno103");
   const jno104 = document.querySelector("#jno104");
  const jno105 = document.querySelector("#jno105");
  const jno106 = document.querySelector("#jno106");
  const jno107 = document.querySelector("#jno107");
  const jno108 = document.querySelector("#jno108");
  const jno109 = document.querySelector("#jno109");
  const jno110 = document.querySelector("#jno110");
  
  const nilai2 = document.querySelector("#nilai2");
   
    if (jno101.checked) {
    response = "ok";
    poin2 = poin2 + 10;
  } else {
    response = "x";
  }
rno101.innerHTML = response;

if (jno102.checked) {
  response = "ok";
  poin2 = poin2 + 10;
} else {
  response = "x";
}
rno102.innerHTML = response;
if (jno103.checked) {
  response = "ok";
  poin2 = poin2 + 10;
} else {
  response = "x";
}
rno103.innerHTML = response;

 if (jno104.checked) {
   response = "ok";
 poin2 = poin2 + 10;
} else {
 response = "x";
 }
rno104.innerHTML = response;

 if (jno105.checked) {
 response = "ok";
poin2 = poin2 + 10;
 } else {
 response = "x";
 }
rno105.innerHTML = response;

 if (jno106.checked) {
  response = "ok";
 poin2 = poin2 + 10;
 } else {
  response = "";
}
rno106.innerHTML = response;
if (jno107.checked) {
 response = "ok";
 poin2 = poin2 + 10;
 } else {
 response = "";
 }
 rno107.innerHTML = response;
if (jno108.checked) {
 response = "ok";
poin2= poin2 + 10;
 } else {
 response = "";
 }
 rno108.innerHTML = response;
 if (jno109.checked) {
  response = "ok";
 poin2 = poin2 + 10;
 } else {
   response = "";
 }
rno109.innerHTML = response;
if (jno110.checked) {
response = "ok";
 poin2 = poin2 + 10;
 } else {
  response = "";
}
rno110.innerHTML = response;


nilai2.innerHTML=poin2

localStorage.setItem("nil2",poin2);
juduln2.innerHTML=localStorage.getItem("nil2");
}
  


function kirim29() {
  let poin2 = 0;
  const jno101 = document.querySelector("#jno101");
  const jno102 = document.querySelector("#jno102");
  const jno103 = document.querySelector("#jno103");
   const jno104 = document.querySelector("#jno104");
  const jno105 = document.querySelector("#jno105");
  const jno106 = document.querySelector("#jno106");
  const jno107 = document.querySelector("#jno107");
  const jno108 = document.querySelector("#jno108");
  const jno109 = document.querySelector("#jno109");
  const jno110 = document.querySelector("#jno110");
  
  
  
  if (jno101.checked) {
    response = "ok";
    poin2 = poin2 + 10;
  } else {
    response = "x";
  }
rno101.innerHTML = response;

if (jno102.checked) {
  response = "ok";
  poin2 = poin2 + 10;
} else {
  response = "x";
}
rno102.innerHTML = response;

if (jno103.checked) {
  response = "ok";
  poin2 = poin2 + 10;
} else {
  response = "x";
}
rno103.innerHTML = response;

 if (jno104.checked) {
   response = "ok";
 poin2 = poin2 + 10;
} else {
 response = "x";
 }
rno104.innerHTML = response;

 if (jno105.checked) {
 response = "ok";
poin2 = poin2 + 10;
 } else {
 response = "x";
 }
rno105.innerHTML = response;

 if (jno106.checked) {
  response = "ok";
 poin2 = poin2 + 10;
 } else {
  response = "";
}
rno106.innerHTML = response;
if (jno107.checked) {
 response = "ok";
 poin2 = poin2 + 10;
 } else {
 response = "";
 }
 rno107.innerHTML = response;
if (jno108.checked) {
 response = "ok";
poin2= poin2 + 10;
 } else {
 response = "";
 }
 rno108.innerHTML = response;
 if (jno109.checked) {
  response = "ok";
 poin2 = poin2 + 10;
 } else {
   response = "";
 }
rno109.innerHTML = response;
if (jno110.checked) {
response = "ok";
 poin2 = poin2 + 10;
 } else {
  response = "";
}
rno110.innerHTML = response;


nilai200.innerHTML=poin2

localStorage.setItem("nil2",poin2);
juduln2.innerHTML=nil2;

const optionsno101 = document.getElementsByName("no101");
   for (let i = 0; i < optionsno101.length; i++) {
       optionsno101[i].checked = false;
   }

   const optionsno102 = document.getElementsByName("no102");
   for (let i = 0; i < optionsno102.length; i++) {
       optionsno102[i].checked = false;
   }

   const optionsno103 = document.getElementsByName("no103");
   for (let i = 0; i < optionsno103.length; i++) {
       optionsno103[i].checked = false;
   }


   const optionsno104 = document.getElementsByName("no104");
   for (let i = 0; i < optionsno104.length; i++) {
       optionsno104[i].checked = false;
    }

   
   const optionsno105 = document.getElementsByName("no105");
   for (let i = 0; i < optionsno105.length; i++) {
      optionsno105[i].checked = false;
   }
   
    const optionsno106 = document.getElementsByName("no106");
   for (let i = 0; i < optionsno106.length; i++) {
       optionsno106[i].checked = false;
   }

   const optionsno107 = document.getElementsByName("no107");
   for (let i = 0; i < optionsno107.length; i++) {
       optionsno107[i].checked = false;
   }
  const optionsno108 = document.getElementsByName("no108");
   for (let i = 0; i < optionsno108.length; i++) {
     optionsno108[i].checked = false;
   }
   const optionsno109 = document.getElementsByName("no109");
    for (let i = 0; i < optionsno109.length; i++) {
      optionsno109[i].checked = false;
   }
   const optionsno110 = document.getElementsByName("no110");
  for (let i = 0; i < optionsno110.length; i++) {
      optionsno110[i].checked = false;
    }


  }

  
  
function kirim3() {
  let poin3 = 0;
    const jno111 = document.querySelector("#jno111");
    const jno112 = document.querySelector("#jno112");
    const jno113 = document.querySelector("#jno113");
    const jno114 = document.querySelector("#jno114");
    const jno115 = document.querySelector("#jno115");
    const jno116 = document.querySelector("#jno116");
    const jno117 = document.querySelector("#jno117");
    const jno118 = document.querySelector("#jno118");
    const jno119 = document.querySelector("#jno119");
    const jno120 = document.querySelector("#jno120");
    const nilai3 = document.querySelector("#nilai3");
  
  if (jno111.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno111.innerHTML = response;
  
  if (jno112.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno112.innerHTML = response;

  if (jno113.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno113.innerHTML = response;
  
  if (jno114.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno114.innerHTML = response;


if (jno115.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno115.innerHTML = response;
  
  if (jno116.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno116.innerHTML = response;

if (jno117.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno117.innerHTML = response;

if (jno118.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno118.innerHTML = response;

if (jno119.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno119.innerHTML = response;

if (jno120.checked) {
    response = "ok";
    poin3 = poin3 + 10;
  } else {
    response = "x";
  }
rno120.innerHTML = response;

nilai3.innerHTML=poin3;


localStorage.setItem("nil3",poin3);
juduln3.innerHTML=nil3;
}




  


function kirim4() {
  let poin4 = 0;
  
  const jno131 = document.querySelector("#jno131");
  const jno132 = document.querySelector("#jno132");
  const jno133 = document.querySelector("#jno133");
  const jno134 = document.querySelector("#jno134");
  const jno135 = document.querySelector("#jno135");
  const jno136 = document.querySelector("#jno136");
  const jno137 = document.querySelector("#jno137");
  
  const nilai4=document.querySelector('#nilai4')


  if (jno131.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno131.innerHTML = response;

  if (jno132.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno132.innerHTML = response;

  if (jno133.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno133.innerHTML = response;

  if (jno134.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno134.innerHTML = response;

  if (jno135.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno135.innerHTML = response;


  if (jno136.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno136.innerHTML = response;

  
  if (jno137.checked) {
    response = "";
    poin4 = poin4 + 10;
  } else {
    response = "";
  }
  rno137.innerHTML = response;

nilai4.innerHTML=poin4;


  localStorage.setItem("nil4",poin4);
juduln4.innerHTML=nil4;
  
  
   const options131 = document.getElementsByName("no131");
   for (let i = 0; i < options131.length; i++) {
       options131[i].checked = false;
   }
   const options132 = document.getElementsByName("no132");
   for (let i = 0; i < options132.length; i++) {
       options132[i].checked = false;
   }
   const options133 = document.getElementsByName("no133");
   for (let i = 0; i < options133.length; i++) {
       options133[i].checked = false;
   }
   const options134 = document.getElementsByName("no134");
   for (let i = 0; i < options134.length; i++) {
       options134[i].checked = false;
   }
   const options135 = document.getElementsByName("no135");
   for (let i = 0; i < options135.length; i++) {
       options135[i].checked = false;
   }
   const options136 = document.getElementsByName("no136");
   for (let i = 0; i < options136.length; i++) {
       options136[i].checked = false;
   }
   const options137 = document.getElementsByName("no137");
   for (let i = 0; i < options137.length; i++) {
       options137[i].checked = false;
   }
   
}

function kirim5() {

let poin5 = 0;
    const jno138 = document.querySelector("#jno138");
    const jno139 = document.querySelector("#jno139");
    const jno140 = document.querySelector("#jno140");
    const jno141 = document.querySelector("#jno141");
    const jno142 = document.querySelector("#jno142");
    const nilai5=document.querySelector('#nilai5');

    if (jno138.checked) {
    response = "ok";
    poin5 = poin5 + 10;
  } else {
    response = "x";
  }
rno138.innerHTML = response;
    
    if (jno139.checked) {
    response = "ok";
    poin5 = poin5 + 10;
  } else {
    response = "x";
  }
rno139.innerHTML = response;
   
   
    if (jno140.checked) {
    response = "ok";
    poin5 = poin5 + 10;
  } else {
    response = "x";
  }
rno140.innerHTML = response;
    
      if (jno141.checked) {
    response = "ok";
    poin5 = poin5 + 10;
  } else {
    response = "x";
  }
rno141.innerHTML = response;
    
     if (jno142.checked) {
    response = "ok";
    poin5 = poin5 + 10;
  } else {
    response = "x";
  }
rno142.innerHTML = response;
    
    
  

nilai5.innerHTML=poin5;
localStorage.setItem("nil5",poin5);
juduln5.innerHTML=nil5;
}
function kirim60(){
   let poin6=0;
   const jno1=document.querySelector('#jno1');
  const jno2=document.querySelector('#jno2');
  const jno3=document.querySelector('#jno3');
  const jno4=document.querySelector('#jno4');
  const jno5=document.querySelector('#jno5');
  const jno6=document.querySelector('#jno6');
  const jno7=document.querySelector('#jno7');
  const jno8=document.querySelector('#jno8');
  const jno9=document.querySelector('#jno9');
  const jno10=document.querySelector('#jno10');
const nilai6=document.querySelector('#nilai6');
    
    
    if (jno1.checked){
    response="";
    poin6=poin6+10;
  }else {
    response="x";
  }
  rno1.innerHTML=response;

if (jno2.checked){
  response="";
  poin6=poin6+10;
}else {
  response="x";
}
rno2.innerHTML=response;

if (jno3.checked){
  response=" ";
  poin6=poin6+10;
}else {
  response="x";
}
rno3.innerHTML=response;


if (jno4.checked){
response=" ";
poin6=poin6+10;
}else {
response="x";
}
rno4.innerHTML=response;


if (jno5.checked){
  response="";
  poin6=poin6+10;
}else {0
  response="x";
}
rno5.innerHTML=response;


if (jno6.checked){
response="";
poin6=poin6+10;
}else {
response="x";
}
rno6.innerHTML=response;


if (jno7.checked){
  response=" ";
  poin6=poin6+10;
}else {
  response="x";
}
rno7.innerHTML=response;


if (jno8.checked){
response="";
poin6=poin6+10;
}else {
response="x";
}
rno8.innerHTML=response;

if (jno9.checked){
  response="";
  poin6=poin6+10;
}else {
  response="x";
}
rno9.innerHTML=response;


if (jno10.checked){
response="";
poin6=poin6+10;
}else {
response="x";
}
rno10.innerHTML=response;





nilai6.innerHTML=poin6;
localStorage.setItem("nil6",poin6);
juduln6.innerHTML=nil6;

    
  
}
<!--

function kirim600(){
    let poin600=8000;
  const jno1=document.querySelector('#jno1');
  const jno2=document.querySelector('#jno2');
  const jno3=document.querySelector('#jno3');
  const jno4=document.querySelector('#jno4');
  const jno5=document.querySelector('#jno5');
  const jno6=document.querySelector('#jno6');
  const jno7=document.querySelector('#jno7');
  const jno8=document.querySelector('#jno8');
  const jno9=document.querySelector('#jno9');
  const jno10=document.querySelector('#jno10');
  const jno700=document.querySelector('#jno700');
  const jno701=document.querySelector('#jno701');
  const jno702=document.querySelector('#jno702');
  const jno703=document.querySelector('#jno703');
  const jno704=document.querySelector('#jno704');
  const jno705=document.querySelector('#jno705');
  const jno706=document.querySelector('#jno706');
  const jno707=document.querySelector('#jno707');
  const jno708=document.querySelector('#jno708');
  const jno709=document.querySelector('#jno709');
  
 const nilai600=document.querySelector('#nilai600');
  


  const sno1=document.querySelector('#sno1');
  const sno2=document.querySelector('#sno2');
 




  const rno1=document.querySelector('#rno1');
  const rno2=document.querySelector('#rno2');
  const rno3=document.querySelector('#rno3');
  const rno4=document.querySelector('#rno4');
  const rno5=document.querySelector('#rno5');
  const rno6=document.querySelector('#rno6');
  const rno7=document.querySelector('#rno7');
  const rno8=document.querySelector('#rno8');
  const rno9=document.querySelector('#rno9');
  const rno10=document.querySelector('#rno10');
  const rno700=document.querySelector('#rno700');
  const rno701=document.querySelector('#rno701');
  const rno702=document.querySelector('#rno702');
  const rno703=document.querySelector('#rno703');
  const rno704=document.querySelector('#rno704');
  const rno705=document.querySelector('#rno705');
  const rno706=document.querySelector('#rno706');
  const rno707=document.querySelector('#rno707');
  const rno708=document.querySelector('#rno708');
  const rno709=document.querySelector('#rno709');
 

  const rsno1=document.querySelector('#rsno1');
  const rsno2=document.querySelector('#rsno2');



  let response
  
  
  if (jno1.checked){
    response=""
    poin6=poin6+10
  }else {
    response="x"
  }
  rno1.innerHTML=response


if (jno2.checked){
  response=""
  poin6=poin6+10
}else {
  response="x"
}
rno2.innerHTML=response

if (jno3.checked){
  response=" "
  poin6=poin6+10
}else {
  response="x"
}
rno3.innerHTML=response


if (jno4.checked){
response=" "
poin6=poin6+10
}else {
response="x"
}
rno4.innerHTML=response




if (jno5.checked){
  response=""
  poin6=poin6+10
}else {0
  response="x"
}
rno5.innerHTML=response


if (jno6.checked){
response=""
poin6=poin6+10
}else {
response="x"
}
rno6.innerHTML=response


if (jno7.checked){
  response=" "
  poin6=poin6+10
}else {
  response="x"
}
rno7.innerHTML=response


if (jno8.checked){
response=""
poin6=poin6+10
}else {
response="x"
}
rno8.innerHTML=response

if (jno9.checked){
  response=""
  poin6=poin6+10
}else {
  response="x"
}
rno9.innerHTML=response


if (jno10.checked){
response=""
poin6=poin6+10
}else {
response="x"
}
rno10.innerHTML=response
nilai600.innerHTML=poin600;

if (jno700.checked){
  response=""
  poin6=poin6+10
}else {
  response="x"
}
rno700.innerHTML=response

if (jno701.checked){
  response=""
  poin6=poin6+10
}else {
  response="x"
}
rno701.innerHTML=response


if (jno702.checked){
response=""
poin6=poin6+10
}else {
response="x"
}
rno702.innerHTML=response

if (jno703.checked){
response=" "
poin6=poin6+10
}else {
response="x"
}
rno703.innerHTML=response


if (jno704.checked){
response=" "
poin6=poin6+10
}else {
response="x"
}
rno704.innerHTML=response




if (jno705.checked){
response=""
poin6=poin6+10
}else {
response="x"
}
rno705.innerHTML=response


if (jno706.checked){
response=""
poin6=poin6+10
}else {
response="x"
}
rno706.innerHTML=response


if (jno707.checked){
response=" "
poin6=poin6+10
}else {
response="x"
}
rno707.innerHTML=response


if (jno708.checked){
response=""
poin6=poin6+10
}else {
response="x"
}
rno708.innerHTML=response

if (jno709.checked){
response=""
poin6=poin6+10
}else {
response="x"
}
rno709.innerHTML=response




if (sno1.value == "1,57") {
  response = "";
  poin6 = poin6 + 50;
} else {
  response = "";
}
rsno1.innerHTML = response;

  

if (sno2.value == "sec") {
  response = "";
  poin6 = poin6 + 50;
} else {
  response = "";
}
rsno2.innerHTML = response;

  

niltotal=niltotal+poin6;
localStorage.setItem("niltotal",niltotal);

localStorage.setItem("nil6",poin6);
juduln6.innerHTML=nil6;
  


  
const optionsno1 = document.getElementsByName("no1");
for (let i = 0; i < optionsno1.length; i++) {
    optionsno1[i].checked = false;
}
const optionsno2 = document.getElementsByName("no2");
for (let i = 0; i < optionsno2.length; i++) {
    optionsno2[i].checked = false;
}
const optionsno3 = document.getElementsByName("no3");
for (let i = 0; i < optionsno3.length; i++) {
    optionsno3[i].checked = false;
}
const optionsno4 = document.getElementsByName("no4");
for (let i = 0; i < optionsno4.length; i++) {
    optionsno4[i].checked = false;
}

const optionsno5 = document.getElementsByName("no5");
for (let i = 0; i < optionsno5.length; i++) {
    optionsno5[i].checked = false;
}

const optionsno6 = document.getElementsByName("no6");
for (let i = 0; i < optionsno6.length; i++) {
    optionsno6[i].checked = false;
}
const optionsno7 = document.getElementsByName("no7");
for (let i = 0; i < optionsno7.length; i++) {
    optionsno7[i].checked = false;
}
const optionsno8 = document.getElementsByName("no8");
for (let i = 0; i < optionsno8.length; i++) {
    optionsno8[i].checked = false;
}
const optionsno9 = document.getElementsByName("no9");
for (let i = 0; i < optionsno9.length; i++) {
    optionsno9[i].checked = false;
}

const optionsno10 = document.getElementsByName("no10");
for (let i = 0; i < optionsno10.length; i++) {
    optionsno10[i].checked = false;
}

const optionsno700 = document.getElementsByName("no700");
for (let i = 0; i < optionsno700.length; i++) {
    optionsno700[i].checked = false;
}
const optionsno701 = document.getElementsByName("no701");
for (let i = 0; i < optionsno701.length; i++) {
    optionsno701[i].checked = false;
}
const optionsno702 = document.getElementsByName("no702");
for (let i = 0; i < optionsno702.length; i++) {
    optionsno702[i].checked = false;
}
const optionsno703 = document.getElementsByName("no703");
for (let i = 0; i < optionsno703.length; i++) {
    optionsno703[i].checked = false;
}
const optionsno704 = document.getElementsByName("no704");
for (let i = 0; i < optionsno704.length; i++) {
    optionsno704[i].checked = false;
}

const optionsno705 = document.getElementsByName("no705");
for (let i = 0; i < optionsno705.length; i++) {
    optionsno705[i].checked = false;
}

const optionsno706 = document.getElementsByName("no706");
for (let i = 0; i < optionsno706.length; i++) {
    optionsno706[i].checked = false;
}
const optionsno707 = document.getElementsByName("no707");
for (let i = 0; i < optionsno707.length; i++) {
    optionsno707[i].checked = false;
}
const optionsno708 = document.getElementsByName("no708");
for (let i = 0; i < optionsno708.length; i++) {
    optionsno708[i].checked = false;
}
const optionsno709 = document.getElementsByName("no709");
for (let i = 0; i < optionsno709.length; i++) {
    optionsno709[i].checked = false;
}




}

-->

  
  function kirim7() {
    let poin7 = 0;
    const jno0107 = document.querySelector("#jno0107");
    const jno0207 = document.querySelector("#jno0207");
    const jno0307 = document.querySelector("#jno0307");
    const jno0407 = document.querySelector("#jno0407");
    const jno0507 = document.querySelector("#jno0507");
    const jno0607 = document.querySelector("#jno0607");
    const jno0707 = document.querySelector("#jno0707");
    const jno0807 = document.querySelector("#jno0807");
    const jno0907 = document.querySelector("#jno0907");
    const jno01007 = document.querySelector("#jno01007");
    
    
    const jno11 = document.querySelector("#jno11");
    const jno12 = document.querySelector("#jno12");
    const jno13 = document.querySelector("#jno13");
    const jno14 = document.querySelector("#jno14");
    const jno15 = document.querySelector("#jno15");
    const jno16 = document.querySelector("#jno16");
    const jno17 = document.querySelector("#jno17");
    const jno18 = document.querySelector("#jno18");
    const jno19 = document.querySelector("#jno19");
    const jno20 = document.querySelector("#jno20");
    
    const nilai7=document.querySelector("#nilai7");
  
    const sno11=document.querySelector('#sno11')
    const sno12=document.querySelector('#sno12')
    const sno13=document.querySelector('#sno13')
    const sno14=document.querySelector('#sno14')
    const sno15=document.querySelector('#sno15')
    const sno16=document.querySelector('#sno16')
    const sno17=document.querySelector('#sno17')
    const sno18=document.querySelector('#sno18')
    const sno19=document.querySelector('#sno19')
    const sno1901=document.querySelector('#sno1901')
    
   
  
    if (jno0107.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0107.innerHTML = response;
  
    if (jno0207.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0207.innerHTML = response;
  
    if (jno0307.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0307.innerHTML = response;
  
    
    if (jno0407.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0407.innerHTML = response;
  
    if (jno0507.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0507.innerHTML = response;
  
    if (jno0607.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0607.innerHTML = response;
  
  
    if (jno0707.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0707.innerHTML = response;
  
    if (jno0807.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0807.innerHTML = response;
  
    if (jno0907.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno0907.innerHTML = response;
  
  
    if (jno01007.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno01007.innerHTML = response;
  
  
    if (jno11.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno11.innerHTML = response;
  
    if (jno12.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno12.innerHTML = response;
  
    if (jno13.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno13.innerHTML = response;
  
    if (jno14.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno14.innerHTML = response;
  
    if (jno15.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno15.innerHTML = response;
  
    if (jno16.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno16.innerHTML = response;
  
    if (jno17.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno17.innerHTML = response;
  
    if (jno18.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno18.innerHTML = response;
  
    if (jno19.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno19.innerHTML = response;
  
    if (jno20.checked) {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rno20.innerHTML = response;
  
    if (sno11.value == "1") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno11.innerHTML = response;
  
    if (sno12.value == "3") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno12.innerHTML = response;
  
    if (sno13.value == "1") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno13.innerHTML = response;
  
    if (sno14.value == "10") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno14.innerHTML = response;
  
    if (sno15.value == "4") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno15.innerHTML = response;
  
    if (sno16.value == "12") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno16.innerHTML = response;
  
    if (sno17.value == "50") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno17.innerHTML = response;
  
    if (sno18.value == "40") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno18.innerHTML = response;
  
    if (sno19.value == "1") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno19.innerHTML = response;
  
    if (sno1901.value == "10") {
      response = "";
      poin7 = poin7 + 10;
    } else {
      response = "";
    }
    rsno1901.innerHTML = response;
  
  nilai7.innerHTML=poin7;
  


  localStorage.setItem("nil7",poin7);
juduln7.innerHTML=nil7;
  
  const optionsno11 = document.getElementsByName("no11");
  for (let i = 0; i < optionsno11.length; i++) {
      optionsno11[i].checked = false;
  }
  const optionsno12 = document.getElementsByName("no12");
  for (let i = 0; i < optionsno12.length; i++) {
      optionsno12[i].checked = false;
  }
  const optionsno13 = document.getElementsByName("no13");
  for (let i = 0; i < optionsno13.length; i++) {
      optionsno13[i].checked = false;
  }
  const optionsno14 = document.getElementsByName("no14");
  for (let i = 0; i < optionsno14.length; i++) {
      optionsno14[i].checked = false;
  }
  
  const optionsno15 = document.getElementsByName("no15");
  for (let i = 0; i < optionsno15.length; i++) {
      optionsno15[i].checked = false;
  }
  
  const optionsno16 = document.getElementsByName("no16");
  for (let i = 0; i < optionsno16.length; i++) {
      optionsno16[i].checked = false;
  }
  const optionsno17 = document.getElementsByName("no17");
  for (let i = 0; i < optionsno17.length; i++) {
      optionsno17[i].checked = false;
  }
  const optionsno18 = document.getElementsByName("no18");
  for (let i = 0; i < optionsno18.length; i++) {
      optionsno18[i].checked = false;
  }
  const optionsno19 = document.getElementsByName("no19");
  for (let i = 0; i < optionsno19.length; i++) {
      optionsno19[i].checked = false;
  }
  
  const optionsno20 = document.getElementsByName("no20");
  for (let i = 0; i < optionsno20.length; i++) {
      optionsno20[i].checked = false;
  }
  
  
  
  }
  
function kirim8() {
  let poin8 = 0;
  
const jno21 = document.querySelector("#jno21");
const jno22 = document.querySelector("#jno22");
const jno23 = document.querySelector("#jno23");
const jno24 = document.querySelector("#jno24");
const jno25 = document.querySelector("#jno25");
const jno26 = document.querySelector("#jno26");
const jno27 = document.querySelector("#jno27");
const jno28 = document.querySelector("#jno28");
const jno29 = document.querySelector("#jno29");
const jno30 = document.querySelector("#jno30");
    
  
  const nilai8=document.querySelector('#nilai8');

  if (jno21.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno21.innerHTML = response;
  
    if (jno22.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno122.innerHTML = response;
  
    if (jno23.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno23.innerHTML = response;
  
    if (jno24.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno24.innerHTML = response;
  
    if (jno25.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno25.innerHTML = response;
  
    if (jno26.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno26.innerHTML = response;
  
    if (jno27.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno27.innerHTML = response;
  
    if (jno28.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno28.innerHTML = response;
  
    if (jno29.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno29.innerHTML = response;
  
    if (jno30.checked) {
      response = "";
      poin8 = poin8 + 10;
    } else {
      response = "";
    }
    rno30.innerHTML = response;
  
nilai8.innerHTML=poin8;


localStorage.setItem("nil8",poin8);
juduln8.innerHTML=nil8;
}

function kirim9() {
  let poin9 = 0;
const jno171 = document.querySelector("#jno171");
const jno172 = document.querySelector("#jno172");
const jno173 = document.querySelector("#jno173");
const jno174 = document.querySelector("#jno174");
const jno175 = document.querySelector("#jno175");

const jno176 = document.querySelector("#jno176");
const jno177 = document.querySelector("#jno177");
const jno178 = document.querySelector("#jno178");
const jno179 = document.querySelector("#jno179");
const jno180 = document.querySelector("#jno180");


const nilai9=document.querySelector('#nilai9');





if (jno171.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno171.innerHTML = response;
  
if (jno172.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno172.innerHTML = response;
  
  if (jno173.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno173.innerHTML = response;
  
  if (jno174.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno174.innerHTML = response;
  
if (jno175.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno175.innerHTML = response;

if (jno176.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno176.innerHTML = response;

if (jno177.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno177.innerHTML = response;

if (jno178.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno178.innerHTML = response;

  if (jno179.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno179.innerHTML = response;


if (jno180.checked) {
    response = "";
    poin9 = poin9 + 10;
  } else {
    response = "";
  }
  rno180.innerHTML = response;

nilai9.innerHTML=poin9;


localStorage.setItem("nil9",poin9);
juduln9.innerHTML=nil9;
}


function kirim10() {
  let poin10 = 0;
  const jno600 = document.querySelector("#jno600");
  const jno601 = document.querySelector("#jno601");
  const jno602 = document.querySelector("#jno602");
  const jno603 = document.querySelector("#jno603");
  const jno604 = document.querySelector("#jno604");
  const jno605 = document.querySelector("#jno605");
  const jno606 = document.querySelector("#jno606");
  const jno607 = document.querySelector("#jno607");
  const jno608 = document.querySelector("#jno608");
  const jno609 = document.querySelector("#jno609");
  const nilai10=document.querySelector('#nilai10')

  if (jno600.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno600.innerHTML = response;

  if (jno601.checked) {0
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno601.innerHTML = response;

  if (jno602.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno602.innerHTML = response;

  if (jno603.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno603.innerHTML = response;

  if (jno604.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno604.innerHTML = response;

  if (jno605.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno605.innerHTML = response;

  if (jno606.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno606.innerHTML = response;

  if (jno607.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno607.innerHTML = response;

  if (jno608.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno608.innerHTML = response;

  if (jno609.checked) {
    response = "";
    poin10 = poin10 + 10;
  } else {
    response = "";
  }
  rno609.innerHTML = response;

nilai10.innerHTML=poin10;

  localStorage.setItem("nil10",poin10);
juduln10.innerHTML=nil10;
  
  const options = document.getElementsByName("no600");
   for (let i = 0; i < options.length; i++) {
       options[i].checked = false;
   }
   const options1 = document.getElementsByName("no601");
   for (let i = 0; i < options1.length; i++) {
       options1[i].checked = false;
   }
   const options2 = document.getElementsByName("no602");
   for (let i = 0; i < options2.length; i++) {
       options2[i].checked = false;
   }
   const options3 = document.getElementsByName("no603");
   for (let i = 0; i < options3.length; i++) {
       options3[i].checked = false;
   }
   const options4 = document.getElementsByName("no604");
   for (let i = 0; i < options4.length; i++) {
       options4[i].checked = false;
   }

   const options5 = document.getElementsByName("no605");
   for (let i = 0; i < options5.length; i++) {
       options5[i].checked = false;
   }
   const options6 = document.getElementsByName("no606");
   for (let i = 0; i < options6.length; i++) {
       options6[i].checked = false;
   }
   const options7 = document.getElementsByName("no607");
   for (let i = 0; i < options7.length; i++) {
       options7[i].checked = false;
   }
   const options8 = document.getElementsByName("no608");
   for (let i = 0; i < options8.length; i++) {
       options8[i].checked = false;
   }
   const options9 = document.getElementsByName("no609");
   for (let i = 0; i < options9.length; i++) {
       options9[i].checked = false;
   }
   
}

  function kirim11() {
    let poin11 = 0;
    const jno81 = document.querySelector("#jno81");
    const jno82 = document.querySelector("#jno82");
    const jno83 = document.querySelector("#jno83");
    const jno84 = document.querySelector("#jno84");
    const jno85 = document.querySelector("#jno85");
    const jno86 = document.querySelector("#jno86");
    const jno87 = document.querySelector("#jno87");
    const jno88 = document.querySelector("#jno88");
    const jno89 = document.querySelector("#jno89");
    const jno90 = document.querySelector("#jno90");
    const jno911 = document.querySelector("#jno911");
    const jno912 = document.querySelector("#jno912");
    const jno913 = document.querySelector("#jno913");
    const jno914 = document.querySelector("#jno914");
    const jno915 = document.querySelector("#jno915");
    const jno916 = document.querySelector("#jno916");
    const jno917 = document.querySelector("#jno917");
    const jno918 = document.querySelector("#jno918");
    const jno919 = document.querySelector("#jno919");
    const jno920 = document.querySelector("#jno920");
    const jno921 = document.querySelector("#jno921");
    const jno922 = document.querySelector("#jno922");
    const jno923 = document.querySelector("#jno923");
    const jno924 = document.querySelector("#jno924");
    const jno925 = document.querySelector("#jno925");
    const nilai11=document.querySelector('#nilai11')
  
  
    if (jno81.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno81.innerHTML = response;
  
    if (jno82.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno82.innerHTML = response;
  
    if (jno83.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno83.innerHTML = response;
  
    if (jno84.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno84.innerHTML = response;
  
    if (jno85.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno85.innerHTML = response;
  
    if (jno86.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno86.innerHTML = response;
  
    if (jno87.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno87.innerHTML = response;
  
    if (jno88.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno88.innerHTML = response;
  
    if (jno89.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno89.innerHTML = response;
  
    if (jno90.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno90.innerHTML = response;
  
    if (jno911.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno911.innerHTML = response;
    if (jno912.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno912.innerHTML = response;
    if (jno913.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno913.innerHTML = response;
    if (jno914.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno914.innerHTML = response;
    if (jno915.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno915.innerHTML = response;
  
    if (jno916.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno916.innerHTML = response;
  
    if (jno917.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno917.innerHTML = response;
  
    if (jno918.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno918.innerHTML = response;
  
    if (jno919.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno919.innerHTML = response;
  
    if (jno920.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno920.innerHTML = response;
  
  
    if (jno921.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno921.innerHTML = response;
  
  
    if (jno922.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno922.innerHTML = response;
  
  
    if (jno923.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno923.innerHTML = response;
  
  
    if (jno924.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno924.innerHTML = response;
  
  
    if (jno925.checked) {
      response = "";
      poin11 = poin11 + 10;
    } else {
      response = "";
    }
    rno925.innerHTML = response;
  
  
  nilai11.innerHTML=poin11;
    
    localStorage.setItem("nil11",poin11);
juduln11.innerHTML=nil11;
    
  const options81 = document.getElementsByName("no81");
  for (let i = 0; i < options81.length; i++) {
      options81[i].checked = false;
  }
  const options82 = document.getElementsByName("no82");
  for (let i = 0; i < options82.length; i++) {
      options82[i].checked = false;
  }
  const options83 = document.getElementsByName("no83");
  for (let i = 0; i < options83.length; i++) {
      options83[i].checked = false;
  }
  const options84 = document.getElementsByName("no84");
  for (let i = 0; i < options84.length; i++) {
      options84[i].checked = false;
  }
  
  const options85 = document.getElementsByName("no85");
  for (let i = 0; i < options85.length; i++) {
      options85[i].checked = false;
  }
  
     const options86 = document.getElementsByName("no86");
     for (let i = 0; i < options86.length; i++) {
         options86[i].checked = false;
     }
     const options87 = document.getElementsByName("no87");
     for (let i = 0; i < options87.length; i++) {
         options87[i].checked = false;
     }
     const options88 = document.getElementsByName("no88");
     for (let i = 0; i < options88.length; i++) {
         options88[i].checked = false;
     }
     const options89 = document.getElementsByName("no89");
     for (let i = 0; i < options89.length; i++) {
         options89[i].checked = false;
     }
  
     const options90 = document.getElementsByName("no90");
     for (let i = 0; i < options90.length; i++) {
         options90[i].checked = false;
     }
  
     const options911 = document.getElementsByName("no911");
     for (let i = 0; i < options911.length; i++) {
         options911[i].checked = false;
     }
  
  const options912 = document.getElementsByName("no912");
     for (let i = 0; i < options912.length; i++) {
         options912[i].checked = false;
     }
  
     const options913 = document.getElementsByName("no913");
     for (let i = 0; i < options913.length; i++) {
         options913[i].checked = false;
     }
  
     const options914 = document.getElementsByName("no914");
     for (let i = 0; i < options914.length; i++) {
         options914[i].checked = false;
     }
  
     const options915 = document.getElementsByName("no915");
     for (let i = 0; i < options915.length; i++) {
         options915[i].checked = false;
     }
  
     const options916 = document.getElementsByName("no916");
     for (let i = 0; i < options916.length; i++) {
         options916[i].checked = false;
     }
  
     const options917 = document.getElementsByName("no917");
     for (let i = 0; i < options917.length; i++) {
         options917[i].checked = false;
     }0
  
     const options918 = document.getElementsByName("no918");
     for (let i = 0; i < options918.length; i++) {
         options918[i].checked = false;
     }
  
     const options919 = document.getElementsByName("no919");
     for (let i = 0; i < options919.length; i++) {
         options919[i].checked = false;
     }
  
     const options920 = document.getElementsByName("no920");
     for (let i = 0; i < options920.length; i++) {
         options920[i].checked = false;
     }
  
     const options921 = document.getElementsByName("no921");
     for (let i = 0; i < options921.length; i++) {
         options921[i].checked = false;
     }
  
     const options922 = document.getElementsByName("no922");
     for (let i = 0; i < options922.length; i++) {
         options922[i].checked = false;
     }
  
     const options923 = document.getElementsByName("no923");
     for (let i = 0; i < options923.length; i++) {
         options923[i].checked = false;
     }
  
     const options924 = document.getElementsByName("no924");
     for (let i = 0; i < options924.length; i++) {
         options924[i].checked = false;
     }
  
     const options925 = document.getElementsByName("no925");
     for (let i = 0; i < options925.length; i++) {
         options925[i].checked = false;
     }
  
     
  }
  
function kirim12(){
    let poin=0;
    const jno91= document.querySelector("#jno91");
    const jno92= document.querySelector("#jno92");
    const jno93= document.querySelector("#jno93");
    const jno94= document.querySelector("#jno94");
    const jno95= document.querySelector("#jno95");
    const jno96= document.querySelector("#jno96");
    const jno97= document.querySelector("#jno97");
    
   
    
const rno91=document.querySelector("#rno91");
const rno92=document.querySelector("#rno92");
const rno93=document.querySelector("#rno93");
const rno94=document.querySelector("#rno94");
const rno95=document.querySelector("#rno95");
const rno96=document.querySelector("#rno96");
const rno97=document.querySelector("#rno97");

    const nilai12=document.querySelector("#nilai12");
    
    
    
    
    
    if (jno91.checked) {poin=poin + 10;
    response="ok";
    } else {response="x";}
    rno91.innerHTML=response;
    
    
if (jno92.checked) {poin=poin + 10;
response="ok";
    } else {response="x";};
    
    rno92.innerHTML=response;
    
if (jno93.checked) {poin=poin + 10;
response="ok";
    } else {response="x";}
    rno93.innerHTML=response;
    
if (jno94.checked) {poin=poin + 10;
response="ok";
    } else {response="x";}
    rno94.innerHTML=response;
    
if (jno95.checked) {poin=poin + 10;
response="ok";
    } else {response="x";}
    rno95.innerHTML=response;
    
    if (jno96.checked) {poin=poin + 10;
response="ok";
    } else {response="x";}
    rno96.innerHTML=response;
    
     if (jno97.checked) {poin=poin + 10;
response="ok";
    } else {response="x";}
    rno97.innerHTML=response;
    
   
    
    nilai12.innerHTML=poin;
    localStorage.setItem("nil12",poin);
    
    juduln12.innerHTML= localStorage.getItem("nil12");
    

  // Insert date and time into HTML
  
}
function kirim13() {
  let poin13 = 0;
  const nilai13=document.querySelector('#nilai13');
 const jno121 = document.querySelector("#jno121");
 
 const jno122 = document.querySelector("#jno122");

  const jno123 = document.querySelector("#jno123");

const jno124 = document.querySelector("#jno124");
const jno125 = document.querySelector("#jno125");
const jno126 = document.querySelector("#jno126");
const jno127 = document.querySelector("#jno127");
const jno128 = document.querySelector("#jno128");
const jno129 = document.querySelector("#jno129");
const jno130 = document.querySelector("#jno130");

 if (jno121.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno121.innerHTML = response;

 if (jno122.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno122.innerHTML = response;

 if (jno123.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno123.innerHTML = response;
    
     if (jno124.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno124.innerHTML = response;
    
     if (jno125.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno125.innerHTML = response;
  
   if (jno126.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno126.innerHTML = response;
  
    if (jno127.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno127.innerHTML = response; 
    
     if (jno128.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno128.innerHTML = response;
    
  if (jno129.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno129.innerHTML = response;
 
  if (jno130.checked) {
      response = "";
      poin13 = poin13 + 10;
    } else {
      response = "";
    }
    rno130.innerHTML = response;
    
    
nilai13.innerHTML=poin13;
localStorage.setItem("nil13",poin13);
juduln13.innerHTML=nil13;
}


  function kirim14() {
    let poin14 = 0;
    const jno41 = document.querySelector("#jno41");
    const jno42 = document.querySelector("#jno42");
    const jno43 = document.querySelector("#jno43");
    const jno44 = document.querySelector("#jno44");
    const jno45 = document.querySelector("#jno45");
    const jno46 = document.querySelector("#jno46");
    const jno47 = document.querySelector("#jno47");
    const jno48 = document.querySelector("#jno48");
    const jno49 = document.querySelector("#jno49");
    
  
    const jno5033 = document.querySelector("#jno5033");
    const jno511 = document.querySelector("#jno511");
    const jno512 = document.querySelector("#jno512");
    const jno513 = document.querySelector("#jno513");
    const jno514 = document.querySelector("#jno514");
    const jno515 = document.querySelector("#jno515");
    const nilai14=document.querySelector('#nilai14')
  
  
    if (jno41.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno41.innerHTML = response;
  
    if (jno42.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno42.innerHTML = response;
  
    if (jno43.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno43.innerHTML = response;
  
    if (jno44.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno44.innerHTML = response;
  
    if (jno45.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno45.innerHTML = response;
  
    if (jno46.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno46.innerHTML = response;
  
    if (jno47.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno47.innerHTML = response;
  
    if (jno48.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno48.innerHTML = response;
  
    if (jno49.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno49.innerHTML = response;
  
  
  
  
    if (jno5033.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno5033.innerHTML = response;
  
  
    if (jno511.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno511.innerHTML = response;
  
    
    if (jno512.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno512.innerHTML = response;
  
    
    if (jno513.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno513.innerHTML = response;
  
  
    if (jno514.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno514.innerHTML = response;
  
  
    if (jno515.checked) {
      response = "";
      poin14 = poin14 + 10;
    } else {
      response = "";
    }
    rno515.innerHTML = response;
  
  
  
  nilai14.innerHTML=poin14;
    
    localStorage.setItem("nil14",poin14);
juduln14.innerHTML=nil14;
    
  const options41 = document.getElementsByName("no41");
  for (let i = 0; i < options41.length; i++) {
      options41[i].checked = false;
  }
  const options42 = document.getElementsByName("no42");
  for (let i = 0; i < options42.length; i++) {
      options42[i].checked = false;
  }
  const options43 = document.getElementsByName("no43");
  for (let i = 0; i < options43.length; i++) {
      options43[i].checked = false;
  }
  const options44 = document.getElementsByName("no44");
  for (let i = 0; i < options44.length; i++) {
      options44[i].checked = false;
  }
  
  const options45 = document.getElementsByName("no45");
  for (let i = 0; i < options45.length; i++) {
      options45[i].checked = false;
  }
  
     const options46 = document.getElementsByName("no46");
     for (let i = 0; i < options46.length; i++) {
         options46[i].checked = false;
     }
     const options47 = document.getElementsByName("no47");
     for (let i = 0; i < options47.length; i++) {
         options47[i].checked = false;
     }
     const options48 = document.getElementsByName("no48");
     for (let i = 0; i < options48.length; i++) {
         options48[i].checked = false;
     }
     const options49 = document.getElementsByName("no49");
     for (let i = 0; i < options49.length; i++) {
         options49[i].checked = false;
     }
  
     const options5033 = document.getElementsByName("no5033");
     for (let i = 0; i < options5033.length; i++) {
         optionsno5033[i].checked = false;
     }
     
    const optionsno511 = document.getElementsByName("no511");
    for (let i = 0; i < optionsno511.length; i++) {
        optionsno511[i].checked = false;
    }
    const optionsno512 = document.getElementsByName("no512");
    for (let i = 0; i < optionsno512.length; i++) {
        optionsno512[i].checked = false;
    }
    const optionsno513 = document.getElementsByName("no513");
    for (let i = 0; i < optionsno513.length; i++) {
        optionsno513[i].checked = false;
    }
    const optionsno514 = document.getElementsByName("no514");
    for (let i = 0; i < optionsno514.length; i++) {
        optionsno514[i].checked = false;
    }
  
    const optionsno515 = document.getElementsByName("no515");
    for (let i = 0; i < optionsno515.length; i++) {
        optionsno515[i].checked = false;
    }
  
     
  }
  
  function kirim15() {
    let poin15 = 0;
    const jno961 = document.querySelector("#jno961");
    const jno962 = document.querySelector("#jno962");
    const jno963 = document.querySelector("#jno963");
    const jno964 = document.querySelector("#jno964");
    const jno965 = document.querySelector("#jno965");
    const jno966 = document.querySelector("#jno966");
    const jno967 = document.querySelector("#jno967");
    const jno968 = document.querySelector("#jno968");
    const jno969 = document.querySelector("#jno969");
    const jno9610 = document.querySelector("#jno9610");
    const jno9611 = document.querySelector("#jno9611");
    const jno9612 = document.querySelector("#jno9612");
    const jno9613 = document.querySelector("#jno9613");
    const jno9614 = document.querySelector("#jno9614");
    const jno9615 = document.querySelector("#jno9615");
    const jno9616 = document.querySelector("#jno9616");
    const jno9617 = document.querySelector("#jno9617");
    const jno9618 = document.querySelector("#jno9618");
    const jno9619 = document.querySelector("#jno9619");
    const jno9620 = document.querySelector("#jno9620");
    const jno9621 = document.querySelector("#jno9621");
    const jno9622 = document.querySelector("#jno9622");
    const jno9623 = document.querySelector("#jno9623");
    const jno9624 = document.querySelector("#jno9624");
    const jno9625 = document.querySelector("#jno9625");
    
    
    const nilai15=document.querySelector('#nilai15')
  
  
    if (jno961.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno961.innerHTML = response;
  
    if (jno962.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno962.innerHTML = response;
  
    if (jno963.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno963.innerHTML = response;
  
    if (jno964.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno964.innerHTML = response;
  
   
  
    if (jno965.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno965.innerHTML = response;
    
    if (jno966.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno966.innerHTML = response;
    
    if (jno967.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno967.innerHTML = response;
    
    if (jno968.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno968.innerHTML = response;
    
    if (jno969.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno969.innerHTML = response;
  
  
    if (jno9610.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9610.innerHTML = response;
  
    if (jno9611.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9611.innerHTML = response;
    if (jno9612.checked) {
      response = "ok";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9612.innerHTML = response;
    if (jno9613.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9613.innerHTML = response;
    if (jno9614.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9614.innerHTML = response;
    if (jno9615.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9615.innerHTML = response;
  
    if (jno9616.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9616.innerHTML = response;
  
    if (jno9617.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9617.innerHTML = response;
  
    if (jno9618.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9618.innerHTML = response;
  
    if (jno9619.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9619.innerHTML = response;
  
    if (jno9620.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9620.innerHTML = response;
  
    if (jno9621.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9621.innerHTML = response;
  
    if (jno9622.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9622.innerHTML = response;
  
    if (jno9623.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9623.innerHTML = response;
  
    if (jno9624.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9624.innerHTML = response;
  
    if (jno9625.checked) {
      response = "";
      poin15 = poin15 + 10;
    } else {
      response = "";
    }
    rno9625.innerHTML = response;
  
    nilai15.innerHTML=poin15;
    
    localStorage.setItem("nil15",poin15);
juduln15.innerHTML=nil15;
    
     const options961 = document.getElementsByName("no961");
     for (let i = 0; i < options961.length; i++) {
         options961[i].checked = false;
     }
     const options962 = document.getElementsByName("no962");
     for (let i = 0; i < options962.length; i++) {
         options962[i].checked = false;
     }
     const options963 = document.getElementsByName("no963");
     for (let i = 0; i < options963.length; i++) {
         options963[i].checked = false;
     }
     const options964 = document.getElementsByName("no964");
     for (let i = 0; i < options964.length; i++) {
         options964[i].checked = false;
     }
  
     const options965 = document.getElementsByName("no965");
     for (let i = 0; i < options965.length; i++) {
         options965[i].checked = false;
     }
     const options966 = document.getElementsByName("no966");
     for (let i = 0; i < options966.length; i++) {
         options966[i].checked = false;
     }
     const options967 = document.getElementsByName("no967");
     for (let i = 0; i < options967.length; i++) {
         options967[i].checked = false;
     }
     const options968 = document.getElementsByName("no968");
     for (let i = 0; i < options968.length; i++) {
         options968[i].checked = false;
     }
     const options969 = document.getElementsByName("no969");
     for (let i = 0; i < options969.length; i++) {
         options969[i].checked = false;
     }
  
     const options9610 = document.getElementsByName("no9610");
     for (let i = 0; i < options9610.length; i++) {
         options9610[i].checked = false;
     }
    const options9611 = document.getElementsByName("no9611");
     for (let i = 0; i < options9611.length; i++) {
         options9611[i].checked = false;
     }
     const options9612 = document.getElementsByName("no9612");
     for (let i = 0; i < options9612.length; i++) {
         options9612[i].checked = false;
     }
     const options9613 = document.getElementsByName("no9613");
     for (let i = 0; i < options9613.length; i++) {
         options9613[i].checked = false;
     }
     const options9614 = document.getElementsByName("no9614");
     for (let i = 0; i < options9614.length; i++) {
         options9614[i].checked = false;
     }
  
     const options9615 = document.getElementsByName("no9615");
     for (let i = 0; i < options9615.length; i++) {
         options9615[i].checked = false;
     }
  
     const options9616 = document.getElementsByName("no9616");
     for (let i = 0; i < options9616.length; i++) {
         options9616[i].checked = false;
     }
     const options9617 = document.getElementsByName("no9617");
     for (let i = 0; i < options9617.length; i++) {
         options9617[i].checked = false;
     }
     const options9618 = document.getElementsByName("no9618");
     for (let i = 0; i < options9618.length; i++) {
         options9618[i].checked = false;
     }
     const options9619 = document.getElementsByName("no9619");
     for (let i = 0; i < options9619.length; i++) {
         options9619[i].checked = false;
     }
  
     const options9620 = document.getElementsByName("no9620");
     for (let i = 0; i < options9620.length; i++) {
         options9620[i].checked = false;
     }
     
     const options9621 = document.getElementsByName("no9621");
     for (let i = 0; i < options9621.length; i++) {
         options9621[i].checked = false;
     }
     const options9622 = document.getElementsByName("no9622");
     for (let i = 0; i < options9622.length; i++) {
         options9622[i].checked = false;
     }
     const options9623 = document.getElementsByName("no9623");
     for (let i = 0; i < options9623.length; i++) {
         options9623[i].checked = false;
     }
     const options9624 = document.getElementsByName("no9624");
     for (let i = 0; i < options9624.length; i++) {
         options9624[i].checked = false;
     }
  
     const options9625 = document.getElementsByName("no9625");
     for (let i = 0; i < options9625.length; i++) {
         options9625[i].checked = false;
     }
     
  }
  
  function kirim16() {
    let poin16 = 0;
    const jno61 = document.querySelector("#jno61");
    const jno62 = document.querySelector("#jno62");
    const jno63 = document.querySelector("#jno63");
    const jno64 = document.querySelector("#jno64");
    const jno65 = document.querySelector("#jno65");
    const jno66 = document.querySelector("#jno66");
    const jno67 = document.querySelector("#jno67");
    const jno68 = document.querySelector("#jno68");
    const jno69 = document.querySelector("#jno69");
    const jno70 = document.querySelector("#jno70");
    
    const rsno41=document.querySelector('#rsno41');
    const rsno42=document.querySelector('#rsno42');
    const rsno43=document.querySelector('#rsno43');
    const rsno44=document.querySelector('#rsno44');
    const rsno45=document.querySelector('#rsno45');
    
    

  const sno41=document.querySelector('#sno41')
  const sno42=document.querySelector('#sno42')
  const sno43=document.querySelector('#sno43')
  const sno44=document.querySelector('#sno44')
  const sno45=document.querySelector('#sno45')
  const nilai16=document.querySelector('#nilai16');
  
  
  
    if (jno61.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno61.innerHTML = response;
  
    if (jno62.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno62.innerHTML = response;
  
    if (jno63.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno63.innerHTML = response;
  
    if (jno64.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno64.innerHTML = response;
  
    if (jno65.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno65.innerHTML = response;
  
  
    if (jno66.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno66.innerHTML = response;
  
    if (jno67.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno67.innerHTML = response;
  
    if (jno68.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno68.innerHTML = response;
  
    if (jno69.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno69.innerHTML = response;
  
    if (jno70.checked) {
      response = "";
      poin16 = poin16 + 10;
    } else {
      response = "";
    }
    rno70.innerHTML = response;
  
  if (sno41.value == "4") {
  response = "ok";
  poin16 = poin16 + 10;
} else {
  response = "";
}
rsno41.innerHTML = response;

if (sno42.value == "5") {
  response = "ok";
  poin16 = poin16 + 10;
} else {
  response = "";
}
rsno42.innerHTML = response;

if (sno43.value == "4") {
  response = "ok";
  poin16 = poin16 + 10;
} else {
  response = "";
}
rsno43.innerHTML = response;

if (sno44.value == "-10") {
  response = "ok";
  poin16 = poin16 + 10;
} else {
  response = "";
}
rsno44.innerHTML = response;

if (sno45.value == "2") {
  response = "ok";
  poin16 = poin16 + 10;
} else {
  response = "";
}
rsno45.innerHTML = response;


  nilai16.innerHTML=poin16;
    
  localStorage.setItem("nil16",poin16);
juduln16.innerHTML=nil16;

     const optionsno61 = document.getElementsByName("no61");
     for (let i = 0; i < optionsno61.length; i++) {
         optionsno61[i].checked = false;
     }
     const optionsno62 = document.getElementsByName("no62");
     for (let i = 0; i < optionsno62.length; i++) {
         optionsno62[i].checked = false;
     }
     const optionsno63 = document.getElementsByName("no63");
     for (let i = 0; i < optionsno63.length; i++) {
         optionsno63[i].checked = false;
     }
     const optionsno64 = document.getElementsByName("no64");
     for (let i = 0; i < optionsno64.length; i++) {
         optionsno64[i].checked = false;
     }
  
     const optionsno65 = document.getElementsByName("no65");
     for (let i = 0; i < optionsno65.length; i++) {
         optionsno65[i].checked = false;
     }
   
     const optionsno66 = document.getElementsByName("no66");
     for (let i = 0; i < optionsno66.length; i++) {
         optionsno66[i].checked = false;
     }
     const optionsno67 = document.getElementsByName("no67");
     for (let i = 0; i < optionsno67.length; i++) {
         optionsno67[i].checked = false;
     }
     const optionsno68 = document.getElementsByName("no68");
     for (let i = 0; i < optionsno68.length; i++) {
         optionsno68[i].checked = false;
     }
     const optionsno69 = document.getElementsByName("no69");
     for (let i = 0; i < optionsno69.length; i++) {
         optionsno69[i].checked = false;
     }
  
     const optionsno70 = document.getElementsByName("no70");
     for (let i = 0; i < optionsno70.length; i++) {
         optionsno70[i].checked = false;
     }
     
  }
  
  function kirim17() {
  let poin17 = 0;
  const nilai17=document.querySelector('#nilai17');

const jno1701 = document.querySelector("#jno1701");
    const jno1702 = document.querySelector("#jno1702");
    const jno1703 = document.querySelector("#jno1703");
    const jno1704 = document.querySelector("#jno1704");
    const jno1705 = document.querySelector("#jno1705");
    const jno1706 = document.querySelector("#jno1706");
    const jno1707 = document.querySelector("#jno1707");
    const jno1708 = document.querySelector("#jno1708");
    const jno1709 = document.querySelector("#jno1709");
    const jno1710 = document.querySelector("#jno1710");
    const jno1711 = document.querySelector("#jno1711");
    const jno1712 = document.querySelector("#jno1712");
     const jno1713 = document.querySelector("#jno1713");
    const jno1714 = document.querySelector("#jno1714");
    const jno1715 = document.querySelector("#jno1715");
    const jno1716 = document.querySelector("#jno1716");
    
    
    
     if (jno1701.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1701.innerHTML = response;
    
    if (jno1702.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1702.innerHTML = response;
    if (jno1703.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1703.innerHTML = response;
    if (jno1704.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1704.innerHTML = response;
    if (jno1705.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1705.innerHTML = response;
    if (jno1706.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1706.innerHTML = response;
    if (jno1707.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1707.innerHTML = response;
    
    if (jno1708.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1708.innerHTML = response;
    
    if (jno1709.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1709.innerHTML = response;
    
if (jno1710.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1710.innerHTML = response;
    

if (jno1711.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1711.innerHTML = response;
  
  
if (jno1712.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1712.innerHTML = response;
  
  
if (jno1713.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1713.innerHTML = response;
    
    
if (jno1714.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1714.innerHTML = response;
    
    
if (jno1715.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1715.innerHTML = response;
    
if (jno1716.checked) {
      response = "";
      poin17 = poin17 + 10;
    } else {
      response = "";
    }
    rno1716.innerHTML = response;
    
nilai17.innerHTML=poin17;


localStorage.setItem("nil17",poin17);
juduln17.innerHTML=nil17;

}


 function kirim18() {
  let poin18 = 0;
  const nilai18=document.querySelector('#nilai18');

const jno1801 = document.querySelector("#jno1801");
    const jno1802 = document.querySelector("#jno1802");
    const jno1803 = document.querySelector("#jno1803");
    const jno1804 = document.querySelector("#jno1804");
    const jno1805 = document.querySelector("#jno1805");
    const jno1806 = document.querySelector("#jno1806");
     const jno1807 = document.querySelector("#jno1807");
    const jno1808 = document.querySelector("#jno1808");
    const jno1809 = document.querySelector("#jno1809");
    const jno1810 = document.querySelector("#jno1810");
    
    
     if (jno1801.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1801.innerHTML = response;
    
    if (jno1802.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1802.innerHTML = response;
    if (jno1803.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1803.innerHTML = response;
    if (jno1804.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1804.innerHTML = response;
    if (jno1805.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1805.innerHTML = response;
    if (jno1806.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1806.innerHTML = response;
    
     if (jno1807.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1807.innerHTML = response;
    
    if (jno1808.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1808.innerHTML = response;
    if (jno1809.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1809.innerHTML = response;
    if (jno1810.checked) {
      response = "";
      poin18 = poin18 + 10;
    } else {
      response = "";
    }
    rno1810.innerHTML = response;

    


  
nilai18.innerHTML=poin18;


  

localStorage.setItem("nil18",poin18);
juduln18.innerHTML=nil18;
}

  

  
  function kirim19() {
    let poin19 = 0;
    const jno1901 = document.querySelector("#jno1901");
    const jno1902 = document.querySelector("#jno1902");
    const jno1903 = document.querySelector("#jno1903");
    const jno1904 = document.querySelector("#jno1904");
    const jno1905 = document.querySelector("#jno1905");
    const jno1906 = document.querySelector("#jno1906");
    const jno1907 = document.querySelector("#jno1907");
    const jno1908 = document.querySelector("#jno1908");
    const nilai19=document.querySelector('#nilai19');
    if (jno1901.checked) {
      response = "";
      poin19 = poin19 + 10;
    } else {
      response = "";
    }
    rno1901.innerHTML = response;

    if (jno1902.checked) {
      response = "";
      poin19 = poin19 + 10;
    } else {
      response = "";
    }
    rno1902.innerHTML = response;
    if (jno1903.checked) {
      response = "";
      poin19 = poin19 + 10;
    } else {
      response = "";
    }
    rno1903.innerHTML = response;
    if (jno1904.checked) {
      response = "";
      poin19 = poin19 + 10;
    } else {
      response = "";
    }
    rno1904.innerHTML = response;
    if (jno1905.checked) {
      response = "";
      poin19 = poin19 + 10;
    } else {
      response = "";
    }
    rno1905.innerHTML = response;
    if (jno1906.checked) {
      response = "";
      poin19 = poin19 + 10;
    } else {
      response = "";
    }
    rno1906.innerHTML = response;
    if (jno1907.checked) {
      response = "";
      poin19 = poin19 + 10;
    } else {
      response = "";
    }
    rno1907.innerHTML = response;
    if (jno1908.checked) {
      response = "";
      poin19 = poin19 + 10;
    } else {
      response = "";
    }
    rno1908.innerHTML = response;



    nilai19.innerHTML=poin19;
    localStorage.setItem("nil19",poin19);
juduln19.innerHTML=nil19;
  
  }

function kirim20() {
  let poin20 = 0;
  const nilai20=document.querySelector('#nilai20');


  
nilai20.innerHTML=poin20;


localStorage.setItem("nil20",poin20);
juduln20.innerHTML=nil20;
}

function kirim21() {
  let poin21 = 0;
  const jno2101 = document.querySelector("#jno2101");
  const jno2102 = document.querySelector("#jno2102");
  const jno2103 = document.querySelector("#jno2103");
   const jno2104 = document.querySelector("#jno2104");
  const jno2105 = document.querySelector("#jno2105");
  // const jno2106 = document.querySelector("#jno2106");
  // const jno2107 = document.querySelector("#jno2107");
  // const jno2108 = document.querySelector("#jno2108");
  // const jno2109 = document.querySelector("#jno2109");
  // const jno2110 = document.querySelector("#jno2110");
  const nilai21=document.querySelector('#nilai21')
  
  if (jno2101.checked) {
    response = "ok";
    poin21 = poin21 + 10;
  } else {
    response = "x";
  }
rno2101.innerHTML = response;

if (jno2102.checked) {
  response = "ok";
  poin21 = poin21 + 10;
} else {
  response = "x";
}
rno2102.innerHTML = response;

if (jno2103.checked) {
  response = "ok";
  poin21 = poin21 + 10;
} else {
  response = "x";
}
rno2103.innerHTML = response;

 if (jno2104.checked) {
   response = "ok";
 poin21 = poin21 + 10;
} else {
 response = "x";
 }
rno2104.innerHTML = response;

 if (jno2105.checked) {
 response = "ok";
poin21 = poin21 + 10;
 } else {
 response = "x";
 }
rno2105.innerHTML = response;

// if (jno2106.checked) {
//   response = "ok";
//   poin21 = poin21 + 10;
// } else {
//   response = "";
// }
// rno2106.innerHTML = response;
// if (jno2107.checked) {
//   response = "ok";
//   poin21 = poin21 + 10;
// } else {
//   response = "";
// }
// rno2107.innerHTML = response;
// if (jno2108.checked) {
//   response = "ok";
//   poin21 = poin21 + 10;
// } else {
//   response = "";
// }
// rno2108.innerHTML = response;
// if (jno2109.checked) {
//   response = "ok";
//   poin21 = poin21 + 10;
// } else {
//   response = "";
// }
// rno2109.innerHTML = response;
// if (jno2110.checked) {
//   response = "ok";
//   poin21 = poin21 + 10;
// } else {
//   response = "";
// }
// rno2110.innerHTML = response;



nilai21.innerHTML=poin21;

localStorage.setItem("nil21",poin21);
juduln21.innerHTML=nil21;

const optionsno2101 = document.getElementsByName("no2101");
   for (let i = 0; i < optionsno2101.length; i++) {
       optionsno2101[i].checked = false;
   }

   const optionsno2102 = document.getElementsByName("no2102");
   for (let i = 0; i < optionsno2102.length; i++) {
       optionsno2102[i].checked = false;
   }

   const optionsno2103 = document.getElementsByName("no2103");
   for (let i = 0; i < optionsno2103.length; i++) {
       optionsno2103[i].checked = false;
   }


   const optionsno2104 = document.getElementsByName("no2104");
   for (let i = 0; i < optionsno2104.length; i++) {
       optionsno2104[i].checked = false;
    }

   
   const optionsno2105 = document.getElementsByName("no2105");
   for (let i = 0; i < optionsno2105.length; i++) {
      optionsno2105[i].checked = false;
   }
   
  //  const optionsno2106 = document.getElementsByName("no2106");
  //  for (let i = 0; i < optionsno2106.length; i++) {
  //      optionsno2106[i].checked = false;
  //  }

  //  const optionsno2107 = document.getElementsByName("no2107");
  //  for (let i = 0; i < optionsno2107.length; i++) {
  //      optionsno2107[i].checked = false;
  //  }
  //  const optionsno2108 = document.getElementsByName("no2108");
  //  for (let i = 0; i < optionsno2108.length; i++) {
  //      optionsno2108[i].checked = false;
  //  }
  //  const optionsno2109 = document.getElementsByName("no2109");
  //  for (let i = 0; i < optionsno2109.length; i++) {
  //      optionsno2109[i].checked = false;
  //  }
  //  const optionsno2110 = document.getElementsByName("no2110");
  //  for (let i = 0; i < optionsno2110.length; i++) {
  //      optionsno2110[i].checked = false;
  //  }


  }