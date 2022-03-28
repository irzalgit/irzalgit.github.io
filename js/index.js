const questions = [
    {
        question: "Perbandingan sisi depan dengan sisi miring adalah ?",
        optionA: "sin ",
        optionB: "cos",
        optionC: "tan ",
        optionD: "sec ",
        correctOption: "optionA"
    },

    {
        question: "Yang termasuk tripel phytagoras ?",
        optionA: "3,4,6",
        optionB: "3,4,5",
        optionC: "4,5,6",
        optionD: "5,10,12",
        correctOption: "optionB"
    },

    {
        question: "Grafik sinus pada kuadran IV  ",
        optionA: "naik",
        optionB: "turun",
        optionC: "datar",
        optionD: "tak tentu",
        correctOption: "optionA"
    },

    {
        question: "jika tripel phytagoras adalah {3,4,5} maka maka salah satu sinusnya adalah ",
        optionA: "1/3",
        optionB: "3/5",
        optionC: "4/3",
        optionD: "1/2",
        correctOption: "optionB"
    },

    {
        question: "sisi terpanjang atau garis miring dari tripel phytagoras {3,4,5} adalah",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        optionD: "6",
        correctOption: "optionC"
    },

    {
        question: "Jumlah sudut-sudut dalam segitiga adalah",
        optionA: "30&#176",
        optionB: "90&#176",
        optionC: "180&#176",
        optionD: "360&#176",
        correctOption: "optionC"
    },

    {
        question: "dalam segitiga siku siku, jika sudut alpha 30 derajat, maka sudut beta adalah",
        optionA: "10&#176",
        optionB: "60&#176",
        optionC: "80&#176",
        optionD: "90 &#176",
        correctOption: "optionB"
    },

    {
        question: "Jumlah sudut alpha dan sudut beta dalam segitiga siku-siku adalah",
        optionA: "30 &#176",
        optionB: "60 &#176",
        optionC: "90 &#176",
        optionD: "180&#176",
        correctOption: "optionC"
    },

    {
        question: "Sudut 180 derajat jika dikonversi ke radian adalah",
        optionA: "2&#8508",
        optionB: "1&#8508",
        optionC: "1/2.&#8508",
        optionD: "1/3.&#8508",
        correctOption: "optionB"
    },

    {
        question: "Sudut 30 derajat jika dikonversi ke radian adalah",
        optionA: "1/3.&#8508",
        optionB: "1/4.&#8508",
        optionC: "1/6.&#8508",
        optionD: "1/9.&#8508",
        correctOption: "optionC"
    },

    {
        question: "Sin 30 = ",
        optionA: "cos 60",
        optionB: "cos 30",
        optionC: "cos 45",
        optionD: "cos 90",
        correctOption: "optionA"
    },

    {
        question: "sin A dan cos A dikuadran 1 memiliki tanda ",
        optionA: "positif dan positif",
        optionB: "negatif dan negatif",
        optionC: "positif dan negatif",
        optionD: "negatif dan positif",
        correctOption: "optionA"
    },

    {
        question: "sin dan cos dibawah ini yang nilainya 1/2 , kecuali ?",
        optionA: "cos 60",
        optionB: "sin 30",
        optionC: "sin 150",
        optionD: "cos 120",
        correctOption: "optionD"
    },

    {
        question: "sudut 380 berada di kuadran ... ?",
        optionA: "I",
        optionB: "II",
        optionC: "III",
        optionD: "IV",
        correctOption: "optionA"
    },

    {
        question: "sin(180 + 30) =...",
        optionA: "sin 30",
        optionB: "-sin 30",
        optionC: "sin 60",
        optionD: "-sin 60",
        correctOption: "optionB"
    },

    {
        question: "sin(90-30)=...",
        optionA: "cos 30",
        optionB: "sin 30",
        optionC: "-cos 30",
        optionD: "-sin 30",
        correctOption: "optionA"
    },


    {
        question: "Jika sisi miring segitiga siku sama dengan 1 , maka sisi didepan sudut A sama dengan ...",
        optionA: "cos A",
        optionB: "sin A",
        optionC: "tan A",
        optionD: "csc A",
        correctOption: "optionB"
    },

    {
        question: "Diketahui sisi-sisi segitiga masing masing a=7, b=24 dan c=25.Keliling segitiga ini sama dengan ...",
        optionA: "28",
        optionB: "38",
        optionC: "56",
        optionD: "60",
        correctOption: "optionC"
    },
   
    {
        question: "Diketahui sisi-sisi segitiga masing masing a=7, b=24 dan c=25. Luas segitiga ini sama dengan ...",
        optionA: "80",
        optionB: "68",
        optionC: "84",
        optionD: "100",
        correctOption: "optionC"
    },
   
    {
        question: "sin(-30) =...",
        optionA: "sin(180+30)",
        optionB: "sin(360-30)",
        optionC: "sin(360+30)",
        optionD: "sin(180-30)",
        correctOption: "optionB"
    },

    {
        question: "sin 45=...",
        optionA: "cos 45",
        optionB: "-cos 45",
        optionC: "cos -45",
        optionD: "1/2.sin(90)",
        correctOption: "optionA"
    },

    {
        question: "sudut 114,6 &#176 jika dikonversi ke radian sama dengan ",
        optionA: "1 rad",
        optionB: "1,5 rad",
        optionC: "2 rad",
        optionD: "1/2 rad",
        correctOption: "optionC"
    },

    {
        question: "yang termasuk sudut istimewa, kecuali ",
        optionA: "30",
        optionB: "45",
        optionC: "60",
        optionD: "75",
        correctOption: "optionD"
    },

    {
        question: "jika sin A = 1/2 maka csc A adalah ?",
        optionA: "1/3",
        optionB: "2",
        optionC: "3",
        optionD: "1/4",
        correctOption: "optionB"
    },

    {
        question: "cos A=-1, maka besar sudut A adalah  ",
        optionA: "0",
        optionB: "90",
        optionC: "180",
        optionD: "270",
        correctOption: "optionC"
    },

    {
        question: "jika sec A= 3/2 maka cos A=... ?",
        optionA: "2",
        optionB: "2/3",
        optionC: "1/3",
        optionD: "1/4",
        correctOption: "optionB"
    },

    {
        question: "tan 45 =  ",
        optionA: "1",
        optionB: "1/2",
        optionC: "1/&#8730;2",
        optionD: "&#8730;2",
        correctOption: "optionA"
    },

    {
        question: "cos 60 + sin 30 = ... ",
        optionA: "2",
        optionB: "1",
        optionC: "0",
        optionD: "1/2",
        correctOption: "optionB"
    },

    {
        question: "jika sin A = 0,6 dan cos A = 0,8 maka tan A= ... ",
        optionA: "3/4",
        optionB: "5/3",
        optionC: "3/5",
        optionD: "4/3",
        correctOption: "optionA"
    }, 

    {
        question: "jika sin A=3/5 maka sec A = ",
        optionA: "5/4",
        optionB: "5/3",
        optionC: "3/4",
        optionD: "4/3",
        correctOption: "optionA"
    },

    {
        question: "Luas segitiga sama sisi dengan sisi = 4  adalah ",
        optionA: "12",
        optionB: "6",
        optionC: "24",
        optionD: " &#8730;48 ",
        correctOption: "optionD"
    },

    {
        question: "jika tan A=3/4 maka cot A=",
        optionA: "3/5",
        optionB: "4/5",
        optionC: "4/3",
        optionD: "5/3",
        correctOption: "optionC"
    },

    {
        question: "fungsi y=sin x dikuadran I ",
        optionA: "naik",
        optionB: "turun",
        optionC: "tetap",
        optionD: "naik turun",
        correctOption: "optionA"
    },

    {
        question: "Dalam segitiga bukan siku, jika a dan b diketahui maka c ditentukan dengan ... ",
        optionA: "teorema phytagoras",
        optionB: "tripel phytagoras",
        optionC: "aturan cosinus",
        optionD: "aturan sinus",
        correctOption: "optionC"
    },
    
    {
        question: "perbandingan antara sisi depan dengan sisi samping adalah definisi dari  ",
        optionA: "sin",
        optionB: "cos",
        optionC: "tan",
        optionD: "cot",
        correctOption: "optionC"
    },

    {
        question: "jika cos A=7/25 maka sec A =   ",
        optionA: "25/24",
        optionB: "25/7",
        optionC: "24/25",
        optionD: "7/24",
        correctOption: "optionB"
    },

    {
        question: "kebalikan atau invers dari sin adalah  ",
        optionA: "csc",
        optionB: "sec",
        optionC: "cot",
        optionD: "cos",
        correctOption: "optionA"
    },

    {
        question: "cos 0 =  ",
        optionA: "0",
        optionB: "1",
        optionC: "-1",
        optionD: "1/2",
        correctOption: "optionB"
    },

    {
        question: "cos 180   =  ",
        optionA: "0",
        optionB: "1",
        optionC: "-1",
        optionD: "1/2",
        correctOption: "optionC"
    },

    {
        question: "sin 30=...  ",
        optionA: "-sin 120",
        optionB: "sin 210",
        optionC: "-sin 330",
        optionD: "sin-30",
        correctOption: "optionC"
    },

    {
        question: "jika sin A diketahui, maka cos A dapat ditentukan dengan ",
        optionA: "identitas trigonometri",
        optionB: "tripel phytagoras",
        optionC: "aturan cosinus",
        optionD: "aturan sinus",
        correctOption: "optionA"
    },

    {
        question: "luas segitiga yang sisi-sisinya 3,4,3 adalah",
        optionA: "5 ",
        optionB: "4",
        optionC: "3",
        optionD: " &#8730;20 ",
        correctOption: "optionD"
    },
   
    {
        question: "Pada segitika ABC sebarang diketahui AC=5 , BC=4, dan sin A= 3/5. Nilai cos B adalah ...",
        optionA: "1/3. &#8730 7 ",
        optionB: "3/7. &#8730 7",
        optionC: "4/5",
        optionD: " 1/4. &#8730 7 ",
        correctOption: "optionD"
    },

    {
        question: "grafik sinus naik pada kuadran ...",
        optionA: "I dan II ",
        optionB: "I dan III",
        optionC: "I dan III",
        optionD: "I dan IV ",
        correctOption: "optionD"
    },

      {
        question: "grafik sinus dan grafik cosinus berpotongan  pada kuadran ...",
        optionA: "I dan II ",
        optionB: "II dan III",
        optionC: "I dan III",
        optionD: "I dan IV ",
        correctOption: "optionC"
    },

  
    
    {
        question: "Bentuk lain aturan sinus",
        optionA: "a : b = sin A : sin B",
        optionB: "a : b = sin B : sin A",
        optionC: "a : sin B = b : sin A",
        optionD: "a : sin A = sin B : b",
        correctOption: "optionA"
    },

    {
        question: "sudut 120 berada dikuadran ...",
        optionA: "I",
        optionB: "II",
        optionC: "III",
        optionD: "IV",
        correctOption: "optionB"
    },

    {
        question: "sin 45 =  , kecuali ...",
        optionA: "cos 45",
        optionB: "sin 135",
        optionC: "sin 225",
        optionD: "-sin 225",
        correctOption: "optionC"
    },

    {
        question: "luas segitiga yang sisi-sisinya 3 , 4 dan 5 adalah",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        optionD: "8",
        correctOption: "optionB"
    },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = ""
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Kurang, C"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Cukup , B"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent , baik , A"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
