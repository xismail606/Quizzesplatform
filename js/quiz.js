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
    questions: 265,
    duration: 265,
    difficulty: "hard",
    enabled: true,
  },
  {
    id: 4,
    title: "Internet Engineering",
    description: "Internet Engineering Gemini MCQ Questions from Lectures 1 to 10",
    questions: 200,
    duration: 200,
    difficulty: "hard",
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
let isPracticeMode = false;

/* ===================================
   DOM ELEMENTS - Global References
=================================== */
let quizContainer, errorContainer, questionBox, questionsModal;
let questionNumber, questionText, optionsContainer;
let nextBtn, prevBtn, timerElement, questionsListContainer;

/* ===================================
   PREVENT PAGE UNLOAD DURING QUIZ
=================================== */
window.addEventListener("beforeunload", function(e) {
  if (quizStarted && !isReviewMode) {
    e.preventDefault();
    e.returnValue = "Are you going to exit the quiz? You will lose all your progress";
    return e.returnValue;
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
    
    script.onload = () => {
        console.log("Questions script loaded successfully.");
    };
    
    script.onerror = () => {
      console.error('Failed to load questions script');
      alert("Error loading quiz questions. Please refresh.");
    };
    document.head.appendChild(script);
  }
}

/* ===================================
   INITIALIZE QUIZ
=================================== */
window.addEventListener("DOMContentLoaded", () => {
  loadQuizQuestions();
  initializeDOMElements();
  initializeQuiz();
  
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

  if (!currentQuiz.enabled) {
    if (quizContainer) quizContainer.style.display = "none";
    if (questionBox) questionBox.style.display = "none";
    if (errorContainer) errorContainer.style.display = "none";
    
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
  
  const startButton = document.querySelector('.start-button');
  if (startButton) {
    startButton.onclick = showModeSelection;
    startButton.textContent = "Start Quiz";
  }
}

/* ===================================
   SHOW MODE SELECTION
=================================== */
function showModeSelection() {
  if (typeof QUESTIONS === 'undefined' || !QUESTIONS || QUESTIONS.length === 0) {
    alert(`Questions are not loaded yet or empty. Please wait a moment or refresh.`);
    return;
  }

  quizContainer.innerHTML = `
    <div class="mode-selection">
      <h2>Select Quiz Mode</h2>
      <p>Choose how you want to take this quiz:</p>
      
      <div class="mode-options">
        <button class="mode-btn quiz-mode-btn" onclick="startQuiz(false)">
          <div class="mode-icon">📝</div>
          <h3>Quiz Mode</h3>
          <p>All questions at once</p>
          <p class="mode-detail">• Timed quiz</p>
          <p class="mode-detail">• Scroll through all questions</p>
          <p class="mode-detail">• See results at the end</p>
        </button>
        
        <button class="mode-btn practice-mode-btn" onclick="startQuiz(true)">
          <div class="mode-icon">📚</div>
          <h3>Practice Mode</h3>
          <p>One question at a time</p>
          <p class="mode-detail">• No timer</p>
          <p class="mode-detail">• Navigate between questions</p>
          <p class="mode-detail">• Instant feedback</p>
        </button>
      </div>
      
      <button class="back-btn" onclick="location.reload()">← Back</button>
    </div>
  `;
}

/* ===================================
   SHOW ERROR PAGE
=================================== */
function showError() {
  if(quizContainer) quizContainer.style.display = "none";
  if(errorContainer) errorContainer.style.display = "block";
}

/* ===================================
   START QUIZ
=================================== */
function startQuiz(practiceMode = false) {
  isPracticeMode = practiceMode;
  
  currentIndex = 0;
  score = 0;
  isReviewMode = false;
  userAnswers = new Array(QUESTIONS.length).fill(null);
  quizStarted = true;

  quizContainer.style.display = "none";
  questionBox.style.display = "block";

  if (isPracticeMode) {
    if (currentQuiz && currentQuiz.duration) {
      timeRemaining = currentQuiz.duration * 60;
    }
    showQuestion();
  } else {
    showQuizMode();
    startTimer();
  }
}

/* ===================================
   SHOW QUIZ MODE (ALL QUESTIONS)
=================================== */
function showQuizMode() {
  const headerHTML = `
    <div class="quiz-mode-header" id="stickyQuizHeader">
      <h2>📝 Quiz Mode </h2>
      <div class="quiz-mode-stats">
        <div class="timer-container">
          <span class="timer-icon">⏱️</span>
          <span id="timer" class="timer-text">00:00</span>
        </div>
        <span>Total: ${QUESTIONS.length} questions</span>
        <span id="quizModeScore">Answered: 0/${QUESTIONS.length}</span>
      </div>
    </div>
  `;
    
  const bodyHTML = `
    <div class="quiz-mode-container" id="quizModeContainer"></div>
    <div class="quiz-mode-footer">
      <button class="finish-quiz-btn" onclick="finishQuizMode()"> Finish Quiz</button>
    </div>
  `;
  const oldHeader = document.getElementById('stickyQuizHeader');
  if (oldHeader) oldHeader.remove();

  questionBox.insertAdjacentHTML('beforebegin', headerHTML);

  questionBox.innerHTML = bodyHTML;

  timerElement = document.getElementById('timer');
  const quizModeContainer = document.getElementById('quizModeContainer');
  
  const fragment = document.createDocumentFragment();

  QUESTIONS.forEach((q, index) => {
    const questionCard = document.createElement('div');
    questionCard.className = 'quiz-mode-question-card';
    questionCard.id = `quiz-q-${index}`;
    
    questionCard.innerHTML = `
      <div class="quiz-mode-question-header">
        <span class="quiz-mode-question-number">Question ${index + 1}</span>
      </div>
      <h3 class="quiz-mode-question-text">${q.question}</h3>
      ${q.image ? `<img src="${q.image}" alt="Question ${index + 1}" style="max-width: 100%; height: auto; margin: 15px auto; border-radius: 8px; display: block;">` : ''}
      <div class="quiz-mode-options" id="quiz-mode-options-${index}">
        ${q.options.map(opt => `
          <button class="quiz-mode-option-btn" onclick="selectQuizModeAnswer(${index}, '${opt[0]}')" data-option="${opt[0]}">
            ${opt}
          </button>
        `).join('')}
      </div>
    `;
    fragment.appendChild(questionCard);
  });

  quizModeContainer.appendChild(fragment);
}

/* ===================================
   SELECT QUIZ MODE ANSWER
=================================== */
function selectQuizModeAnswer(questionIndex, selected) {
  const optionsContainer = document.getElementById(`quiz-mode-options-${questionIndex}`);
  const buttons = optionsContainer.querySelectorAll('.quiz-mode-option-btn');
  
  buttons.forEach(btn => {
    btn.classList.remove('selected');
    if (btn.getAttribute('data-option') === selected) {
      btn.classList.add('selected');
    }
  });
  
  userAnswers[questionIndex] = selected;
  
  const answeredCount = userAnswers.filter(a => a !== null).length;
  const scoreDisplay = document.getElementById('quizModeScore');
  if(scoreDisplay) scoreDisplay.textContent = `Answered: ${answeredCount}/${QUESTIONS.length}`;
}

/* ===================================
   FINISH QUIZ MODE
=================================== */
function finishQuizMode() {
  const answeredCount = userAnswers.filter(a => a !== null).length;
  
  if (answeredCount < QUESTIONS.length) {
    const unanswered = QUESTIONS.length - answeredCount;
    if (!confirm(`You have ${unanswered} unanswered question(s). Do you want to finish?`)) {
      return;
    }
  }
  
  stopTimer();
  
  score = 0;
  QUESTIONS.forEach((q, index) => {
    if (userAnswers[index] === q.answer) {
      score++;
    }
  });
  
  quizStarted = false;
  showResult();
}

/* ===================================
   TIMER FUNCTIONS
=================================== */
function startTimer() {
  stopTimer();

  if(timeRemaining <= 0 && currentQuiz) {
     timeRemaining = currentQuiz.duration * 60;
  }

  timerInterval = setInterval(() => {
    timeRemaining--;
    
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    
    if(timerElement) {
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        timerElement.classList.remove('warning', 'danger');
        if (timeRemaining <= 60) {
          timerElement.classList.add('danger');
        } else if (timeRemaining <= 300) {
          timerElement.classList.add('warning');
        }
    }
    
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      finishQuizMode();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

/* ===================================
   SHOW QUESTION (PRACTICE MODE)
=================================== */
function showQuestion() {
  const q = QUESTIONS[currentIndex];

  questionNumber.textContent = `Question ${currentIndex + 1} of ${QUESTIONS.length}`;
  questionText.textContent = q.question;

  const questionTextElement = document.getElementById('questionText');
  
  if (q.image) {
    const existingImage = document.getElementById('questionImage');
    if (existingImage) existingImage.remove();
    
    const img = document.createElement('img');
    img.id = 'questionImage';
    img.src = q.image;
    img.alt = `Question ${currentIndex + 1}`;
    img.style.cssText = 'max-width: 100%; height: auto; margin: 15px auto; border-radius: 8px; display: block;';
    
    questionTextElement.after(img);
  } else {
    const existingImage = document.getElementById('questionImage');
    if (existingImage) existingImage.remove();
  }

  optionsContainer.innerHTML = "";
  updateNavigationButtons();

  const hasAnswered = userAnswers[currentIndex] !== null;

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    
    if (isReviewMode || hasAnswered) {
      const optionLetter = opt[0];
      const correct = q.answer;
      const userAnswer = userAnswers[currentIndex];

      if (optionLetter === userAnswer) {
        if (userAnswer === correct) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
      }

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
  prevBtn.disabled = (currentIndex === 0);

  if (currentIndex === QUESTIONS.length - 1) {
    nextBtn.textContent = isReviewMode ? "Back to Results" : "Finish Practice";
  } else {
    nextBtn.textContent = "Next Question →";
  }

  if (userAnswers[currentIndex] !== null || isReviewMode) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
}

/* ===================================
   CHECK ANSWER (PRACTICE MODE)
=================================== */
function checkAnswer(selected, btn) {
  const correct = QUESTIONS[currentIndex].answer;
  userAnswers[currentIndex] = selected;

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(b => {
      if (b.textContent[0] === correct) {
        b.classList.add("correct");
      }
    });
  }

  document.querySelectorAll(".option-btn").forEach(b => {
    b.disabled = true;
  });

  nextBtn.style.display = "block";
}

/* ===================================
   NAVIGATION SETUP
=================================== */
function setupNavigationButtons() {
  const newPrevBtn = prevBtn.cloneNode(true);
  const newNextBtn = nextBtn.cloneNode(true);
  prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
  nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
  
  prevBtn = newPrevBtn;
  nextBtn = newNextBtn;

  prevBtn.onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showQuestion();
    }
  };

  nextBtn.onclick = () => {
    if (currentIndex === QUESTIONS.length - 1) {
      showResult();
      return;
    }

    currentIndex++;
    showQuestion();
  };
}

/* ===================================
   SHOW RESULT
=================================== */
function showResult() {
  quizStarted = false;
  stopTimer();
  
  const percentage = Math.round((score / QUESTIONS.length) * 100);
  const stickyHeader = document.getElementById('stickyQuizHeader');
  if (stickyHeader) stickyHeader.remove();
  
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
      <p class="mode-indicator">${isPracticeMode ? '📚 Practice Mode' : '📝 Quiz Mode'}</p>
      <div class="button-group">
        <button class="review-btn" onclick="reviewAnswers()">📝 Review Answers</button>
        <button onclick="restartQuiz()">🔄 Restart Quiz</button>
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
      <div class="review-mode-label">
        <span class="review-icon">📝</span>
        <span>Review Mode - Your Score: ${score}/${QUESTIONS.length}</span>
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

  questionNumber = document.getElementById("questionNumber");
  questionText = document.getElementById("questionText");
  optionsContainer = document.getElementById("optionsContainer");
  nextBtn = document.getElementById("nextBtn");
  prevBtn = document.getElementById("prevBtn");
  
  setupNavigationButtons();
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
  const fragment = document.createDocumentFragment();

  QUESTIONS.forEach((q, index) => {
    const item = document.createElement("div");
    item.className = "question-item";
    
    if (index === currentIndex) {
      item.classList.add("current");
    }
    if (userAnswers[index] !== null) {
      const isCorrect = userAnswers[index] === q.answer;
      item.classList.add(isCorrect ? "answered-correct" : "answered-wrong");
    }

    const shortText = q.question.length > 80 ? q.question.substring(0, 80) + '...' : q.question;

    item.innerHTML = `
      <span class="question-item-number">Question ${index + 1}</span>
      <div class="question-item-text">${shortText}</div>
    `;

    item.onclick = () => {
      currentIndex = index;
      showQuestion();
      toggleQuestionsList();
    };

    fragment.appendChild(item);
  });

  questionsListContainer.appendChild(fragment);
}

/* ===================================
   RESTART QUIZ (SMART RESET) / BACK
=================================== */
function restartQuiz() {
  quizStarted = false;

  const stickyHeader = document.getElementById('stickyQuizHeader');
  if (stickyHeader) stickyHeader.remove();

  stopTimer();

  score = 0;
  currentIndex = 0;
  userAnswers = new Array(QUESTIONS.length).fill(null);
  isReviewMode = false;
  timeRemaining = 0;

  questionBox.style.display = "none";
  quizContainer.style.display = "block";
  
  if(timerElement) {
     timerElement.classList.remove('warning', 'danger');
     timerElement.textContent = "00:00";
  }

  showModeSelection();
}

function goBack() {
  quizStarted = false;
  stopTimer();
  window.location.href = "./quizzes.html";
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.quiz-mode-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});