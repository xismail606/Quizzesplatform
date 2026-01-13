/* ===================================
   QUIZ DATA
=================================== */
const quizzesData = [
  {
    id: 1,
    title: "Operating Systems",
    description: "operating systems FINAL bank",
    questions: 106,
    duration: 60,
    difficulty: "medium",
    enabled: false
  },
  {
    id: 2,
    title: "Big Data",
    description: "BIG DATA FINAL BANK",
    questions: 125,
    duration: 60,
    difficulty: "medium",
    enabled: false,
  },
  {
    id: 3,
    title: "Software Engineering",
    description: "All Software Engineering Exams",
    questions: 205,
    duration: 120,
    difficulty: "medium",
    enabled: true,
  },
  {
    id: 4,
    title: "Internet Engineering",
    description: "Internet Engineering Gemini MCQ Questions from Lectures 1 to 10",
    questions: 200,
    duration: 200,
    difficulty: "Medium",
    enabled: false,
  },
  {
    id: 5,
    title: "Introduction to Computer Network",
    description: "Computer Network Questions Bank",
    questions: 88,
    duration: 88,
    difficulty: "Medium",
    enabled: false,
  },
  {
    id: 6,
    title: "Internet Engineering1",
    description: "Internet Engineering bank",
    questions: 95,
    duration: 95,
    difficulty: "medium",
    enabled: false,
  },
  {
    id: 7,
    title: "Coming Soon😴",
    description: "—",
    questions: 0,
    duration: 0,
    difficulty: "—",
    enabled: false,
  },
  {
    id: 8,
    title: "Coming Soon😴",
    description: "—",
    questions: 0,
    duration: 0,
    difficulty: "—",
    enabled: false,
  },
  {
    id: 9,
    title: "Coming Soon😴",
    description: "—",
    questions: 0,
    duration: 0,
    difficulty: "—",
    enabled: false,
  },
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
let isReviewMode = false;
let quizStarted = false;

/* ===================================
   DOM ELEMENTS - Global References
=================================== */
let quizContainer;
let errorContainer;
let questionBox;
let questionsModal;
let questionNumber;
let questionText;
let optionsContainer;
let nextBtn;
let prevBtn;
let timerElement;
let questionsListContainer;

/* ===================================
   PREVENT PAGE UNLOAD DURING QUIZ
=================================== */
window.addEventListener("beforeunload", function(e) {
  if (quizStarted && !isReviewMode) {
    e.preventDefault();
    e.returnValue = "Are you going to exit the quiz? You will lose all your progress";
    return "Are you going to exit the quiz? You will lose all your progress";
  }
});

/* ===================================
   LOAD QUIZ QUESTIONS DYNAMICALLY
=================================== */
function loadQuizQuestions() {
  const params = new URLSearchParams(window.location.search);
  const quizId = Number(params.get("id"));
  
  const scriptSources = {
    1: './js/OS.js',
    2: './js/bigdata.js',
    3: './js/SoftwareEngineering.js',
    4: './js/interneteng.js',
    5: './js/Computer-Network.js',
    6: './js/New01.js',
    7: './js/New02.js',
    8: './js/New03.js',
    9: './js/New04.js'
  };

  if (scriptSources[quizId]) {
    const script = document.createElement('script');
    script.src = scriptSources[quizId];
    script.async = false;
    script.onerror = () => {
      console.error('Failed to load questions script');
    };
    document.head.appendChild(script);
  }
}

/* ===================================
   INITIALIZE QUIZ
=================================== */
window.addEventListener("DOMContentLoaded", () => {
  // Load questions script first
  loadQuizQuestions();
  
  // Initialize DOM and quiz
  initializeDOMElements();
  initializeQuiz();
  
  // Setup navigation buttons
  if (prevBtn && nextBtn) {
    setupNavigationButtons();
  }
});

function initializeDOMElements() {
  quizContainer = document.getElementById("quizContainer");
  errorContainer = document.getElementById("errorContainer");
  questionBox = document.getElementById("questionBox");
  questionsModal = document.getElementById("questionsModal");
  questionNumber = document.getElementById("questionNumber");
  questionText = document.getElementById("questionText");
  optionsContainer = document.getElementById("optionsContainer");
  nextBtn = document.getElementById("nextBtn");
  prevBtn = document.getElementById("prevBtn");
  timerElement = document.getElementById("timer");
  questionsListContainer = document.getElementById("questionsListContainer");
}

function initializeQuiz() {
  const params = new URLSearchParams(window.location.search);
  const quizId = Number(params.get("id"));

  currentQuiz = quizzesData.find(q => q.id === quizId);

  if (!currentQuiz) {
    showError();
    return;
  }

  // Check if quiz is enabled - if not, redirect immediately
  if (!currentQuiz.enabled) {
    // Hide everything first
    if (quizContainer) quizContainer.style.display = "none";
    if (questionBox) questionBox.style.display = "none";
    if (errorContainer) errorContainer.style.display = "none";
    
    // Show alert and redirect
    alert("This quiz is not available 😴");
    window.location.href = "./quizzes.html";
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
  document.getElementById("quizQuestions").textContent = `📝 ${quiz.questions} question`;
  document.getElementById("quizDuration").textContent = `⏱️ ${quiz.duration} minutes`;
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
    const quizNames = {
      1: "Operating Systems",
      2: "Big Data",
      3: "Software Engineering",
      4: "Internet Engineering",
      5: "Introduction to Computer Network",
      6: "Internet Engineering1",
    };
    
    const quizName = quizNames[quizId] || "This quiz";
    alert(`${quizName} is not available yet 😴`);
    return;
  }

  // Reset variables
  currentIndex = 0;
  score = 0;
  isReviewMode = false;
  userAnswers = new Array(QUESTIONS.length).fill(null);
  quizStarted = true;

  // Hide quiz info and show questions
  quizContainer.style.display = "none";
  questionBox.style.display = "block";

  // Start timer
  if (currentQuiz && currentQuiz.duration) {
    timeRemaining = currentQuiz.duration * 60;
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
  
  updateNavigationButtons();

  // If in review mode or user has already answered this question
  const hasAnswered = userAnswers[currentIndex] !== null;

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    
    // If in review mode, show previous answers
    if (isReviewMode || hasAnswered) {
      const optionLetter = opt[0];
      const correct = q.answer;
      const userAnswer = userAnswers[currentIndex];

      // Highlight user's answer
      if (optionLetter === userAnswer) {
        if (userAnswer === correct) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
      }

      // Show correct answer
      if (optionLetter === correct) {
        btn.classList.add("correct");
      }

      btn.disabled = true;
    } else {
      btn.onclick = () => checkAnswer(opt[0], btn);
    }

    optionsContainer.appendChild(btn);
  });
}

