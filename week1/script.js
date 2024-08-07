const questions = [
    {
        question : "The concept of gravity was discovered by which famous physicist?",
        answers: [
            { text: "Albert Einstein" , correct: false},
            { text: "Galileo Galilei" , correct: false},
            { text: "Sir Isaac Newton" , correct: true},
            { text: "Nikola Tesla " , correct: false},
        ]
    },
    {
        question: "On what continent will you not find bees?",
        answers:[
            { text: " Africa" , correct: false},
            { text: "Antarctica" , correct: true},
            { text: " Australia" , correct: false},
            { text: "Asia" , correct: false},
        ]
    },
    {
        question: "How mnay colors does a rainbow contains?",
        answers:[
            { text: " 5 " , correct: false},
            { text: " 7 " , correct: true},
            { text: " 10 " , correct: false},
            { text: " 6 " , correct: false},
        ]
    }
    
];
const questionElement = document.getElementById("question");
const answerButton  = document.getElementById("answer-buttons");
const nextButton  = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
   
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo  +  "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).map(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"

}


nextButton.addEventListener("click", function (){
    currentQuestionIndex++;
    showQuestion()
})



startQuiz();





