let correctAnswers = 0;
const totalQuestions = 10;



let calculateResults = () => {



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
if(q4Answer.length === 2 &&
    Array.from(q4Answer).every((answer) => ['hemse', 'sproge'].includes(answer.value))
) {
    correctAnswers++;
}

// Fråga 5 

const q5Answer = document.querySelector('input[name="q5"]:checked');
if(q5Answer && q5Answer.value === 'Igelkotte') {
    correctAnswers++;

}



// Fråga 6

const q6Answer = document.querySelector('input[name="q6"]:checked');
if(q6Answer && q6Answer.value === 'false') {
    correctAnswers++;

}


// Fråga 7 

const q7Answer = document.querySelectorAll('input[name="q7"]:checked');
if(q7Answer.length === 3 &&
    Array.from(q4Answer).every((answer) => ['gotska', 'karlsö', 'fårö'].includes(answer.value))
) {
    correctAnswers++;
}

// Fråga 8 

const q8Answer = document.querySelectorAll('input[name="q8"]:checked');
if(q8Answer && q8Answer.value === 'Igelkotte') {
    correctAnswers++;

}

// Fråga 9 

const q9Answer = document.querySelectorAll('input[name="q9"]:checked');

// Fråga 10

const q10Answer = document.querySelectorAll('input[name="q10"]:checked');




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

    // Display the result in the result list
  resultList.innerText = `Antal rätt: ${correctAnswers} av ${totalQuestions}`;
  
  // Color the result based on the percentage
  if (percentage < 50) {
    resultList.style.color = "red";
    resultList.innerText += "Underkänd"; 
  } else if (percentage >= 50 && percentage < 75) {
    resultList.style.color += "yellow";
    resultList.innerText = "Godkänd"; 

  } else {
    resultList.style.color = "green";
    resultList.innerText += "Riktigt bra jobbat"; 

  }
  

});

let answersArray = {
    q1: '10000',
    q2: 'true',
    q3: 'true',
    q4: ['hemse', 'sproge'],
    q5: 'Igelkotte',
    q6: 'false',
    q7: ['gotska', 'karlsö', 'fårö'],
    q8: 'v.32',
    q9: ['gotska', 'karlsö', 'fårö'],
    q10: '156',
  };




let answerBtn = document.querySelector("#correctAnswer");

answerBtn.addEventListener("click", () => {
    popUp.classList.remove("popUpShow");



});
