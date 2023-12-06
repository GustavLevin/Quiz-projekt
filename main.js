let resultBtn = document.querySelector("#resultBtn");
let q1Answer = document.querySelector('input[name="q1"]:checked');
let q2Answer = document.querySelector('input[name="q2"]:checked');
let q3Answer = document.querySelector('input[name="q3"]:checked');
let q4Answer = document.querySelector('input[name="q4"]:checked');
let q5Answer = document.querySelector('input[name="q5"]:checked');
let q6Answer = document.querySelector('input[name="q6"]:checked');
let q7Answer = document.querySelector('input[name="q7"]:checked');
let q8Answer = document.querySelector('input[name="q8"]:checked');
let q9Answer = document.querySelector('input[name="q9"]:checked');
let q10Answer = document.querySelector('input[name="q10"]:checked');


let calculateResults = () => {
const totalQuestions = 10;
let correctAnswers = 0;

// Fråga 1
const q1Answer = document.querySelector('input[name="q1"]:checked');
if(q1Answer && q1Answer.value === '10000') {
    correctAnswers++;

}

// Fråga 2
const q2Answer = document.querySelector('input[name="q2"]:checked');
if(q2Answer && q2Answer.value === 'true') {
    correctAnswers++;

}

// Fråga 3

const q3Answer = document.querySelector('input[name="q3"]:checked');
if(q3Answer && q3Answer.value === 'true') {
    correctAnswers++;

}

// Fråga 4 check

const q4Answer = document.querySelectorAll('input[name="q4"]:checked');
if(q4Answers.length === 3 &&
    Array.from(q4Answers).every((answer) => ['Apple', 'Banana'].includes(answer.value))
) {
    correctAnswers++;
}


const percentage = (correctAnswers / totalQuestions) * 100;

}




// resultBtn.addEventListener("click", () => {

// });