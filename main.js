// Dark mode / Light mode 


const darkModeBtn = document.getElementById('darkModeBtn');
    const body = document.body;

    darkModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        console.log(body);
    });


let correctAnswers = 0;
const totalQuestions = 10;


let calculateResults = () => {


// Fråga 1
let q1Answer = document.querySelector('input[name="q1"]:checked');
if(q1Answer && q1Answer.value === '10000') {
    correctAnswers++;

}

// Fråga 2
let q2Answer = document.querySelector('input[name="q2"]:checked');
if(q2Answer && q2Answer.value === 'true') {
    correctAnswers++;

}

// Fråga 3

let q3Answer = document.querySelector('input[name="q3"]:checked');
if(q3Answer && q3Answer.value === 'true') {
    correctAnswers++;

}

// Fråga 4 check

let q4Answer = document.querySelectorAll('input[name="q4"]:checked');
if(q4Answer.length === 3 &&
    Array.from(q4Answer).every((answer) => ['hemse', 'sproge','lärbro' ].includes(answer.value))
) {
    correctAnswers++;
}

// Fråga 5 

let q5Answer = document.querySelector('input[name="q5"]:checked');
if(q5Answer && q5Answer.value === 'Igelkotte') {
    correctAnswers++;

}



// Fråga 6

let q6Answer = document.querySelector('input[name="q6"]:checked');
if(q6Answer && q6Answer.value === 'false') {
    correctAnswers++;

}


// Fråga 7 

let q7Answer = document.querySelectorAll('input[name="q7"]:checked');
if(q7Answer.length === 3 &&
    Array.from(q4Answer).every((answer) => ['gotska', 'karlsö', 'fårö'].includes(answer.value))
) {
    correctAnswers++;
}

// Fråga 8 

let q8Answer = document.querySelectorAll('input[name="q8"]:checked');
if(q8Answer && q8Answer.value === 'Igelkotte') {
    correctAnswers++;

}

// Fråga 9 

let q9Answer = document.querySelectorAll('input[name="q9"]:checked');
if(q9Answer.length === 3 &&
    Array.from(q9Answer).every((answer) => ['holmhällar', 'sandviken','smöjen' ].includes(answer.value))
) {
    correctAnswers++;
}


// Fråga 10

let q10Answer = document.querySelectorAll('input[name="q10"]:checked');
if(q10Answer && q10Answer.value === '176') {
    correctAnswers++;
}



const percentage = (correctAnswers / totalQuestions) * 100;
return percentage;

}

let showResultBtn = document.getElementById("resultBtn");
let resultList = document.getElementById("result");
let popUp = document.querySelector(".popUp");

resultList.innerHTML = "";

showResultBtn.addEventListener("click", () => {

    popUp.classList.add("popUpShow");

    const percentage = calculateResults();

    
  resultList.innerText = `Antal rätt: ${correctAnswers} av ${totalQuestions}`;
  
  
  if (percentage < 50) {
    resultList.style.color = "red";
    resultList.innerText += "Underkänd"; 
  } else if (percentage >= 50 && percentage < 75) {
    resultList.style.color = "yellow";
    resultList.innerText += "Godkänd"; 

  } else {
    resultList.style.color = "green";
    resultList.innerText += "Riktigt bra jobbat"; 

  }
  

});




let answerBtn = document.querySelector("#correctAnswer");

answerBtn.addEventListener("click", () => {
    popUp.classList.remove("popUpShow");




});
