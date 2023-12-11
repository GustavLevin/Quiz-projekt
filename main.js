// Dark mode / Light mode 


const darkModeBtn = document.getElementById('darkModeBtn');
    const body = document.body;

    darkModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        console.log(body);
    });


let correctAnswers = 0;
const totalQuestions = 10;
let userAnswers = []; // Declare userAnswers outside the function

let calculateResults = () => {


// Fråga 1
let q1Answer = document.querySelector('input[name="q1"]:checked');
if(q1Answer && q1Answer.value === '10000') {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array

}

// Fråga 2
let q2Answer = document.querySelector('input[name="q2"]:checked');
if(q2Answer && q2Answer.value === 'true') {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array
}

// Fråga 3

let q3Answer = document.querySelector('input[name="q3"]:checked');
if(q3Answer && q3Answer.value === 'true') {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array
}

// Fråga 4 check

let q4Answer = document.querySelectorAll('input[name="q4"]:checked');
if(q4Answer.length === 3 &&
    Array.from(q4Answer).every((answer) => ['hemse', 'sproge','lärbro' ].includes(answer.value))
) {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array
}

// Fråga 5 

let q5Answer = document.querySelector('input[name="q5"]:checked');
if(q5Answer && q5Answer.value === 'Igelkotte') {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array
}



// Fråga 6

let q6Answer = document.querySelector('input[name="q6"]:checked');
if(q6Answer && q6Answer.value === 'false') {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array

}


// Fråga 7 

let q7Answer = document.querySelectorAll('input[name="q7"]:checked');
if(q7Answer.length === 3 &&
    Array.from(q7Answer).every((answer) => ['gotska', 'karlsö', 'fårö'].includes(answer.value))
) {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array
}


// Fråga 8 
let q8Answer = document.querySelectorAll('input[name="q8"]:checked');
if (q8Answer.length === 1 && q8Answer[0].value === 'v.32') {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array
}


// Fråga 9 

let q9Answer = document.querySelectorAll('input[name="q9"]:checked');
if(q9Answer.length === 3 &&
    Array.from(q9Answer).every((answer) => ['holmhällar', 'sandviken','smöjen' ].includes(answer.value))
) {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array
}


// Fråga 10

let q10Answer = document.querySelectorAll('input[name="q10"]:checked');
if(q10Answer && q10Answer.value === '176') {
    correctAnswers++;
    userAnswers.push(true); // Update userAnswers array
    } else {
        userAnswers.push(false); // Update userAnswers array
}



const percentage = (correctAnswers / totalQuestions) * 100;
return { percentage, userAnswers }; // Return an object with percentage and userAnswers



}

let showResultBtn = document.getElementById("resultBtn");
let resultList = document.getElementById("result");
let popUp = document.querySelector(".popUp");
let tryAgainBtn;

resultList.innerHTML = "";

showResultBtn.addEventListener("click", () => {

    popUp.classList.add("popUpShow");

    const { percentage, userAnswers } = calculateResults();

    
  resultList.innerText = `Antal rätt: ${correctAnswers} av ${totalQuestions}`;
  
  
  if (percentage < 50) {
    resultList.style.color = "red";
    resultList.innerText += " Underkänd"; 
  } else if (percentage >= 50 && percentage < 75) {
    resultList.style.color = "yellow";
    resultList.innerText += " Godkänd"; 

  } else {
    resultList.style.color = "green";
    resultList.innerText += " Riktigt bra jobbat"; 

  }

  tryAgainBtn = document.createElement('button');
    tryAgainBtn.innerText = 'Try Again';
    tryAgainBtn.id = 'tryAgainBtn';
    tryAgainBtn.addEventListener('click', tryAgain);
    popUp.appendChild(tryAgainBtn);

  

});

function tryAgain() {
    // Remove feedback and reset answers
    popUp.classList.remove("popUpShow");
    resultList.innerText = "";
    resultList.style.color = "inherit";
    userAnswers = [];

    // Remove correct/incorrect classes from question divs
    document.querySelectorAll('.question').forEach((question) => {
        question.classList.remove('correct', 'incorrect');
    });

    // Remove "Try Again" button
    if (tryAgainBtn) {
        tryAgainBtn.remove();
    }
}


let answerBtn = document.getElementById("correctAnswer");

answerBtn.addEventListener("click", () => {
    const { userAnswers } = calculateResults();

    // Iterate through each question
    userAnswers.forEach((answer, index) => {
        let questionDivs = document.querySelectorAll('.question');
        let questionDiv = questionDivs[index];

        if (questionDiv) {
            let isCorrect = document.createElement("h3");

            if (answer === true) {
                questionDiv.classList.add('correct');
                isCorrect.innerText = "Korrekt svar";
            } else {
                questionDiv.classList.add('incorrect');
                isCorrect.innerText = "Felaktigt svar";
            }

            // Append isCorrect to the questionDiv
            questionDiv.appendChild(isCorrect);
        }
    });

    popUp.classList.remove("popUpShow");
});

