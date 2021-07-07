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
        optionA: "30 derajat",
        optionB: "90 derajat",
        optionC: "180 derajat",
        optionD: "360 derajat",
        correctOption: "optionC"
    },

    {
        question: "dalam segitiga siku siku, jika sudut alpha 30 derajat, maka sudut beta adalah",
        optionA: "10 derajat",
        optionB: "60 derajat",
        optionC: "80 derajat",
        optionD: "90 derajat",
        correctOption: "optionB"
    },

    {
        question: "Jumlah sudut alpha dan sudut beta dalam segitiga siku-siku adalah",
        optionA: "30 derajat",
        optionB: "60 derajat",
        optionC: "90 derajat",
        optionD: "180 derajat",
        correctOption: "optionC"
    },

    {
        question: "Sudut 180 derajat jika dikonversi ke radian adalah",
        optionA: "2 phi",
        optionB: "1 phi",
        optionC: "1/2. phi",
        optionD: "1/3. phi",
        correctOption: "optionB"
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
        question: "sudut 120 berada dikuadran ...",
        optionA: "I",
        optionB: "II",
        optionC: "III",
        optionD: "IV",
        correctOption: "optionB"
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
        question: "jika sec A= 3/2 maka cos A=... ?",
        optionA: "2",
        optionB: "2/3",
        optionC: "1/3",
        optionD: "1/4",
        correctOption: "optionB"
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
        question: "jika sin A diketahui, maka cos A dapat ditentukan dengan ",
        optionA: "identitas phytagoras",
        optionB: "tripel phytagoras",
        optionC: "aturan cosinus",
        optionD: "aturan sinus",
        correctOption: "optionB"
    },

    {
        question: "luas segitiga yang sisi-sisinya 3,4,3 adalah",
        optionA: "5 ",
        optionB: "4",
        optionC: "3",
        optionD: "V10",
        correctOption: "optionD"
    },

    {
        question: "luas segitiga yang sisi-sisinya 3 ,4 dan 5 adalah",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        optionD: "8",
        correctOption: "optionB"
    }

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
            document.getElementById(correctOption).style.backgroundColor = "green"
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
