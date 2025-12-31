/* ===================================
   QUIZ DATA
=================================== */
const quizzesData = [
  {
    id: 1,
    title: "Operating Systems",
    description: "operating systems question bank",
    questions: 106,
    duration: 60,
    difficulty: "متوسط"
  },
  {
    id: 2,
    title: "Not yet 😴",
    description: "Not yet 😴",
    questions: 20,
    duration: 25,
    difficulty: "Not yet 😴",
  },
  {
    id: 3,
    title: "Not yet 😴",
    description: "Not yet 😴",
    questions: 18,
    duration: 30,
    difficulty: "Not yet 😴",
  }
];

/* ===================================
   GLOBAL VARIABLES
=================================== */
let currentIndex = 0;
let score = 0;
let currentQuiz = null;
let timerInterval = null;
let timeRemaining = 0;
let userAnswers = [];

/* ===================================
   DOM ELEMENTS
=================================== */
const quizContainer = document.getElementById("quizContainer");
const errorContainer = document.getElementById("errorContainer");
const questionBox = document.getElementById("questionBox");
const questionsModal = document.getElementById("questionsModal");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const timerElement = document.getElementById("timer");
const questionsListContainer = document.getElementById("questionsListContainer");

/* ===================================
   INITIALIZE QUIZ
=================================== */
window.addEventListener("DOMContentLoaded", () => {
  initializeQuiz();
});

function initializeQuiz() {
  const params = new URLSearchParams(window.location.search);
  const quizId = Number(params.get("id"));

  currentQuiz = quizzesData.find(q => q.id === quizId);

  if (!currentQuiz) {
    showError();
    return;
  }

  displayQuizInfo(currentQuiz);
}

/* ===================================
   DISPLAY QUIZ INFO
=================================== */
function displayQuizInfo(quiz) {
  document.getElementById("quizTitle").textContent = quiz.title;
  document.getElementById("quizDescription").textContent = quiz.description;
  document.getElementById("quizQuestions").textContent = `📝 ${quiz.questions} سؤال`;
  document.getElementById("quizDuration").textContent = `⏱️ ${quiz.duration} دقيقة`;
  document.getElementById("quizDifficulty").textContent = `📊 ${quiz.difficulty}`;
}

/* ===================================
   SHOW ERROR PAGE
=================================== */
function showError() {
  quizContainer.style.display = "none";
  errorContainer.style.display = "block";
}

/* ===================================
   START QUIZ
=================================== */
function startQuiz() {
  const params = new URLSearchParams(window.location.search);
  const quizId = Number(params.get("id"));

  // Check if questions are available
  if (typeof QUESTIONS === 'undefined' || !QUESTIONS || QUESTIONS.length === 0) {
    let quizName = "هذا الكويز";
    
    if (quizId === 1) {
      quizName = "Operating Systems";
    } else if (quizId === 2) {
      quizName = "Not yet 😴";
    } else if (quizId === 3) {
      quizName = "Not yet 😴";
    }
    
    alert(`${quizName} Not yet 😴`);
    return;
  }

  // Reset variables
  currentIndex = 0;
  score = 0;
  userAnswers = new Array(QUESTIONS.length).fill(null);

  // Hide quiz info and show questions
  quizContainer.style.display = "none";
  questionBox.style.display = "block";

  // Start timer
  if (currentQuiz && currentQuiz.duration) {
    timeRemaining = currentQuiz.duration * 60; // Convert to seconds
    startTimer();
  }

  // Show first question
  showQuestion();
}

/* ===================================
   TIMER FUNCTIONS
=================================== */
function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    
    // Update timer display
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Add warning colors
    timerElement.classList.remove('warning', 'danger');
    if (timeRemaining <= 60) {
      timerElement.classList.add('danger');
    } else if (timeRemaining <= 300) {
      timerElement.classList.add('warning');
    }
    
    // Time's up
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      showResult();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}

/* ===================================
   SHOW QUESTION
=================================== */
function showQuestion() {
  const q = QUESTIONS[currentIndex];

  questionNumber.textContent = `Question ${currentIndex + 1} of ${QUESTIONS.length}`;
  questionText.textContent = q.question;

  optionsContainer.innerHTML = "";
  nextBtn.style.display = "none";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt[0], btn);
    optionsContainer.appendChild(btn);
  });
}

/* ===================================
   CHECK ANSWER
=================================== */
function checkAnswer(selected, btn) {
  const correct = QUESTIONS[currentIndex].answer;

  // Save user answer
  userAnswers[currentIndex] = selected;

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    
    // Show correct answer
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(b => {
      if (b.textContent[0] === correct) {
        b.classList.add("correct");
      }
    });
  }

  // Disable all buttons
  document.querySelectorAll(".option-btn").forEach(b => {
    b.disabled = true;
  });

  // Show next button
  nextBtn.style.display = "block";
}

/* ===================================
   NEXT QUESTION
=================================== */
nextBtn.onclick = () => {
  currentIndex++;
  
  if (currentIndex < QUESTIONS.length) {
    showQuestion();
  } else {
    stopTimer();
    showResult();
  }
};

/* ===================================
   SHOW RESULT
=================================== */
function showResult() {
  const percentage = Math.round((score / QUESTIONS.length) * 100);
  
  let resultEmoji = "🎉";
  let resultMessage = "Excellent!";
  
  if (percentage < 50) {
    resultEmoji = "😔";
    resultMessage = "Try Again";
  } else if (percentage < 70) {
    resultEmoji = "😊";
    resultMessage = "Good";
  } else if (percentage < 90) {
    resultEmoji = "👏";
    resultMessage = "Very Good";
  }

  questionBox.innerHTML = `
    <div class="result-container">
      <h2>${resultEmoji} ${resultMessage}</h2>
      <p>Your Score: <strong>${score}</strong> of <strong>${QUESTIONS.length}</strong></p>
      <p>Percentage: <strong>${percentage}%</strong></p>
      <button onclick="restartQuiz()">Restart Quiz</button>
      <button onclick="goBack()">Back to Quizzes</button>
    </div>
  `;
}

/* ===================================
   TOGGLE QUESTIONS LIST MODAL
=================================== */
function toggleQuestionsList() {
  if (questionsModal.style.display === "none") {
    showQuestionsList();
    questionsModal.style.display = "flex";
  } else {
    questionsModal.style.display = "none";
  }
}

/* ===================================
   SHOW QUESTIONS LIST
=================================== */
function showQuestionsList() {
  questionsListContainer.innerHTML = "";

  QUESTIONS.forEach((q, index) => {
    const item = document.createElement("div");
    item.className = "question-item";
    
    // Add current and answered classes
    if (index === currentIndex) {
      item.classList.add("current");
    }
    if (userAnswers[index] !== null) {
      item.classList.add("answered");
    }

    item.innerHTML = `
      <span class="question-item-number">Question ${index + 1}</span>
      <div class="question-item-text">${q.question}</div>
    `;

    item.onclick = () => {
      currentIndex = index;
      showQuestion();
      toggleQuestionsList();
    };

    questionsListContainer.appendChild(item);
  });
}

/* ===================================
   RESTART QUIZ
=================================== */
function restartQuiz() {
  stopTimer();
  currentIndex = 0;
  score = 0;
  userAnswers = [];
  questionBox.style.display = "none";
  quizContainer.style.display = "block";
}

/* ===================================
   GO BACK
=================================== */
function goBack() {
  stopTimer();
  window.location.href = "./quizzes.html";
}