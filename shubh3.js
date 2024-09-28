const questions = [
   {
      question: " Who is the leading wicket taker in T20I CWC 2024?",
      answers: [
         { text: " A)   Risshad Hussain", correct: false },
         { text: " B)  Fazalhaq Farooqi", correct: true },
         { text: " C)  Arshdeep Singh", correct: false },
         { text: "D)    Pat Cummins", correct: false }
      ]
   },
   {
      question: " Who is the leading run - scorer in T20I CWC 2024 ?",
      answers: [
         { text: " A)  R. Gurbaz", correct: true },
         { text: " B)  Quinton De-Cock", correct: false },
         { text: "  C)  Rohit Sharma", correct: false },
         { text: "  D)  Travis Head", correct: false }
      ]
   },
   {
      question: " Which edition is  T20I CWC 2024?",
      answers: [
         { text: " A) 9th", correct: true },
         { text: " B) 10th", correct: false },
         { text: " C) 8th", correct: false },
         { text: " D) 11th", correct: false }
      ]
   },
   {
      question: " Host countries of  T20I CWC 2024?",
      answers: [
         { text: " A)  West-Indies and USA", correct: true },
         { text: "  B)  Sri-Lankan and Bangladesh", correct: false },
         { text: " C) West-Indies and Sri-Lankan", correct: false },
         { text: " D) Sri-Lankan and USA", correct: false }
      ]
   },
   {
      question: " Who is the current Coach of AFGHANISTAN CRICKET team?",
      answers: [
         { text: " A) Ajay jadeja", correct: false },
         { text: " B) Gary Kirsten", correct: false },
         { text: " C) Gonathan Trott", correct: true },
         { text: " D) Dwayne Bravo", correct: false }
      ]
   }
]

const quizQuestion = document.getElementById("quiz-question");
const buttonOption = document.getElementById("options");
const nextButton = document.getElementById("btn");
// const btnOption = document.getElementsByClassName("btn-option");
let currentQtnindex = 0;
let score = 0;
function startQuiz() {
   currentQtnindex = 0;
   score = 0;
   nextButton.innerHTML = "Next";
   showQuestion();

}
 function resetState(){
    nextButton.style.display = "none";
    while(buttonOption.firstChild){
      buttonOption.removeChild(buttonOption.firstChild);
    }
 }
function showQuestion() {
    resetState();
   let currentQtn = questions[currentQtnindex];
   let questionNo = currentQtnindex + 1;
   quizQuestion.innerHTML = questionNo + ". " + currentQtn.question;

   currentQtn.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.innerHTML = answer.text;
      btn.classList.add("btn-option");
      buttonOption.appendChild(btn);
      if (answer.correct) {
         btn.dataset.correct = answer.correct;
      }
      btn.addEventListener("click", selectAnswer);
   });
}
function selectAnswer(e) {
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if (isCorrect) {
      selectedBtn.classList.add("correct");
       score = score+2;
   } else {
      selectedBtn.classList.add("incorrect");
   }
   Array.from(buttonOption.children).forEach(button => {
      if (button.dataset.correct === "true") {
         button.classList.add("correct");
      }
      button.disabled = true;
   
   });
   nextButton.style.display = "block";
}
function showScore(){
   quizQuestion.innerHTML = `You scored  = ${score} / ${questions.length*2};`;
   nextButton.innerHTML = "Play Again";
   nextButton.style.display ="block";
}
function handleNextbtn(){
   currentQtnindex++;
   if(currentQtnindex<questions.length){
      showQuestion();
   }else{
      showScore();
   }
}
nextButton.addEventListener("click",()=>{
if(currentQtnindex<questions.length){
  handleNextbtn();
}else{
   startQuiz();
}
});


startQuiz();