/* ===================================
   UPDATE NAVIGATION BUTTONS
=================================== */
function updateNavigationButtons() {
  if (currentIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Update next button text
  if (currentIndex === QUESTIONS.length - 1) {
    nextBtn.textContent = isReviewMode ? "Back to Results" : "Finish Quiz";
  } else {
    nextBtn.textContent = "Next Question →";
  }

  // Show next button if already answered or in review mode
  if (userAnswers[currentIndex] !== null || isReviewMode) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
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
   NAVIGATION SETUP
=================================== */
function setupNavigationButtons() {
  prevBtn.onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showQuestion();
    }
  };

  nextBtn.onclick = () => {
    if (isReviewMode) {
      // If in review mode and at last question, go back to results
      if (currentIndex === QUESTIONS.length - 1) {
        showResult();
        return;
      }
    } else {
      // If at last question, show results
      if (currentIndex === QUESTIONS.length - 1) {
        stopTimer();
        showResult();
        return;
      }
    }

    // Move to next question
    currentIndex++;
    showQuestion();
  };
}

/* ===================================
   SHOW RESULT
=================================== */
function showResult() {
  quizStarted = false;
  
  const percentage = Math.round((score / QUESTIONS.length) * 100);
  
  let resultEmoji = "🎉";
  let resultMessage = "Excellent!";
  
  if (percentage < 50) {
    resultEmoji = "😢";
    resultMessage = "Try Again";
  } else if (percentage < 70) {
    resultEmoji = "😊";
    resultMessage = "Good";
  } else if (percentage < 90) {
    resultEmoji = "👍";
    resultMessage = "Very Good";
  }

  questionBox.innerHTML = `
    <div class="result-container">
       <h2>
        <span class="emoji">${resultEmoji}</span>
        <span class="gradient-text">${resultMessage}</span>
      </h2>
      <p>Your Score: <strong>${score}</strong> of <strong>${QUESTIONS.length}</strong></p>
      <p>Percentage: <strong>${percentage}%</strong></p>
      <div class="button-group">
        <button onclick="restartQuiz()">🔄 Restart Quiz</button>
        <button class="review-btn" onclick="reviewAnswers()">📝 Review Answers</button>
        <button onclick="goBack()">← Back to Quizzes</button>
      </div>
    </div>
  `;
}

