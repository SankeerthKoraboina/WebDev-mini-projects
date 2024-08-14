const questions = [{
        questions: "What is the Capital of Greece?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Athens", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        questions: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic", correct: false },
            { text: "Pacific", correct: true },
            { text: "Indian", correct: false },
            { text: "Arctic", correct: false }
        ]
    },
    {
        questions: "Which one of the following countries has a city named Istanbul?",
        answers: [
            { text: "Turkey", correct: true },
            { text: "Denmark", correct: false },
            { text: "Spain", correct: false },
            { text: "Germany", correct: false }
        ]
    },
    {
        questions: "What is the Capital of Australia?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Canberra", correct: true },
            { text: "Sydney", correct: false },
            { text: "Mumbai", correct: false }
        ]
    },
    {
        questions: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "India", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        questions: "What is the longest river in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        questions: "Which country has the most natural lakes?",
        answers: [
            { text: "Canada", correct: true },
            { text: "Russia", correct: false },
            { text: "United States", correct: false },
            { text: "Brazil", correct: false }
        ]
    },
    {
        questions: "What is the smallest country in the world?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ]
    },
    {
        questions: "Which desert is the largest in the world?",
        answers: [
            { text: "Sahara", correct: true },
            { text: "Gobi", correct: false },
            { text: "Kalahari", correct: false },
            { text: "Arabian", correct: false }
        ]
    },
    {
        questions: "Which mountain range separates Europe and Asia?",
        answers: [
            { text: "Himalayas", correct: false },
            { text: "Rockies", correct: false },
            { text: "Andes", correct: false },
            { text: "Ural", correct: true }
        ]
    }
];


const questionsElement = document.getElementById("question");
const answerElement = document.getElementById("answerButton");
const nextElement = document.getElementById("nextButton");
const startElement = document.getElementById("startButton");
const scoreElement = document.getElementById("score");

let score = 0;
let currentQuestionIndex = 0;

startElement.addEventListener("click", startQuiz);
nextElement.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    startElement.style.display = "none";
    nextElement.style.display = "none";
    scoreElement.style.display = "none";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNumber + ". " + currentQuestion.questions;
    answerElement.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerElement.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
    nextElement.style.display = "none";
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct == "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answerElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextElement.style.display = "block";
}

function showScore() {
    questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextElement.style.display = "none";
    startElement.style.display = "block";
}

startQuiz();