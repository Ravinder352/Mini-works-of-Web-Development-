// for 20 questions
const questions = [
    { question: "What is your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
    { question: "What is your favorite animal?", options: ["Dog", "Cat", "Bird", "Fish"] },
    { question: "What is your favorite food?", options: ["Pizza", "Burger", "Pasta", "Sushi"] },
    { question:"Which state you are belongs to ?", options: ["Tamil Nadu", "Andhara Pradesh","Telangana","Other states"] },
    { question:"How old are you ?", options: ["below 16 years", "16-18 years","18-22 years","above 22 years"] },
    { question:"Where do you stay ?", options: ["town", "village","city","Other areas"] },
    { question:"What is your education status ?", options: ["below tenth", "Tenth","Intermediate","Completed intermediate"] },
    { question:"Select object that is in green", options: ["apple", "leaf","beans","all of the above "] },
    { question:"When do you wake up in morning ?", options: ["Before 5:00 am", "5:00 am - 6:00 am","6:00-8:00am","after 8:00 am"] },
    { question:"How many hours do you sleep ?", options: ["10", "8","7","it varies every day"] },
    { question:"What do you make in your free time mostly ?", options: ["playing", "travelling ","spend some time for you","Other activities"] },
    { question:"Where do you eat daily ?", options: ["Rice", "Roti","both","other than these options"] },
    { question:"Which browser do you use mostly?", options: ["Chrome", "Edge","Firefox","Others "] },
    { question:"At what time do you mostly spend your time on the internet?", options: ["morning", "afternoon","night","it varies daily"] },
    { question:"Which social media do you use mostly ?", options: ["WhatsApp", "Instagram","Facebook","Other apps"] },
    { question:"Which day in a week do you like most?", options: ["Saturday", "Sunday","Monday","any other days"] },
    { question:"Which upcoming feature attracts you most in x app?", options: ["Audio calls", "Video calls","Payments for content creators","Other features"] },
    { question:"What do you think about 0 (zero) number?", options: ["no value", "some value","imaginary content","Other reasons"] },
    { question:"Add I + II + III roman numbers", options: ["6", "IIIIII","I1I2I3","any value"] },
    { question:"Which is an Indian organization?", options: ["NASA", "ISRO","FBI","Spacex"] },
];

// defining variables
let currentQuestionIndex = 0;
let timer;
let totalTime = 0;
let questionTimes = [];

const questionElement = document.getElementById("question");
const questionHeader = document.getElementById("questionHeader");
const timeRemainingElement = document.getElementById("timeRemaining");
const optionsContainer = document.getElementById("options");
const timerElement = document.getElementById("timer");
const submitBtn = document.getElementById("submitBtn");
const feedbackContainer = document.querySelector(".feedback-container");
const totalTimeElement = document.getElementById("totalTime");
const questionTimesElement = document.getElementById("questionTimes");
const ratingInput = document.getElementById("rating");
const feedbackInput = document.getElementById("feed");
const submitFeedbackBtn = document.getElementById("submitFeedback");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    questionHeader.style.display = "block"; 
    // radio options
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.id = `option${index}`;
        input.value = option;
        const label = document.createElement("label");
        label.htmlFor = `option${index}`;
        label.textContent = option;
        optionsContainer.appendChild(input);
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement("br"));
    });
    startTimer();
}

function startTimer() {
    let timeLeft = 30;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswer();
        }
    }, 1000);
}

function submitAnswer() {
    clearInterval(timer);
    const timeTaken = 30 - parseInt(timerElement.textContent);
    totalTime += timeTaken;
    questionTimes.push({ question: questions[currentQuestionIndex].question, time: timeTaken });
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showFeedback();
    }
}

function showFeedback() {
    document.querySelector(".container").style.display = "none";
    feedbackContainer.style.display = "block";
    totalTimeElement.textContent = totalTime;
    questionTimes.forEach((entry) => {
        const row = document.createElement("tr");
        const questionCell = document.createElement("td");
        questionCell.textContent = entry.question;
        const timeCell = document.createElement("td");
        timeCell.textContent = entry.time;
        row.appendChild(questionCell);
        row.appendChild(timeCell);
        questionTimesElement.appendChild(row);
    });
}

submitBtn.addEventListener("click", submitAnswer);

submitFeedbackBtn.addEventListener("click", () => {
    const rating = ratingInput.value;
    const feedback = feedbackInput.value;
    console.log("Feedback submitted:", { rating, feedback });
    // You can store the feedback or send it to a server here
});

// initialize the first question
displayQuestion();
