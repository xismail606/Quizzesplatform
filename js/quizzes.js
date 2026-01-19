/* ===================================
   QUIZ DATA
=================================== */
const quizzesData = [
  {
    id: 1,
    title: "Operating Systems",
    description: "OS Final Bank - Test your knowledge",
    icon: "⚙️",
    questions: 106,
    duration: 60,
    difficulty: "Medium",
    isNew: false,
    enabled: false
  },
  {
    id: 2,
    title: "Big Data",
    description: "Big Data Final Bank - Analytics & Processing",
    icon: "📊",
    questions: 125,
    duration: 60,
    difficulty: "Medium",
    isNew: false,
    enabled: false
  },
  {
    id: 3,
    title: "Software Engineering",
    description: "All Software Engineering Exams",
    icon: "💻",
    questions: 265,
    duration: 265,
    difficulty: "hard",
    isNew: true,
    enabled: true
  },
  {
    id: 4,
    title: "Internet Engineering",
    description: "Internet Engineering Gemini MCQ Questions from Lectures 1 to 10",
    icon: "🛰️",
    questions: 200,
    duration: 200,
    difficulty: "hard",
    isNew: false,
    enabled: false
  },
  {
    id: 5,
    title: "Introduction to Computer Network",
    description: "Computer Network Questions Bank",
    icon: "🌐",
    questions: 88,
    duration: 88,
    difficulty: "Medium",
    isNew: false,
    enabled: false
  },
  {
    id: 6,
    title: "Internet Engineering",
    description: "Internet Engineering bank",
    icon: "🌐",
    questions: 95,
    duration: 95,
    difficulty: "Medium",
    isNew: false,
    enabled: false
  },
  {
    id: 7,
    title: "Software Engineering",
    description: "true/false questions",
    icon: "💻",
    questions: 84,
    duration: 84,
    difficulty: "medium",
    isNew: true,
    enabled: true
  },
  {
    id: 8,
    title: "Coming Soon",
    description: "Coming Soon",
    icon: "🔒",
    questions: 0,
    duration: 0,
    difficulty: "Soon",
    isNew: false,
    enabled: false
  },
  {
    id: 9,
    title: "Coming Soon",
    description: "Coming Soon",
    icon: "🔒",
    questions: 0,
    duration: 0,
    difficulty: "Soon",
    isNew: false,
    enabled: false
  },
];

//  Sort: New quizzes first
const sortedData = [...quizzesData].sort((a, b) => b.isNew - a.isNew);

// Display Quizzes Function
function displayQuizzes() {
  const quizList = document.getElementById('quizList');
  
  if (sortedData.length === 0) {
    quizList.innerHTML = '<div class="empty-state"><i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 20px; display: block;"></i>No quizzes are currently available.</div>';
    return;
  }

  quizList.innerHTML = sortedData.map(quiz => `
    <div class="quiz-card ${!quiz.enabled ? 'disabled' : ''}" data-quiz-id="${quiz.id}">
      ${quiz.isNew ? '<div class="new-badge">New</div>' : ''}
      <div class="quiz-icon">${quiz.icon}</div>
      <div class="quiz-title">${quiz.title}</div>
      <div class="quiz-description">${quiz.description}</div>
      <div class="quiz-info">
        <div class="info-item">
          <div class="info-label">Questions</div>
          <div class="info-value">${quiz.enabled ? quiz.questions : '—'}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Duration</div>
          <div class="info-value">${quiz.enabled ? quiz.duration + ' min' : '—'}</div>
        </div>
        <div class="info-item">
          <div class="info-label">Level</div>
          <div class="info-value">${quiz.difficulty}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// Select Quiz Function
function selectQuiz(quizId) {
  const quiz = quizzesData.find(q => q.id === quizId);
  if (quiz && quiz.enabled) {
    window.location.href = `quiz.html?id=${quizId}`;
  }
}

//  Initialize on DOM Content Loaded
window.addEventListener('DOMContentLoaded', () => {
  // Event delegation
  document.getElementById('quizList').addEventListener('click', (e) => {
    const card = e.target.closest('.quiz-card');
    if (card && !card.classList.contains('disabled')) {
      const quizId = parseInt(card.dataset.quizId);
      selectQuiz(quizId);
    }
  });
  
  // Display quizzes on load
  displayQuizzes();
});