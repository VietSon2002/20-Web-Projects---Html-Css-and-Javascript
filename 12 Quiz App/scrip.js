let star = document.querySelector(".animation-star");
let points = document.querySelector(".points");
let question = document.querySelector(".question");
let currQueNr = document.querySelector(".current-que-nr");
let allQueNr = document.querySelector(".all-que-nr");
let answer1 = document.querySelector(".answer--1");
let answer2 = document.querySelector(".answer--2");
let answer3 = document.querySelector(".answer--3");
let answer4 = document.querySelector(".answer--4");

let userAnswer;
let number = 1;
let point = 0;

let quizzes = {

    quiz1: {
        que: "What is the capital of Germany ?",
        choices: {
            choice1: "Munich",
            choice2: "Berlin",
            choice3: "Dortmund",
            choice4: "Frankfurt",
        },
        answer: "Berlin",
    },
    quiz2: {
        que: "What is the capital of France?",
        choices: {
            choice1: "Lyon",
            choice2: "Marseille",
            choice3: "Paris",
            choice4: "Nice",
        },
        answer: "Paris",
    },

    quiz3: {
        que: "What is the capital of Japan?",
        choices: {
            choice1: "Kyoto",
            choice2: "Tokyo",
            choice3: "Osaka",
            choice4: "Nagoya",
        },
        answer: "Tokyo",
    },

    quiz4: {
        que: "What is the capital of Italy?",
        choices: {
            choice1: "Milan",
            choice2: "Naples",
            choice3: "Rome",
            choice4: "Florence",
        },
        answer: "Rome",
    },

    quiz5: {
        que: "What is the capital of Canada?",
        choices: {
            choice1: "Toronto",
            choice2: "Vancouver",
            choice3: "Montreal",
            choice4: "Ottawa",
        },
        answer: "Ottawa",
    },

    quiz6: {
        que: "What is the capital of Australia?",
        choices: {
            choice1: "Sydney",
            choice2: "Melbourne",
            choice3: "Canberra",
            choice4: "Perth",
        },
        answer: "Canberra",
    },

    quiz7: {
        que: "What is the capital of Brazil?",
        choices: {
            choice1: "Rio de Janeiro",
            choice2: "Brasília",
            choice3: "São Paulo",
            choice4: "Salvador",
        },
        answer: "Brasília",
    },

    quiz8: {
        que: "What is the capital of India?",
        choices: {
            choice1: "Mumbai",
            choice2: "New Delhi",
            choice3: "Bangalore",
            choice4: "Kolkata",
        },
        answer: "New Delhi",
    },

    quiz9: {
        que: "What is the capital of Russia?",
        choices: {
            choice1: "Saint Petersburg",
            choice2: "Moscow",
            choice3: "Kazan",
            choice4: "Novosibirsk",
        },
        answer: "Moscow",
    },

    quiz10: {
        que: "What is the capital of South Korea?",
        choices: {
            choice1: "Busan",
            choice2: "Seoul",
            choice3: "Incheon",
            choice4: "Daegu",
        },
        answer: "Seoul",
    }

}

function getAnswer(e) {
    let parent = e.target.closest("span");
    let child = parent?.querySelector("p");//kiem tra parent co ton tai khong

    if (child) {
        userAnswer = child.textContent;
        changeQuiz();
    }
}

document.addEventListener("click", getAnswer);

function changeQuiz() {
    // curren question number
    let quizNr = currQueNr.textContent;
    // [KEYS:quiz1,quiz2,quiz3,.....]
    let keys = Object.keys(quizzes);
    // figer out the next quiz
    let nextQuiz = keys[quizNr];
    //update the next quiz
    number++;
    currQueNr.textContent = number;
    //update question
    question.textContent = quizzes[nextQuiz].que;
    checkAnswer(keys[quizNr - 1]);
    changeAnswers(nextQuiz)
}

function changeAnswers(nextQuiz) {
    answer1.textContent = quizzes[nextQuiz].choices.choice1;
    answer2.textContent = quizzes[nextQuiz].choices.choice2;
    answer3.textContent = quizzes[nextQuiz].choices.choice3;
    answer4.textContent = quizzes[nextQuiz].choices.choice4;
}

function checkAnswer(oldQuiz) {
    let correctAnswer = quizzes[oldQuiz].answer;

    if (correctAnswer === userAnswer) showAnimation();
}

function showAnimation() {
    star.classList.add("anim-star");
    point++;
    setTimeout(() => {//delay thoi gian tinh diem va reset animation
        star.classList.remove("anim-star");
        points.textContent = point;
    }, 2000);
}