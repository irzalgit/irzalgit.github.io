const questions = [
    {
        question: 'Vektor adalah besaran yang memiliki ',
        optionA: "arah",
        optionB: "arah dan nilai",
        optionC: "nilai ",
        optionD: "nilai dan ukuran ",
        correctOption: "optionB"
    },

    {
        question: 'dibawah ini besaran vektor, kecuali',
        optionA: "kecepatam mobil",
        optionB: "arah angin",
        optionC: "jumlah siswa dalam kelas",
        optionD: "dorongan mesin",
        correctOption: "optionC"
    },

    {
        
        question: 'vektor satuan arah x+ adalah',
        optionA: 'i',
        optionB: "j",
        optionC: "k",
        optionD: "-i",
        correctOption: "optionA"
    },

    {
        question: "besar i adalah  ",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        optionD: "3",
        correctOption: "optionB"
    },

    {
        question: "jika vektor a bergerak 5 satuan  kex+ ditulis ",
        optionA: "2i",
        optionB: "4i",
        optionC: "5i",
        optionD: "9i",
        correctOption: "optionC"
    },

    {
        question: 'arah vektor v=3i+3j',
        optionA: "30&#176",
        optionB: "45&#176",
        optionC: "180&#176",
        optionD: "360&#176",
        correctOption: "optionB"
    },

    {
        question: "jika a=5i dan b=3i+2j maka a+2b adalah",
        optionA: "8i+2j",
        optionB: "11i+4j",
        optionC: "11j+2j",
        optionD: "8i",
        correctOption: "optionB"
    },

    {
        question: "jika a=i+3j maka 4a adalah",
        optionA: "4i+3j",
        optionB: "i+7j",
        optionC: "4i+12j",
        optionD: "4i-12j",
        correctOption: "optionC"
    },

    {
        question: "jika c=2i+3j maka c.c adalah",
        optionA: "&#8730;13",
        optionB: "13",
        optionC: "5",
        optionD: "7",
        correctOption: "optionB"
    },

    {
        question: "jika d=5i+12j maka besar d adalah",
        optionA: "11",
        optionB: "12",
        optionC: "13",
        optionD: "25",
        correctOption: "optionC"
    },

    {
        question: "jika a=3i+2j dan b=2i-5j maka b-a adalah",
        optionA: "-i-7j",
        optionB: "i-7j",
        optionC: "-i+3j",
        optionD: "i-3j",
        correctOption: "optionA"
    },

    {
        question: "i.j=? ",
        optionA: "0",
        optionB: "1",
        optionC: "-1",
        optionD: "2",
        correctOption: "optionA"
    },

    {
        question: "(3i+5j).(2i-j)",
        optionA: "6i+j",
        optionB: "6i-5j",
        optionC: "6i+5j",
        optionD: "1",
        correctOption: "optionD"
    },

    {
        question: "jika anak panah dengan kecepatan v=20 satuan , melesat keatas dengan sudut 60, maka kecepatan bayangannya",
        optionA: "10",
        optionB: "12",
        optionC: "15",
        optionD: "20",
        correctOption: "optionA"
    },

    {
        question: "arah vektor a=2i+5j adalah",
        optionA: "arc tan 5/4",
        optionB: "arc tan 5/2",
        optionC: "arc tan 2/5",
        optionD: "arc tan 5/4",
        correctOption: "optionB"
    },
    {
        question: "besar vektor satuan a=3i+4j adalah ",
        optionA: "3i+4j",
        optionB: "3/5i+4/5j",
        optionC: "5",
        optionD: "5i",
        correctOption: "optionB"
    },

    {
        question: "jika b=2i maka besar vektor satuannya adalah",
        optionA: "i",
        optionB: "2i",
        optionC: "2",
        optionD: "1",
        correctOption: "optionA"
    },

    {
        question: "jika a=5j , b=i-j , c= 2i maka besar d=a+b+c  adalah",
        optionA: "3",
        optionB: "5",
        optionC: "7",
        optionD: "8",
        correctOption: "optionB"
    },


    {
        question: "Sebuah benda dtarik oleh  2 gaya yaitu F1=3i+4j dan F2=-2j maka resultannya adalah",
        optionA: "3i+5j",
        optionB: "3i+2j",
        optionC: "3i-2j",
        optionD: "5i-j",
        correctOption: "optionB"
    },

    {
        question: "besar/nilai vektor a=-2i-5j adalah",
        optionA: "&#8730;20",
        optionB: "&#8730;29",
        optionC: "&#8730;21",
        optionD: "&#8730;50",
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
    document.getElementById("display-question").innerHTML = currentQuestion.question;
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