/* ===================================
   REVIEW ANSWERS
=================================== */
function reviewAnswers() {
  isReviewMode = true;
  currentIndex = 0;
  
  questionBox.innerHTML = `
    <div class="quiz-header">
      <div class="timer-container" style="visibility: hidden;">
        <span class="timer-icon">⏱️</span>
        <span id="timer" class="timer-text">00:00</span>
      </div>
      <button class="view-all-btn" onclick="toggleQuestionsList()">
        <span>📋</span>
        <span>View all questions</span>
      </button>
    </div>

    <div id="questionNumber"></div>
    <h2 id="questionText"></h2>
    <div id="optionsContainer"></div>
    <div class="nav-buttons">
      <button id="prevBtn">← Previous</button>
      <button id="nextBtn">Next Question →</button>
    </div>
  `;

  // Re-initialize DOM elements after innerHTML change
  questionNumber = document.getElementById("questionNumber");
  questionText = document.getElementById("questionText");
  optionsContainer = document.getElementById("optionsContainer");
  nextBtn = document.getElementById("nextBtn");
  prevBtn = document.getElementById("prevBtn");
  timerElement = document.getElementById("timer");

  // Re-attach event listeners
  setupNavigationButtons();

  // Show first question
  showQuestion();
}

/* ===================================
   TOGGLE QUESTIONS LIST MODAL
=================================== */
function toggleQuestionsList() {
  if (!questionsModal) {
    questionsModal = document.getElementById("questionsModal");
  }
  
  if (questionsModal.style.display === "none" || questionsModal.style.display === "") {
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
  if (!questionsListContainer) {
    questionsListContainer = document.getElementById("questionsListContainer");
  }
  
  questionsListContainer.innerHTML = "";

  QUESTIONS.forEach((q, index) => {
    const item = document.createElement("div");
    item.className = "question-item";
    
    // Add current and answered classes
    if (index === currentIndex) {
      item.classList.add("current");
    }
    if (userAnswers[index] !== null) {
      const isCorrect = userAnswers[index] === q.answer;
      item.classList.add(isCorrect ? "answered-correct" : "answered-wrong");
    }

    item.innerHTML = `
      <span class="question-item-number">Question ${index + 1}</span>
      <div class="question-item-text">${q.question.substring(0, 80)}${q.question.length > 80 ? '...' : ''}</div>
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
  // Stop timer
  stopTimer();
  
  // Reset all variables
  currentIndex = 0;
  score = 0;
  isReviewMode = false;
  userAnswers = [];
  timeRemaining = 0;
  quizStarted = true;
  
  // Check if questions are available
  if (typeof QUESTIONS === 'undefined' || !QUESTIONS || QUESTIONS.length === 0) {
    alert('Questions are not available!');
    goBack();
    return;
  }
  
  // Reset user answers array
  userAnswers = new Array(QUESTIONS.length).fill(null);
  
  // Rebuild the question box HTML
  questionBox.innerHTML = `
    <div class="quiz-header">
      <div class="timer-container">
        <span class="timer-icon">⏱️</span>
        <span id="timer" class="timer-text">00:00</span>
      </div>
      <button class="view-all-btn" onclick="toggleQuestionsList()">
        <span>📋</span>
        <span>View all questions</span>
      </button>
    </div>

    <div id="questionNumber"></div>
    <h2 id="questionText"></h2>
    <div id="optionsContainer"></div>
    <div class="nav-buttons">
      <button id="prevBtn">← Previous</button>
      <button id="nextBtn">Next Question →</button>
    </div>
  `;
  
  // Show question box
  questionBox.style.display = "block";
  
  // Re-initialize DOM elements
  questionNumber = document.getElementById("questionNumber");
  questionText = document.getElementById("questionText");
  optionsContainer = document.getElementById("optionsContainer");
  nextBtn = document.getElementById("nextBtn");
  prevBtn = document.getElementById("prevBtn");
  timerElement = document.getElementById("timer");
  
  // Re-attach navigation event listeners
  setupNavigationButtons();
  
  // Start timer again
  if (currentQuiz && currentQuiz.duration) {
    timeRemaining = currentQuiz.duration * 60;
    startTimer();
  }
  
  // Show first question
  showQuestion();
}

/* ===================================
   GO BACK
=================================== */
function goBack() {
  quizStarted = false;
  stopTimer();
  window.location.href = "./quizzes.html";
}