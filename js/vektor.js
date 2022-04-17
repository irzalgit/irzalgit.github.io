 
  function kirimvektor(){
    const jno1=document.querySelector('#jno1')
    const jno2=document.querySelector('#jno2')
    const jno3=document.querySelector('#jno3')
    const jno4=document.querySelector('#jno4')
    const jno5=document.querySelector('#jno5')
    const jno6=document.querySelector('#jno6')
    const jno7=document.querySelector('#jno7')
    const jno8=document.querySelector('#jno8')
    const jno9=document.querySelector('#jno9')
    const jno10=document.querySelector('#jno10')



    const sno1=document.querySelector('#sno1')
    const sno2=document.querySelector('#sno2')
    const sno3=document.querySelector('#sno3')
    const sno4=document.querySelector('#sno4')
    const sno5=document.querySelector('#sno5')
    const sno6=document.querySelector('#sno6')
    const sno7=document.querySelector('#sno7')
    const sno8=document.querySelector('#sno8')
    const sno9=document.querySelector('#sno9')
    const sno10=document.querySelector('#sno10')





    const rno1=document.querySelector('#rno1')
    const rno2=document.querySelector('#rno2')
    const rno3=document.querySelector('#rno3')
    const rno4=document.querySelector('#rno4')
    const rno5=document.querySelector('#rno5')
    const rno6=document.querySelector('#rno6')
    const rno7=document.querySelector('#rno7')
    const rno8=document.querySelector('#rno8')
    const rno9=document.querySelector('#rno9')
    const rno10=document.querySelector('#rno10')

    const rsno1=document.querySelector('#rsno1')
    const rsno2=document.querySelector('#rsno2')
    const rsno3=document.querySelector('#rsno3')
    const rsno4=document.querySelector('#rsno4')
    const rsno5=document.querySelector('#rsno5')
    const rsno6=document.querySelector('#rsno6')
    const rsno7=document.querySelector('#rsno7')
    const rsno8=document.querySelector('#rsno8')
    const rsno9=document.querySelector('#rsno9')
    const rsno10=document.querySelector('#rsno10')







    const nilai=document.querySelector('#nilai')


    let response
    let poin=0
    if (jno1.checked){
      response="benar"
      poin=poin+10
    }else {
      response=""
    }
    rno1.innerHTML=response
  

  if (jno2.checked){
    response="benar"
    poin=poin+10
  }else {
    response=""
  }
  rno2.innerHTML=response

  if (jno3.checked){
    response=" benar"
    poin=poin+10
  }else {
    response=""
  }
  rno3.innerHTML=response


if (jno4.checked){
  response=" benar"
  poin=poin+10
}else {
  response=""
}
rno4.innerHTML=response




  if (jno5.checked){
    response="benar"
    poin=poin+10
  }else {
    response=" "
  }
  rno5.innerHTML=response


if (jno6.checked){
  response="benar"
  poin=poin+10
}else {
  response=""
}
rno6.innerHTML=response


if (jno7.checked){
    response=" benar"
    poin=poin+10
  }else {
    response=""
  }
  rno7.innerHTML=response


if (jno8.checked){
  response="benar"
  poin=poin+10
}else {
  response=""
}
rno8.innerHTML=response

if (jno9.checked){
    response="benar"
    poin=poin+10
  }else {
    response=""
  }
  rno9.innerHTML=response


if (jno10.checked){
  response="benar"
  poin=poin+10
}else {
  response=""
}
rno10.innerHTML=response


if (sno1.value=="5"){
    response="benar"; poin=poin+10} 
else {response=""}
rsno1.innerHTML=response
nilai.innerHTML=poin
  
  

   if (sno2.value=="45"){
     response="benar"
     poin=poin+10
   }else {
     response=""
   }
   rsno2.innerHTML=response
 nilai.innerHTML=poin
}
  
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
    document.getElementById("player-score").innerHTML = playScore
    document.getElementById("display-question").innerHTML = currentQuestion.question ;
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

