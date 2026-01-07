// Quiz Data
    const quizzesData = [
      {
        id: 1,
        title: "Operating Systems",
        description: "OS Final Bank - Test your knowledge",
        icon: "⚙️",
        questions: 106,
        duration: 60,
        difficulty: "Medium",
        isNew: true,
        enabled: true
      },
      {
        id: 2,
        title: "Big Data",
        description: "Big Data Final Bank - Analytics & Processing",
        icon: "📊",
        questions: 125,
        duration: 60,
        difficulty: "Medium",
        isNew: true,
        enabled: true
      },
      {
        id: 3,
        title: "Software Engineering",
        description: "All Software Engineering Exams",
        icon: "💻",
        questions: 205,
        duration: 120,
        difficulty: "Medium",
        isNew: true,
        enabled: true
      },
      {
        id: 4,
        title: "Internet Engineering",
        description: "Internet Engineering Gemini mcq Q lec 1 to 5",
        icon: "🛰️",
        questions: 100,
        duration: 100,
        difficulty: "Medium",
        isNew: true,
        enabled: true
      },
      {
        id: 5,
        title: "Introduction to Computer Network",
        description: "Computer Network Questions Bank",
        icon: "🌐",
        questions: 88,
        duration: 88,
        difficulty: "Medium",
        isNew: true,
        enabled: true
      },
      {
        id: 6,
        title: "Digital Signal Processing",
        description: "Digital Signal Processing mcq",
        icon: "🔊",
        questions: 91,
        duration: 91,
        difficulty: "Hard",
        isNew: true,
        enabled: true
      },
      {
        id: 7,
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

    // Display Quizzes Function
    function displayQuizzes() {
      const quizList = document.getElementById('quizList');
      
      if (quizzesData.length === 0) {
        quizList.innerHTML = '<div class="empty-state"><i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 20px; display: block;"></i>No quizzes are currently available.</div>';
        return;
      }

      quizList.innerHTML = quizzesData.map(quiz => `
        <div class="quiz-card ${!quiz.enabled ? 'disabled' : ''}" onclick="${quiz.enabled ? `selectQuiz(${quiz.id})` : 'void(0)'}">
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

    // Initialize on Page Load
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(displayQuizzes, 500);
    });
