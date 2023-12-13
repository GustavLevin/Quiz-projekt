// Get the dark mode button and the body element
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

// Togglar darkmode så det blir light mode (normalt)
darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    console.log(body);
});

// 
let correctAnswers = 0;
const totalQuestions = 10;
let userAnswers = []; // Array som sparar om de svarat rätt eller fel

// Funktionen som räknar ut resultatet på quizen
let calculateResults = () => {

    correctAnswers = 0;
    userAnswers = [];

    // Fråga 1
let q1Answer = document.querySelector('input[name="q1"]:checked');
if(q1Answer && q1Answer.value === '60000') {
    correctAnswers++;
    userAnswers.push(true); // Pushar in i userAnswer arrayen
    } else {
        userAnswers.push(false); // Pushar in i userAnswer arrayen
    }

// Fråga 2
let q2Answer = document.querySelector('input[name="q2"]:checked');
if(q2Answer && q2Answer.value === 'false') {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }

// Fråga 3

let q3Answer = document.querySelector('input[name="q3"]:checked');
if(q3Answer && q3Answer.value === 'true') {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }

// Fråga 4 check

let q4Answer = document.querySelectorAll('input[name="q4"]:checked');
if(q4Answer.length === 3 && Array.from(q4Answer).every((answer) => ['hemse', 'viklau','lärbro' ].includes(answer.value))
) {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }

// Fråga 5 

let q5Answer = document.querySelector('input[name="q5"]:checked');
if(q5Answer && q5Answer.value === 'Igelkott') {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }



// Fråga 6

let q6Answer = document.querySelector('input[name="q6"]:checked');
if(q6Answer && q6Answer.value === 'false') {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }


// Fråga 7 

let q7Answer = document.querySelectorAll('input[name="q7"]:checked');
if(q7Answer.length === 3 && Array.from(q7Answer).every((answer) => ['gotska', 'karlsö', 'fårö'].includes(answer.value))) {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }


// Fråga 8 
let q8Answer = document.querySelectorAll('input[name="q8"]:checked');
if (q8Answer.length === 1 && q8Answer[0].value === 'v.32') {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }


// Fråga 9 

let q9Answer = document.querySelectorAll('input[name="q9"]:checked');
if(q9Answer.length === 3 && Array.from(q9Answer).every((answer) => ['holmhällar', 'sandviken','smöjen' ].includes(answer.value))) {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }


// Fråga 10

let q10Answer = document.querySelector('input[name="q10"]:checked');
if(q10Answer && q10Answer.value === '176') {
    correctAnswers++;
    userAnswers.push(true); 
    } else {
        userAnswers.push(false); 
    }

    // Returnerar ett objekt med Procent och UserAnswer
    const percentage = (correctAnswers / totalQuestions) * 100;
    return { percentage, userAnswers };
}


let showResultBtn = document.getElementById("resultBtn");
let resultList = document.getElementById("result");
let popUp = document.querySelector(".popUp");




showResultBtn.addEventListener("click", () => {
    

    // Får popUp att visas
    popUp.classList.add("popUpShow");

    // Visar och räknar ut quiz resultatet
    const { percentage } = calculateResults();
    
    resultList.innerText = `Antal rätt: ${correctAnswers} av ${totalQuestions}`;
  
    // Sätter färg på texten / lägger till text beroende på hur många % rätt
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
});

// Hämtar Visa resultat knappen och lägger tryAgainBtn i globala scopet
let answerBtn = document.getElementById("correctAnswer");
let tryAgainBtn;


answerBtn.addEventListener("click", () => {

    showResultBtn.style.display = "none";
    // räknar ut resultatet och går igenom varje index för att sedan få ut om det är rätt/fel
    const { userAnswers } = calculateResults();
    userAnswers.forEach((answer, index) => {
        let questionDivs = document.querySelectorAll('.question');
        let questionDiv = questionDivs[index];

        if (questionDiv) {
            let isCorrect = document.createElement("h3");

            // lägger till "correct" or "incorrect" klass beroende på svar
            if (answer === true) {
                questionDiv.classList.add('correct');
                isCorrect.innerText = "Korrekt svar";
            } else {
                questionDiv.classList.add('incorrect');
                isCorrect.innerText = "Felaktigt svar";
            }

            // Lägger till dark mode klass om det är dark-mode aktivt
            if (body.classList.contains('dark-mode')) {
                isCorrect.classList.add('dark-mode');
            }

            // Append resultatet till questiondiven
            questionDiv.appendChild(isCorrect);
        }
    });

    
    // Skapar en "Försök igen" knapp som laddar om sidan så man kan göra om
    tryAgainBtn = document.createElement('button');
    tryAgainBtn.innerText = 'Försök igen';
    tryAgainBtn.id = 'tryAgainBtn';
    TryAgainLocation = document.querySelector(".showResult")
    TryAgainLocation.appendChild(tryAgainBtn);

    tryAgainBtn.addEventListener("click", () => {
        location.reload();
    });
    // Tar bort popup
    popUp.classList.remove("popUpShow");

 });


 


